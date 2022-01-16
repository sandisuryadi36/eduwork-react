import React from "react";
import { Button, Container } from "react-bootstrap";

export default class TopCover extends React.Component {
    render() {
        return (
            <Container fluid className="top-cover p-5 d-flex flex-column gap-2 justify-content-center align-items-center text-center" id="topCover">
                <h1>Sandi Suryadi</h1>
                <p className="fs-3 fst-italic">[ Web Developer ]</p>
                <Button variant="success" className="rounded-3 ps-3 pe-3 pt-1 pb-1 fs-4 shadow-lg" href="#contact">CONTACT</Button>
            </Container>
        )
    }
}