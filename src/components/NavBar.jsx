import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";

function NavbarMenu({cartCount}) {
  return (
    <Navbar expand="lg" className="bg-black" sticky="top">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/menu">Local Dishes</NavDropdown.Item>

              <NavDropdown.Item href="/menu">Foreign Cuisine</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu">Dessert</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cart">
              <FaShoppingCart /> Cart <span className="badge bg-danger">({cartCount})</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
