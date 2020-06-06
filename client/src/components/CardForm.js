import React from "react";
import CardSection from "./CardSection";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "../styles/CardForm.css";

const CardForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await axios.get("/api/payments/secret");
      const client_secret = response.data.client_secret;
      const result = await stripe.confirmCardPayment(`${client_secret}`, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'paul'
          }
        }
      })
      console.log(result)
      if (result.error) {
        alert('failed to pay')
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          alert('success')
        }
      }
      
    } catch (e) {
      alert("unable to pay");
    }
  };
  return (
    <form className="checkout__form__container" onSubmit={onSubmit}>
      <CardSection />
      <button type="submit" disabled={!stripe}>
        Confirm order
      </button>
    </form>
  );
};

export default CardForm;
