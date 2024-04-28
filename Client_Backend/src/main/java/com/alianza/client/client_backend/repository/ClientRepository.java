package com.alianza.client.client_backend.repository;

import com.alianza.client.client_backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Daniela
 */

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{
    
}
