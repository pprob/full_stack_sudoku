import React, { useState, Fragment } from "react";
import CardSection from "./CardSection";
import Modal from "./Modal";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "../styles/CardForm.css";

const CardForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [modalOpen, setModalOpenOrClose] = useState(false);
  const [paymentOutcomeSuccessful, setPaymentFailOrSuccess] = useState(
    undefined
  );

  const setPaymentOutcome = (outcome) => {
    setPaymentFailOrSuccess(outcome);
  };

  const setModalStatus = () => {
    setModalOpenOrClose(!modalOpen);
  };

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
            name: "donator",
          },
        },
      });
      if (result.error) {
        setPaymentOutcome(false);
        setModalStatus();
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setPaymentOutcome(true);
          setModalStatus();
        }
      }
    } catch (e) {
      alert("unable to pay");
    }
  };
  const renderModal = (paymentOutcome) => {
    if (paymentOutcome) {
      return (
        <Modal
          title="Success!"
          description="Your payment was successful. Thank you."
          onButtonOneClick={setModalStatus}
          onCloseAction={setModalStatus}
          buttonOneLabel="Close"
        />
      );
    } else {
      return (
        <Modal
          title="Payment failure!"
          description="Your payment was unsuccessful. Please try again."
          onButtonOneClick={setModalStatus}
          onCloseAction={setModalStatus}
          buttonOneLabel="Close"
        />
      );
    }
  };

  return (
    <Fragment>
      {modalOpen && renderModal(paymentOutcomeSuccessful)}
      <div className="app-body">
        <div className="app-container">
          <form className="checkout__form__container" onSubmit={onSubmit}>
            <CardSection />
            <button
              type="submit"
              className="submit-button-stripe"
              disabled={!stripe}
            >
              Donate $5!
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CardForm;
