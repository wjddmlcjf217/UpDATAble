import React, { Component } from "react";
import logo from "./assets/logo.png"
import "./css/navBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark mb-3">
                    <div class="headingContainer">
                        <img class="navHeading" src={logo} alt="logo"/>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}