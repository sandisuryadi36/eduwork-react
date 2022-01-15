import React from "react";
import Content from "./component/content";
import Header from "./component/header"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}