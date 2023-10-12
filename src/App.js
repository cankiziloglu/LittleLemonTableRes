import React from "react";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";
import Booking from "./pages/Booking";
import Order from "./pages/Order";
import Menu from "./pages/Menu";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Booking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Home />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
