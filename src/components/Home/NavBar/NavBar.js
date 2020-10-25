import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../images/icons/logo.jpg";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" style={{ zIndex: "5" }} className="mx-5 font-weight-bolder">
                <Navbar.Brand href="#home">
                    <img style={{ width: "100px" }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Admission" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Rules" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Activities" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Notice" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Achievements" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Facilities" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Link3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Link4</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;
