import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark mb-3">
                    <h1>InFOMO</h1>
                </nav>
            </React.Fragment>
        )
    }
}