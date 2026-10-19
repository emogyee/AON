import React from 'react' 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import food from '../../data/food'
import FoodCard from '../FoodCard'


const PopularDish = () => {
const popularFoods = food.slice(0,6)

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>Banner</Col>
        <Col sm={9}>
          <section>
            <h6>OUR SPECIALS</h6>
            <h2>Popular Dishes</h2>
            <p>Fresh ingredients.Authentic taste.Always</p>
          </section>
          <div className="food-container">
            {popularFoods.map((food) => (
              <FoodCard key={food.id} food={food}/>
            ))}
          </div>
        </Col>
      </Row>
    </Container> 
  )
}

export default PopularDish
