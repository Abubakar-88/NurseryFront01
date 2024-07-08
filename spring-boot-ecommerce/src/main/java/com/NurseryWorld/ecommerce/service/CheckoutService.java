package com.NurseryWorld.ecommerce.service;

import com.NurseryWorld.ecommerce.dto.PaymentInfo;
import com.NurseryWorld.ecommerce.dto.Purchase;
import com.NurseryWorld.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
