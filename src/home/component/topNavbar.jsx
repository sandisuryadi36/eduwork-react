import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export default class TopNavbar extends React.Component{
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50 shadow-lg fixed-top">
                <Container>
                    <Navbar.Brand href="#home">Sandi Suryadi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#Biografi">Biografi</Nav.Link>
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}