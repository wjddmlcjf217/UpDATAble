import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./history";

export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Button variant="btn btn-success" onClick={() => history.push('/PatientForm')}>Doctor Workflow</Button>
                </div>
                <div>
                    <Button variant="btn btn-success" onClick={() => history.push('/Patient')}>Patient View</Button>
                </div>
            </>
        )
    }    
}