import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import ItemCount from "../itemCount/ItemCount";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const ItemDetail = ({ productsItem }) => {
  const [itemCount, setItemCount] = useState(0);
  const onAdd = (cantidad) => {
    alert(
      "Vas a comprar " +
        cantidad +
        " " +
        productsItem.name +
        ". Gracias"
    );
    setItemCount(cantidad);
  };

  return (
    <>
      {productsItem.img ? (
        <Container>
          <Row>
            <Col sm={6} style={{ marginTop: "30px" }}>
              <center>
                <Figure>
                  <Figure.Image alt="171x180" src={productsItem.img} />
                </Figure>
              </center>
            </Col>
            <Col sm={6} style={{ marginTop: "30px", paddingLeft: "60px" }}>
              <Row>
                <center>
                  <h1 style={{ color: "red" }}>{productsItem.name}</h1>
                </center>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <p>{productsItem.description}</p>
              </Row>
              <Row>
                <h4>{productsItem.price}</h4>
              </Row>
              <Row>
                <h6>
                  {productsItem.stock} unidades en stock
                </h6>
              </Row>
              <Row style={{ marginTop: "60px" }}>
                {itemCount === 0 ? (
                  <ItemCount
                    stock={productsItem.stock}
                    initial={itemCount}
                    onAdd={onAdd}
                  />
                ) : (
                  <Link to = '/cart'>
                    <Button variant="danger">Ver carrito</Button>
                  </Link>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <center>
          <Spinner animation="border" variant="danger" />
        </center>
      )}
    </>
  );
};

export default ItemDetail;
