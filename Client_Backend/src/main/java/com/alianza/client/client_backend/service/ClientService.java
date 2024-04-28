package com.alianza.client.client_backend.service;

import com.alianza.client.client_backend.controller.ClientRowMapper;
import com.alianza.client.client_backend.model.Client;
import com.alianza.client.client_backend.repository.ClientRepository;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Daniela
 */
@Service
public class ClientService {
    private static final Logger logger = LoggerFactory.getLogger(ClientService.class);
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    private ClientRepository clientRepository;
    
    /*Get all the clients*/
    public List<Client> getAllClients()
    {
        List <Client> clients = new ArrayList<>();
        try {
            logger.info("Getting the clients");
            clients = clientRepository.findAll();
            logger.info("Clients were obtained correctly");
            
        } catch (Exception e) {
            logger.error("Error getting clients", e);
            return null;
        }
        return clients;
        
    }
    
    /*Create a client*/
    public Client saveClient(Client client)
    {
        Client c = client;
        try {
            logger.info("Saving the client");
            c.setDataAdded(new Date());
            clientRepository.save(c);
            logger.info("The client was successfully registered");
            return c;
            
        } catch (Exception e) {
            logger.error("Error saving client", e);
            return null;
        }
    }
    
    /*Search a client*/
    public List<Client> searchClients(String sharedKey)
    {
        List <Client> clients = new ArrayList<>();
        try {
            logger.info("Searching clients");
            Client client = new Client();
            client.setSharedKey(sharedKey);
            Example<Client> example = Example.of(client);
            clients = clientRepository.findAll(example);
            logger.info("Clients were obtained correctly");
            return clients;
            
        } catch (Exception e) {
            logger.error("Error searching client", e);
            return null;
        }
    }
    
    /*Advanced search client*/
    @GetMapping("/advancedSearchClients")
    public List<Client> advancedSearchClients(@RequestParam(name = "client") String client)
    {
        try
        {
            logger.info("Advanced search...");
            JSONObject clientJson = new JSONObject(client);
            Set<String> keys = clientJson.keySet();
            String Where = "";
            for (String element : keys) 
            {
                 if (("date".equals(element)) && !"".equals(clientJson.getString("date")) && !"".equals(clientJson.getString("date2")))
                {
                    Where = Where + "data_added BETWEEN '" + clientJson.getString("date") + "' AND '" + clientJson.getString("date2") + "' AND";
                }
                else
                {
                    if ("date".equals(element) && !"".equals(clientJson.getString("date")) && "".equals(clientJson.getString("date2")))
                    {
                        Where = Where + "CONVERT(data_added,DATE) >=  CONVERT(' " + clientJson.getString("date") + "',DATE) AND";
                    }
                    else
                    {
                        if ("date2".equals(element) && !"".equals(clientJson.getString("date2")) && "".equals(clientJson.getString("date")))
                        {
                            Where = Where + "CONVERT(data_added,DATE) <=  CONVERT(' " + clientJson.getString("date2") + "',DATE) AND";

                        }
                        else
                        {
                            if ("phone".equals(element))
                            {

                                if (!clientJson.isNull("phone")) 
                                {
                                    Where = Where + " " + element + " = '" + clientJson.getLong(element) + "' AND";                                
                                }
                            }
                            else
                            {
                                if (!"".equals(clientJson.getString(element)) && !"date2".equals(element) && !"date".equals(element))
                                {
                                    Where = Where + " " + element + " = '" + clientJson.getString(element) + "' AND";
                                }
                            }
                        }
                    }
                }
            }
            String WhereFinal = Where.substring(0, Where.length() - 4);
            String QueryFinal = "SELECT * FROM client WHERE " + WhereFinal;
            return jdbcTemplate.query(QueryFinal, new ClientRowMapper());
        } catch (Exception e)
        {
            logger.error("Error in advanced search", e);
            return null;
        }
    }
}
