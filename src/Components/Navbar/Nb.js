import './Navbar.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export default function Nb(props){
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark" className = 'Nb'>
        <Container>
        <Navbar.Brand href="#home">Coding With A Cause</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = '/about-me' href="#About-Me">About Me</Nav.Link>
            <Nav.Link as = {Link} to = '/projects' href="">Projects </Nav.Link>
            <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">E-mail</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as = {Link} to = '/resume' href="#deets">Resume</Nav.Link>
            <Nav.Link as = {Link} to = '/blog' eventKey={2} href="#memes">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
