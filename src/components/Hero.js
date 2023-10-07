import React from "react";
import hero from "../assets/home_s.jpeg";

const ReserveClick = () => {
    alert("You clicked the Reserve a Table button.");
}

function Hero() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-text">
          We are a family owned Mediterranean reataurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-button" onClick={ReserveClick}>
          Reserve a Table
        </button>
      </section>
      <img src={hero} alt="little lemon restaurant" />
    </>
  );
}

export default Hero;