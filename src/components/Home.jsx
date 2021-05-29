import React from "react";

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

  return (
    <main>
      <section className="relative flex justify-center min-h-screen pt-48 lg:pt-64 px-8">
        <h1 className="text-3xl font-bold leading-none lg:leading-snug">
          {great} ! <br />
          <br /> I'm Shashika "localhost:443" Raveen from 🇱🇰 Sri Lanka.
        </h1>
      </section>
    </main>
  );
};

export default Home;
