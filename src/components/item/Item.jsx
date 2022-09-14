import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Item = ({ name, price, img, stock, description }) => {
  const Detalles = () => {
    alert(description);
  };
  return (
    <>
      <center>
          <Col>
            <Card className="text-center" style={{ width: "20rem" }}>
              <Card.Header><h5>{name}</h5></Card.Header>
              <Card.Body>
                <Card.Img src={img} />
                <Card.Text>
                  Si tienes lana, cómprate uno por {price}
                </Card.Text>
                <Button variant="outline-dark" onClick={() => Detalles()}>
                  Detalles
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Solamente quedan {stock} unidades. Apúrale!!!
              </Card.Footer>
            </Card>
          </Col>
      </center>
    </>
  );
};

export default Item;
