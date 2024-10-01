
import { Navbar, Nav, NavDropdown, Container, Form, Button, Badge } from 'react-bootstrap';
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
              <Nav.Link href="#action2" className="nav-link">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled className="nav-link">Link</Nav.Link>
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
