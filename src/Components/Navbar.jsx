import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#f0f0f0f0" }}>
        {/* <Container> */}
        <Row>
          <Col md={12}>
            <Navbar bg="dark" data-bs-theme="light">
              <Container>
                <Navbar.Brand href="#home" className="text-dark">
                  ILanding
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="text-primary">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#Pricing">About</Nav.Link>
                  <Nav.Link href="#Pricing">Features</Nav.Link>
                  <Nav.Link href="#Pricing">Services</Nav.Link>
                  <Nav.Link href="#Pricing">Pricing</Nav.Link>
                  <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                <Button variant="primary" className="rounded-pill">
                  Get Started
                </Button>
              </Container>
            </Navbar>
          </Col>
        </Row>
        {/* </Container> */}
      </Container>
    </>
  );
};

export default Navbar;
