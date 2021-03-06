import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
export const NavigationMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navigationBar">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
