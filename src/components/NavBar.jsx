import React from "react";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";


function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/aon-cuisine.png"
            alt="AON Logo"
            width="100"
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Local Dishes
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                Foreign Cusine
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Desert</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
            <Nav.Link to="/cart">
              Cart 
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
