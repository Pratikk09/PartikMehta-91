import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LearnHooks } from "../Module/LearnHooks";
export default function Header() {
  return (

    <Navbar expand="lg" className="bg-info-subtle" >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Ecom</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  >
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/About">About</Link>
            </Nav.Link>

            <Nav.Link >
              <Link to="/Contact">Contact</Link>
            </Nav.Link>

            <Nav.Link >
              <Link to="/LearnHooks">Hooks</Link>
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



