import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./history";
import './css/home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <h1 class="homeHeader">Are You a Doctor or a Patient?</h1>
                <div class="buttonContainer">
                    <Button className="button1" variant="btn btn-success" onClick={() => history.push('/PatientForm')}>Doctor</Button>
                    <Button className="button2" variant="btn btn-success" onClick={() => history.push('/Patient')}>Patient</Button>
                </div>
            </>
        )
    }    
}