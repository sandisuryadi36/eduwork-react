import React from "react";
import "./style.scss"
import TopNavbar from "./component/topNavbar";
import TopCover from "./component/topCover";
import Biografi from "./component/biografi";
import { Container } from "react-bootstrap";
import Skills from "./component/skills";
import Contact from "./component/contact";
import BottomFooter from "./component/footer";

export default class Home extends React.Component {
    render() {
        return (
            <Container fluid className="bg-dark text-light p-0">
                <TopNavbar />
                <div data-spy="scroll" data-target="topNavbar" data-offset="20" tabIndex="0">
                    <TopCover />
                    <Biografi />
                    <Skills />
                    <Contact />
                </div>
                <BottomFooter />
            </Container>
        )
    }
}