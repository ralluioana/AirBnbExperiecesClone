import React from "react";
import MyPhoto from "../images/HeroImg.PNG";

export default function Hero() {
  return (
    <section className="hero">
      <img src={MyPhoto} alt="heroimg" className="hero--photo"></img>
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interractive activities led by one-of-a-kind hosts without
        leaving home.
      </p>
    </section>
  );
}
