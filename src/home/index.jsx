import React from "react";
import "./style.scss"
import TopNavbar from "./component/topNavbar";
import TopCover from "./component/topCover";
import Biografi from "./component/biografi";
import { Container } from "react-bootstrap";
import Skills from "./component/skills";

export default class Home extends React.Component {
    render() {
        return (
            <Container fluid className="bg-dark text-light p-0">
                <TopNavbar />
                <TopCover />
                <Biografi />
                <Skills />
            </Container>
        )
    }
}