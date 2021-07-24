import React from "react";

const NotFound = ({ darkMode }) => {
  return (
    <main className={`${darkMode ? "filter invert" : ""} min-h-screen p-12`}>
      <section className="container mx-auto mt-28">
        <h1 className="sm:text-4xl flex justify-center text-xl">
          Oops, That's not found
        </h1>
        <h2 className="sm:text-5xl flex justify-center text-2xl">404</h2>
      </section>
    </main>
  );
};

export default NotFound;
