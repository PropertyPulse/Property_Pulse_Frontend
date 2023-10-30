import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from '../../Components/PropertyOwner/PaymentForm';

const stripePromise = loadStripe("pk_test_51O6YMFDe6Cwf3TWU89r6X24yXb5wbwGDCQUjael4C0Pj67gr6s24958bOIxXHg1XUUfDKXp2Sqx24vvrXoDZ5uvd00ZT4ocKvT"); // Replace with your actual Stripe public key

export const PaymentPage = () => {
  return (
    <div>
      PaymentPage
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};
