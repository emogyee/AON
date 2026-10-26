import React from "react";
import '../data/food'

function FoodCard({ food }) {     
    return (
      <div className="food-card">
        <img src={food.image} alt={food.name} />
        <div className="food-content">
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          {/* <p>Price: ₦{food.price.toLocaleString()}</p> */}
          <div className="food-bottom"></div>
        </div>
            <strong>₦{food.price.toLocaleString()}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{backgroundColor:'red',outline:'none',border:'none',padding:'5px 10px',borderRadius:'8px'}}>+ Add to Cart</button>
      </div>
    );
}

export default FoodCard;