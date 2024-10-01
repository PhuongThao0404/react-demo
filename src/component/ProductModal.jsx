// src/component/ProductModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

const ProductModal = ({ show, handleClose, selectedProducts, updateQuantity }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title class = 'modal-title'>Your Items</Modal.Title>
      </Modal.Header>
      <Modal.Body class = 'modal-body p'>
      {selectedProducts && selectedProducts.length > 0 ? (
          selectedProducts.map((product, index) => (
            <div key={product.id} className="product-item">
              <h5 class = 'modal-body h5'>{product.name}</h5>
              <p>Price: ${product.price.toFixed(2)}</p>
              <div className="quantity-controls">
              <p>
                <Button variant="secondary" onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</Button>
                  <span className="quantity">{product.quantity}</span>
                <Button variant="secondary" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</Button>
              </p>
            </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
