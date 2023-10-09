import React from "react";
import hero from "../assets/hero.png";

const ReserveClick = () => {
  alert("You clicked the Reserve a Table button.");
};

function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-p">
            We are a family owned Mediterranean reataurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button className="btn hero-btn" onClick={ReserveClick}>
            Reserve a Table
          </button>
        </div>
        <img className="hero-image" src={hero} alt="little lemon restaurant" />
      </section>
    </div>
  );
}

export default Hero;
