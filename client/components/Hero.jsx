import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <br/>
        <p style={{ fontSize: "20px" }}>
          <b>Book Appointments with Ease, Anytime
          Your Health is Just a Click Away</b>
          <br />
          Schedule consultations with top doctors from the comfort of your home.
          Fast, secure, and personalized care when you need it most.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
