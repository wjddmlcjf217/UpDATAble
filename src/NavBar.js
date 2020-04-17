import React, { Component } from "react";
import "./css/navBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark mb-3">
                    <div class="headingContainer">
                        <h1 class="navHeading">UpDATAble</h1>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}