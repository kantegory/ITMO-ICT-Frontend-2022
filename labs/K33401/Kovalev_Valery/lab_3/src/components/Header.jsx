import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../images/logo.svg'
import {Link, NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <Navbar collapseOnSelect>
            <Container>
                <Link to={"/"}>Home</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to={"/registration"}>Sign Up</Link>
                        <Link to={"/login"}>Sign In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
