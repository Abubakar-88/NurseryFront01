package com.NurseryWorld.ecommerce.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="address")
@Getter
@Setter
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="street")
    private String street;

    @Column(name="city")
    private String city;

    @Column(name="state")
    private String state;

    @Column(name="country")
    private String country;

    @Column(name="zip_code")
    private String zipCode;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "address")
//  private Set<Customer> customers = new HashSet<>();

    @OneToOne
    @PrimaryKeyJoinColumn
    private Order order;
}
