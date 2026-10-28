import React from "react";
import Hero from "../components/homepage/Hero";

import PopularDish from "../components/homepage/PopularDish";

const Home = ({onAddToCart}) => {
  return (
    <>
      
      <Hero />
      <PopularDish/>
      
    </>
  );
};

export default Home;
