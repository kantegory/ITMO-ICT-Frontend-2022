import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../images/logo.svg'
import {Link, NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/actions/authActions";
import Filter from "./Filter/Filter";
import {clearSelectedFields} from "../store/actions/filterActions";

const Header = () => {
    const dispatch = useDispatch()
    const {isAuth, user, token} = useSelector(state=>state.auth)

    const handleLogOut = () => {
        dispatch(logout(token))
    }

    const handleHome = () => {
        dispatch(clearSelectedFields())
    }



    return (
        <Navbar collapseOnSelect className="bg-dark">
            <Container className="header">
                <Link to={"/"} onClick={handleHome}>Home</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {isAuth ? <Nav className="gap-1">
                            <Link to={"/profile"}>{user.username}</Link>

                            <Link to={"/"} onClick={handleLogOut}>Log out</Link>
                        </Nav>:
                        <Nav className="gap-1">
                            <Link to={"/registration"}>Sign Up</Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Link to={"/login"}>Sign In</Link>
                        </Nav>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
