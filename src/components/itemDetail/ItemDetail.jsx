import React from "react";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import ItemCount from "../itemCount/ItemCount";
import Spinner from "react-bootstrap/Spinner";

const ItemDetail = ({ productsItem }) => {
  const onAdd = (cantidad) => {
    alert(
      "Este Gringo va a comprar " + cantidad + " " + productsItem.name + ". Qué chido!!!"
    );
  };

  return (
    <>
      {productsItem.img ? (
        <Container>
          <Row>
            <Col sm={6} style={{marginTop: '60px'}}>
              <center>
                <Figure>
                  <Figure.Image alt="171x180" src={productsItem.img} />
                </Figure>
              </center>
            </Col>
            <Col sm={6} style={{marginTop: '60px', paddingLeft: '60px'}}>
            <Row>
            <center><h1 style={{color: 'red',}}>{productsItem.name}</h1></center>
              </Row>
              <Row style={{marginTop: '30px'}}>
                <p>{productsItem.description}</p>
              </Row>
              <Row>
                <h4>{productsItem.price}</h4>
              </Row>
              <Row>
                <h6>
                  Solamente quedan {productsItem.stock} unidades. Apúrale!!!
                </h6>
              </Row>
              <Row style={{marginTop: '60px'}}>
              <ItemCount stock={productsItem.stock} initial={1} onAdd={onAdd} />
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
