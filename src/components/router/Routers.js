import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Travel from "../../pages/Travel";
import Traveldetails from "../../pages/Traveldetails";
import About from "../../pages/About";
import ThankYou from "../../pages/ThankYou";
import Paystack from "../../pages/Paystack";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="Home" />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/travel" element={<Travel />}></Route>
      <Route path="/tour/:id" element={<Traveldetails />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/thank-you" element={<ThankYou />}></Route>
      <Route path="/pay-ment" element={<Paystack/>}></Route>
      
    </Routes>
  );
};

export default Routers;
