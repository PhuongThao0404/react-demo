import { Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../images/menu1.jpg';
import image2 from '../images/menu2.jpg';
import image3 from '../images/menu3.jpg';
import image4 from '../images/menu4.jpg';

const ProductList = ({ handleAddToCart }) => {
  const products = [
    { id: 1, name: 'Margherita Pizza', price: 40.25, image: image1 },
    { id: 2, name: 'Mushroom Pizza', price: 40.00, image: image2 },
    { id: 3, name: 'Hawaiian Pizza', price: 30.00, image: image3 },
    { id: 4, name: 'Pesto Pizza', price: 30.25, image: image4 },
  ];

  return (
    <Row>
      {products.map((product) => (
        <Col md={3} key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(product)}>Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
);
};

export default ProductList;
