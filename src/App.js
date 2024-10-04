import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import Header from './component/Header';
import Carousel1 from './component/Carousel';
import ProductList from './component/ProductList';
import ProductModal from './component/ProductModal';
import { useState } from 'react';
import Booking from './component/Booking';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  return (
    <Container>
      <Header handleAddToCart={handleAddToCart} cartItems={cart.length} handleShow={handleShow} />
      <Row>
        <Carousel1></Carousel1>
      </Row>
      <Row>
        <ProductList handleAddToCart={handleAddToCart} />
      </Row>
      <ProductModal
        show={showModal}
        handleClose={handleClose}
        selectedProducts={cart}
        handleShow={handleShow}
        updateQuantity={updateQuantity} />
      <Row>
        <Booking></Booking>
      </Row>
    </Container>
  );
};


export default App;
