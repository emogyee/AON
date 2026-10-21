import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import './service.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Services from "./pages/Services";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  function addCart(food) {
    let newCart = [];
    let foodFound = false;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === food.id) {
        let updateFood = {
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description: cartItems[i].description,
          quantity: cartItems[i].quantity + 1,
        };

        newCart.push(updateFood);
        foodFound = true;
      } else {
        newCart.push(cartItems[i]);
      }
    }

    if (foodFound === false) {
      let newFood = {
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        description: food.description,
        quantity: 1,
      };
      newCart.push(newFood);
    }

    setCartItems(newCart);
  }

  function increaseQuantity(id) {
    let newCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        let updatedFood = {
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description: cartItems[i].description,
          quantity: cartItems[i].quantity + 1,
        };
        newCart.push(updatedFood);
      } else {
        newCart.push(cartItems[i]);
      }
      setCartItems(newCart);
    }
  }
  function decreaseQuantity(id) {
    let newCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        if (cartItems[i].quantity > 1) {
          let updatedFood = {
            id: cartItems[i].id,
            name: cartItems[i].name,
            price: cartItems[i].price,
            image: cartItems[i].image,
            description: cartItems[i].description,
            quantity: cartItems[i].quantity - 1,
          };
          newCart.push(updatedFood);
        } else {
          newCart.push(cartItems[i]);
        }
      }
      setCartItems(newCart);
    }
  }
  let cartCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartCount = cartCount + cartItems[i].quantity;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addCart} />} />
          <Route path="/menu" element={<Menu onAddToCart={addCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                oinsreaseQuantity
                ondecrease={decreaseQuantity}
                onAddToCart={addCart}
              />
            }
          />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
 
export default App;
