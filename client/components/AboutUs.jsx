import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p style={{ fontSize: "20px" }}> 
              At <b>DoctorConnect</b>, we are dedicated to making quality healthcare accessible and convenient for 
              everyone. With a trusted network of experienced doctors and a user-friendly appointment system, we 
              ensure that your health is always a priority. Whether it’s a routine check-up or a specialist consultation,
               we bring compassionate care closer to you—quickly, safely, and reliably.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
