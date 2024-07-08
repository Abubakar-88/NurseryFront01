package com.NurseryWorld.ecommerce.dto;

import com.NurseryWorld.ecommerce.entity.Address;
import com.NurseryWorld.ecommerce.entity.Customer;
import com.NurseryWorld.ecommerce.entity.Order;
import com.NurseryWorld.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
