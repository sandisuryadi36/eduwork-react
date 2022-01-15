import React from "react";
import { Container } from "react-bootstrap";

export default class BottomFooter extends React.Component{
    render() {
        return (
            <Container fluid className="p-0">
                <footer className="pt-5">
                    <div className="d-flex justify-content-start pt-4 border-top">
                        <p className="container">© 2022 Sandi Suryadi. All rights reserved.</p>
                    </div>
                </footer>
            </Container>
        )
    }
}