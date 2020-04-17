import React, { Component } from "react";

export default class Patient extends Component {
    patientReport = {
        name: "",
        date: "",
        medicalCondition: "",
        treatmentAndResults: "",
        nextSteps: ""
    }

    render() {
        return (
            <>
                <div>
                    <h1>Patient Name</h1>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <h1>Date</h1>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <h1>Medical State</h1>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <h1>Treatment and Results</h1>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <h1>Next Steps</h1>
                </div>
                <div>
                    <p></p>
                </div>
            </>
        )
    }
}