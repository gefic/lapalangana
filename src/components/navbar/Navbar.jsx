import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Palangana from "../../assets/tocar.png";
import CartWidget from "../cartWidget/CartWidget";
import { LinkContainer } from "react-router-bootstrap";

const NavbarNav = () => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="sm" bg="clear" variant="hard">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <LinkContainer to="/lapalangana">
            <Navbar.Brand>La Palangana</Navbar.Brand>
          </LinkContainer>
          <center>
            <Nav>
              <LinkContainer to="/lapalangana">
                <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/1">
                <Nav.Link>CDs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/2">
                <Nav.Link>DVDs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/3">
                <Nav.Link>Vinilos</Nav.Link>
              </LinkContainer>
              <Nav.Link>Nosotros</Nav.Link>
            </Nav>
          </center>
        </Navbar.Collapse>
        <img
          src={Palangana}
          width="100"
          className="d-inline-block align-top"
          alt="Palangana logo"
        />
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavbarNav;

