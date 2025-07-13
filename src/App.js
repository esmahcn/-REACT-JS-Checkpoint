import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="#home">My React Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center mb-4">Welcome to My React Bootstrap App</h1>

        {/* Cards */}
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="public\img\photo-1506744038136-46273834b3fb.avif" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="public\img\photo-1494526585095-c41746248156.avif" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="public\img\photo-1500534623283-312aade485b7.avif0" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};