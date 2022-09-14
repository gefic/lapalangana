import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Palangana from "../../assets/tocar.png";
import CartWidget from "../cartWidget/CartWidget";

const NavbarPalangana = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">La Palangana</Navbar.Brand>
        <center>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#catalog">Catálogo</Nav.Link>
            <Nav.Link href="#aboutUs">Nosotros</Nav.Link>
          </Nav>
        </center>
        <img
          src={Palangana}
          width="80"
          className="d-inline-block align-top"
          alt="Palangana logo"
        />
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default NavbarPalangana;
