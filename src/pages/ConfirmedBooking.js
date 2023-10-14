import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bkimg1 from "../assets/booking1.jpg";

const ConfirmedBooking = () => {
  return (
    <div className="confirm-wrapper">
      <Header />
      <div className="confirm-img">
        <h1 className="confirm-title">Thank You!</h1>
        <p className="confirm-p">
          Your reservation has been confirmed. Details are below. We look
          forward to seeing you!
        </p>
        <img src={bkimg1} alt="Little Lemon Restaurant" />
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmedBooking;
