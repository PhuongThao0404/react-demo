
import { Navbar, Nav, Container, Form, Button, Badge } from 'react-bootstrap';
import ProductModal from './ProductModal';

const Header = ({ handleAddToCart, cartItems, handleShow }) => {
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProductModal></ProductModal>
    </>
  );
};

export default Header;
