package com.alianza.client.client_backend.controller;

import com.alianza.client.client_backend.model.Client;
import com.alianza.client.client_backend.repository.ClientRepository;
import com.alianza.client.client_backend.service.ClientService;
import java.util.Date;
import java.util.List;
import java.util.Set;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Daniela
 */
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ClientController {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    private ClientRepository clientRepository;
    
    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

    @Autowired
    private ClientService clientService;
    
    /*Get all the clients*/
    @GetMapping("/clients")
    public List<Client> getAllClients()
    {
        try {
            logger.info("Soliciting the clients");
            List<Client> clients = clientService.getAllClients();
            if (!clients.isEmpty()) {
                return clients;
            } else {
                logger.error("There are no registered clients");
                return clients;
            }
        } catch (Exception e) {
            logger.error("Error getting clients");
            return null;
        }
    }
    
    /*Create a client*/
    @PostMapping("/createClient")
    public Client saveClient(@RequestBody Client client)
    {
        try {
            logger.info("Soliciting save the client");
            return clientService.saveClient(client);
            
        } catch (Exception e) {
            logger.error("Error saving the client");
            return null;
        }
    }
    
    /*Search a client*/
    @GetMapping("/searchClients")
    public List<Client> searchClients(@RequestParam(name = "sharedKey") String sharedKey)
    {
        try {
            logger.info("Soliciting search the clients");
            List<Client> clients = clientService.searchClients(sharedKey);
            if (!clients.isEmpty()) {
                return clients;
            } else {
                logger.error("There are no registered clients");
                return clients;
            }
        } catch (Exception e) {
            logger.error("Error getting clients");
            return null;
        }
    }
    
    /*Advanced search client*/
    @GetMapping("/advancedSearchClients")
    public List<Client> advancedSearchClients(@RequestParam(name = "client") String client)
    {
        try {
            logger.info("Soliciting search the clients");
            List<Client> clients = clientService.advancedSearchClients(client);
            if (!clients.isEmpty()) {
                return clients;
            } else {
                logger.error("There are no registered clients");
                return clients;
            }
        } catch (Exception e) {
            logger.error("Error getting clients");
            return null;
        }
    }
    
}
