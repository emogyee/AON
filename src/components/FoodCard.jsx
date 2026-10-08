function FoodCard({ food }) {     
    return (
      <div className="food-card">
        <img src={food.image} alt={food.name} />
        <div className="food-content">
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <p>Price: ₦{food.price.toLocaleString()}</p>
          <div className="food-bottom"></div>
        </div>
            <strong>₦{food.price.toLocaleString()}</strong>
            <button>Add to Cart</button>
      </div>
    );
}

export default FoodCard;