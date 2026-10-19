import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { WiTime4 } from "react-icons/wi";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <Container fluid className="bg-dark text-white p-5 footer">
      <Row className="gap-5">
        <Col>
          <img src="/aon-cuisine.png" alt="" width="100" height="auto" />
          <p>
            Delicious meals, freshly prepared with love. Enjoy your favourite
            dishes and get them delivered straight to your doorstep.
            <br />
            <br />
            <IoLocationSharp /> Lagos, Nigeria
          </p>
        </Col>

        <Col>
          <h5>Quicklink</h5>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/menu">
            <li>Our menu</li>
          </a>

          <a href="/about">
            <li>About us</li>
          </a>

          <a href="/contact">
            <li>Contact</li>
          </a>
        </Col>
        <Col>
          <h5>Contact us</h5>
          <h6 class="contact_info">
            <FaPhone />
            <span class="footer_contact_info"> +234 801 234 5678</span>
          </h6>
          <h6 class="contact_info">
            <MdEmail />
            <span class="footer_contact_info"> hello@wonderland.com</span>
          </h6>
          <h6 class="contact_info">
            <WiTime4 />
            <span class="footer_contact_info"> 9 AM – 10 PM</span>
          </h6>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p className="text-center">&copy; 2026 AON. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
