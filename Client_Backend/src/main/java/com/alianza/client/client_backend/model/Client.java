package com.alianza.client.client_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;

/**
 *
 * @author Daniela
 */
@Entity
@Table(name="client")
public class Client {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "shared_key", length = 20, nullable = false, unique=true)
    private String sharedKey;
    
    @Column(name = "business_id", length = 50, nullable = false)
    private String businessId;
    
    @Column(name = "email", length = 50, nullable = false, unique=true)
    private String email;
    
    @Column(name = "phone", length = 20, nullable = false)
    private Long phone;
    
    @Column(name = "data_added", length = 20, nullable = false)
    private Date dataAdded;
    
    public Client(){
    }

    public Client(Long id, String sharedKey, String businessId, String email, Long phone, Date dataAdded) {
        super();
        this.id = id;
        this.sharedKey = sharedKey;
        this.businessId = businessId;
        this.email = email;
        this.phone = phone;
        this.dataAdded = dataAdded;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSharedKey() {
        return sharedKey;
    }

    public void setSharedKey(String sharedKey) {
        this.sharedKey = sharedKey;
    }

    public String getBusinessId() {
        return businessId;
    }

    public void setBusinessId(String businessId) {
        this.businessId = businessId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Date getDataAdded() {
        return dataAdded;
    }

    public void setDataAdded(Date dataAdded) {
        this.dataAdded = dataAdded;
    }
    
    
    
}
