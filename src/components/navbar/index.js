import { Container, Navbar } from "react-bootstrap";
import "./navbar.css";
export const NavigationMenu = () => {
  return (
    <Navbar bg="dark" className="navigationBar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
