import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import ScrollspyNav from "react-scrollspy-nav"

export default class TopNavbar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50 shadow-lg fixed-top" id="topNavbar">
                <Container>
                    <Navbar.Brand href="./">Sandi Suryadi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <ScrollspyNav
                            scrollTargetIds={[
                                "topCover", "biografi", "skills", "contact"
                            ]}
                            activeNavClass="active"
                        >
                            <Nav className="me-auto">
                                <Nav.Link href="#topCover" active>Home</Nav.Link>
                                <Nav.Link href="#biografi">Biografi</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </ScrollspyNav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}