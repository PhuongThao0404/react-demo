import React, { useState } from "react";

import { Navbar, Nav, Container, Form, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./LoginModal";
// import { toast, ToastContainer } from 'react-toastify';
import ProductModal from './ProductModal';

const Header = ({cartItems, handleShow }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Trạng thái đăng nhập

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-brand">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#action2" className="nav-link">About Us</Nav.Link>
              <Nav.Link href="action3" className="nav-link">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <Button variant="primary" className="item" onClick={handleShow}>
                Item <Badge bg="secondary">{cartItems}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Form>
            {loggedIn ? (
                <Button className="ms-2" variant="outline-primary" >
                  Profile
                </Button>
              ) : (
                <Button className="ms-2" variant="outline-primary" onClick={handleLoginShow}>
                  <FontAwesomeIcon icon={faUser} /> Login
                </Button>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={showLogin} handleClose={handleLoginClose} setLoggedIn={setLoggedIn} />

      <ProductModal></ProductModal>
    </>
  );
};

export default Header;
