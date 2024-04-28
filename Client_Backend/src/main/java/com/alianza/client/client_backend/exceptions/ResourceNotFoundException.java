package com.alianza.client.client_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author Daniela
 * Excepción personalizada
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    
    private static final long serialVersionUID = 1L;
    
    public ResourceNotFoundException(String message)
    {
        super(message);
    }
    
}
