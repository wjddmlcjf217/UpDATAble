import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./history";

export default class Home extends Component {
    render() {
        return (
            <Button variant="btn btn-success" onClick={() => history.push('/App')}>Click Button to View App</Button>
        )
    }
}