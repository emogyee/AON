import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
