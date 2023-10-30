import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";

const stripePromise = loadStripe("pk_test_51O6YMFDe6Cwf3TWU89r6X24yXb5wbwGDCQUjael4C0Pj67gr6s24958bOIxXHg1XUUfDKXp2Sqx24vvrXoDZ5uvd00ZT4ocKvT");

const PaymentForm = () => {

   let amount = 100.00;
  const stripe = useStripe();
  const elements = useElements();
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const handlePayment = async (e) => {
    e.preventDefault();



    if (!stripe || !elements) {
      // Stripe and/or Elements are not ready, you should handle this case.
      console.error("Stripe or Elements not ready.");
      return;
    }

    // Create a token or source
    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server for processing
      sendTokenToServer(token);
    }
  };

  let description = "monthly payments"
 
  const sendTokenToServer = async (token) => {
    const formData = new FormData();
    formData.append("token", token.id);
    formData.append("amount",amount);
    formData.append("description",description);
  
    try {
      const response = await axiosPrivate.post("/api/v1/payments/charge",
       formData,
       {
        headers: {"Content-Type" : "multipart/form-data"},
       }
      );
  
      if (response.status === 200) {
        // Payment succeeded
        const paymentData = response.data; // Use response.data to access the response data
        // Handle the payment data here
        console.log("Payment succeeded:", paymentData);
      } else if (response.status === 403) {
        // Payment failed due to Forbidden error
        const errorData = response.data;
        // Handle the error data here
        console.error("Payment failed due to Forbidden error:", errorData);
      } else {
        // Payment failed due to other error
        const errorText = response.data;
        console.error(`Payment failed with status ${response.status}:`, errorText);
      }
    } catch (error) {
      console.error("Failed to make the payment:", error);
    }
  };
  

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="card-element"
          >
            Credit or Debit Card
          </label>
          <h1>Amount : ${amount}</h1>
          <div className="border rounded p-2" id="card-element">
            <CardElement />
          </div>
        </div>
        <button
          className="bg-indigo-500 hover-bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

