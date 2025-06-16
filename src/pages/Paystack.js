import React, { useState } from "react";
import "../style/Paystack.css";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";

const Paystack = () => {
  const navigate = useNavigate();
  // Setting config object to a state to dynamically capture info from Form
  const [config, setConfig] = useState({
    name: "",
    email: "",
    amount: 0,
    publicKey:
      "pk_test_7d48b24c6ec2d032238754505d53e0ae7ef3334c",
  });

  // First initialization of the Library
  const initializePayment = usePaystackPayment(config);

  // Callback if transaction is successful
  const onSuccess = () => {
    alert("Payment Successful, check your email for confirmation");
  };

  // Callback if payment gateway is closed
  const onClose = () => {
    alert("Opps, Payment not completed");
  };

  const handleChange = (e) => {
    const valueName = e.target.name;
    const value = e.target.value;
    setConfig({ ...config, [valueName]: value });
    console.log(config);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger Payment Gateway on Form Submit
    initializePayment(onSuccess, onClose);
    navigate('/thank-you')
  };

  return (
    <>
      <div className="payment">
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-4 mx-auto my-form text-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  id="amount"
                  name="amount"
                  placeholder="Enter Amount"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit">Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paystack;
