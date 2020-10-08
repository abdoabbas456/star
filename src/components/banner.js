import React from "react";
import Hero from "../assets/hero1.jpg";

function Banner() {
  return (
    <section className="main">
      <div className="inner-banner">
        <div className="baneer-headline">
          <div className="line headline"></div>
          <h1 className="message">
            <div>
            <span>  We're a digital</span>
            <br /> agency.
            </div>
          
          </h1>
          <button className="start-btn">GETING STARTED</button>
         
        </div>
        <div className="img-hero">
          <img src={Hero} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
