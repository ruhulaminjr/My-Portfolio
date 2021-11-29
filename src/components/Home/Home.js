import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
