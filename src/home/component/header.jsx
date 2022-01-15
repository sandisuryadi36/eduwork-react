import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-flex justify-content-between">
                <a className="navbar-brand" href="./">React JS Web</a>
                <div className="text-muted">By Sandi Suryadi</div>
            </nav>
        )
    }
}