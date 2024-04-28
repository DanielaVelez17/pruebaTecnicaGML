package com.alianza.client.client_backend.test;

import com.alianza.client.client_backend.model.Client;
import com.alianza.client.client_backend.repository.ClientRepository;
import com.alianza.client.client_backend.service.ClientService;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Example;

/**
 *
 * @author Daniela
 */
public class ClientServiceTest {

    @Mock
    private ClientRepository clientRepository;

    @InjectMocks
    private ClientService clientService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllClients() {
        // Given
        List<Client> clients = Arrays.asList(
                new Client(1L, "aruiz", "Ana Ruiz", "aruiz@gmail.com", 3145245544L, new Date()),
                new Client(1L, "pperez", "Patricia Perez", "pperez@gmail.com", 3145245544L, new Date())
        );
        when(clientRepository.findAll()).thenReturn(clients);

        // When
        List<Client> result = clientService.getAllClients();

        // Then
        assertEquals(2, result.size());
        assertEquals("aruiz", result.get(0).getSharedKey());
        assertEquals("pperez", result.get(1).getSharedKey());
        verify(clientRepository, times(1)).findAll();
    }

    @Test
    void createClient() {
        // Given
        Client client = new Client();
        client.setId(8L);
        client.setSharedKey("kruiz");
        client.setBusinessId("Karina Ruiz");
        client.setEmail("kruiz@gmail.com");
        client.setPhone(3145245544L);
        client.setDataAdded(new Date());
        when(clientRepository.save(client)).thenReturn(new Client(8L, "kruiz", "Karina Ruiz", "kruiz@gmail.com", 3145245544L, new Date()));

        // When
        Client result = clientService.saveClient(client);

        // Then
        assertEquals(8L, result.getId());
        assertEquals("kruiz", result.getSharedKey());
        verify(clientRepository, times(1)).save(client);
    }
}
