import React from "react";
import FoodCard from "../components/FoodCard";
import foods from "../data/food";
import PageBanner from "../components/PageBanner";
import SearchBar from "../components/menupage/SearchBar";
import PopularDishes from "../components/menupage/PopularDishes";

const Menu = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <PageBanner
        title="Our menu"
        breadcrumb="Home / Menu"
        image="https://tse2.mm.bing.net/th/id/OIP.DIwQjvF25-U0j4pLnGGd4gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      
      <SearchBar />
      
      <PopularDishes />
    </div>
  );
};

export default Menu;
