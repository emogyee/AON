import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/homepage/Hero";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import PopularDish from "../components/homepage/PopularDish";

const Home = () => {
  return (
    <>
      
      <Hero />
      <PopularDish/>
      
    </>
  );
};

export default Home;
