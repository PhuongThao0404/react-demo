import { Row, Col, Card, Button } from 'react-bootstrap';
import React, { useEffect } from "react";
import { useState } from "react";

const ProductList = ({ handleAddToCart }) => {
  const data = [
    { id: 1, name: 'Margherita Pizza', price: 40.25, salePrice: 20.25, image: "" },

  ];
  const [products, setProducts] = useState(data);

  const loadData = async () => {
    const res = await fetch("https://api-demo-4gqb.onrender.com/products");
    const data = await res.json();
    console.log(data);
    const transformedItems = data.data.map((item) => ({
      id: item.id,
      image: item.image,
      name: item.title,
      price: item.price,
      salePrice: item.salePrice,
    }));

    setProducts(transformedItems);
  };

  useEffect(() => {
    loadData();
  }, []);



  return (
    <Row>
      {products?.map((product) => (
        <Col md={3} id={product.id}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title className="product-title">{product.name}</Card.Title>
              {product.salePrice ? (
                <>
                  <Card.Text>
                    <del>${product.price.toFixed(2)}</del>
                    <span className='price'>
                      ${product.salePrice.toFixed(2)}
                    </span>
                  </Card.Text>
                </>
              ) : (
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
              )}
              <Button variant="primary" onClick={() => handleAddToCart(product)}>Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
