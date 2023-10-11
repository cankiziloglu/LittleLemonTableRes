import React from "react";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-p">
            We are a family owned Mediterranean reataurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className="btn hero-btn"
            onClick={() => {
              return navigate("/reservations");
            }}
          >
            Reserve a Table
          </button>
        </div>
        <img className="hero-image" src={hero} alt="little lemon restaurant" />
      </section>
    </div>
  );
}

export default Hero;
