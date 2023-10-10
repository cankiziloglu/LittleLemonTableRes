import React from "react";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Reservations() {
  return (
    <div className="container">
      <Header />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Reservations;
