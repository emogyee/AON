import React from "react";
import FoodCard from "../components/FoodCard";
import { foods } from "../data/food";

const Menu = () => {
  return (
    <section className="menu-page">
      <h2>Our Menu</h2>
      <div className="food-grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
      
    </section>
  );
};

export default Menu;
