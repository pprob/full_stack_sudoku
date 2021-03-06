import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import "../styles/CardSection.css";

const cardElementOptions = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CardSection = (props) => {
  return (
    <React.Fragment>
      <label className='donate-label'>If you'd like to donate, you can do so with a debit or credit card below</label>
      <CardElement style={cardElementOptions} />
    </React.Fragment>
  );
};

export default CardSection;
