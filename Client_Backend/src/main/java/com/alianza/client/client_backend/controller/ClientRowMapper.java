package com.alianza.client.client_backend.controller;

import com.alianza.client.client_backend.model.Client;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Daniela
 */
public class ClientRowMapper implements RowMapper<Client> 
{
    @Override
    public Client mapRow(ResultSet rs, int rowNum) throws SQLException {
        Client client = new Client();
        client.setId(rs.getLong("id"));
        client.setSharedKey(rs.getString("shared_key"));
        client.setBusinessId(rs.getString("business_id"));
        client.setEmail(rs.getString("email"));
        client.setPhone(rs.getLong("phone"));
        client.setDataAdded(rs.getDate("data_added"));
        return client;
    }
    
}
