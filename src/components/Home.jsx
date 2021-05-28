import React from "react";
import bgImg from "../assets/background-img.jpg";

const Home = () => {
  const greetings = [
    "Bonjour",
    "Hola",
    "Ayubowan 🙏",
    "Konnichiwa ",
    "Guten tag",
    "Shalom",
    "G'day",
    "Kia ora",
    "Bula",
    "Aloha",
  ];
  const great = greetings[Math.trunc(Math.random() * greetings.length)];

  // const bgImage = require("../assets/background-img.jpg");

  return (
    <main>
      <img
        src={bgImg}
        alt="bgImage"
        className="absolute object-cover w-full h-full opacity-25"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-3xl font-bold leading-none lg:leading-snug">
          {great} ! <br /> I'm Shashika "localhost:443" Raveen from 🇱🇰 Sri
          Lanka.
        </h1>
      </section>
    </main>
  );
};

export default Home;
