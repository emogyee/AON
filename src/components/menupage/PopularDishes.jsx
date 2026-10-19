import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodCard from "../FoodCard";
import { FaRegStar } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiChickenOven, GiFrenchFries } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";

const PopularDishes = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <aside>
        <ul>
          <a href="#">
            <li>
              <FaRegStar /> Popular
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <FaBowlFood /> Jollof Dishes
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <GiChickenOven /> Proteins
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <GiFrenchFries /> Sides
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <RiDrinks2Fill /> Drinks
            </li>
          </a>
        </ul>
        <hr />
        <input type="search" placeholder="Search" />
      </aside>

      <main>
        <div className="cards">
          <h3>Popular Dishes</h3>

          <section className="card">
            <img
              src="https://th.bing.com/th/id/R.346dbb0f197b700a2d2bee708ddb747a?rik=A4cHs8Lj8BVSeQ&riu=http%3a%2f%2fi1.nyt.com%2fimages%2f2015%2f12%2f16%2fdining%2f16TOPDISHES-slide-F26S%2f16TOPDISHES-slide-F26S-superJumbo.jpg&ehk=zrvQpjYRLA9Xe6yMP%2bAXXw%2f71j%2beNO62fFHziJYWn50%3d&risl=&pid=ImgRaw&r=0"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Signature Suya Platter</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦12,000</h4>
              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>

          <section className="card">
            <img
              src="https://emerging.com/wp-content/uploads/2024/07/AdobeStock_697890675-scaled.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Ram Head Feast</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦28,500</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>

          <section className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/033/321/654/non_2x/take-a-close-look-at-the-delicious-cevapi-meal-there-is-a-good-restaurant-at-the-back-ai-generated-photo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Fried Yam with Stew</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦5,000</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>

          <section className="card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/030/060/464/non_2x/a-plate-of-spaghetti-with-meat-and-cheese-on-a-wooden-table-ai-generated-free-photo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Party-Style Jollof</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦18,000</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>

          <section className="card">
            <img
              src="https://a.cdn-hotels.com/gdcs/production38/d1315/09f1d34e-5c3b-4fb9-b431-3641399c2c77.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Lagos-Ghana Jollof Fusion</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦9,000</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>

          <section className="card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/032/452/806/small_2x/a-variety-of-plates-with-different-foods-on-them-ai-generated-free-photo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Meat Pie Box</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦8,500</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>
          <section className="card">
            <img
              src="https://biyopos.com/wp-content/uploads/2025/04/signature-dish-culinary-masterpiece.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Efo Riro & Fufu</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦16,000</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>
          <section className="card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/032/133/991/small_2x/a-table-with-various-foods-including-bread-potatoes-and-meat-ai-generated-photo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Egusi Soup and</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦18,000</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>
          <section className="card">
            <img
              src="https://seattletravel.com/wp-content/uploads/2022/11/FancyRestaurantHeader.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Zobo Jelly and Fruit Salad</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦7,500</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>
          <section className="card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/033/459/078/small_2x/the-best-restaurants-in-the-world-ai-generated-photo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Puff Puff with Ice Cream</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <h4>₦9,500</h4>

              <a href="#" className="btn-solid theme-primary">
                Go somewhere
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PopularDishes;
