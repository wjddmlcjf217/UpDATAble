import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import "./css/style.css"

export default class PatientForm extends Component {
    state = {
        patientID: '',
        date: '',
        medicalCondition: '',
        treatmentAndResults: '',
        nextStep: '',

    };

    patientIDChangeHandler = event => {
        this.setState({
            patientID: event.target.value
        });
    };

    dateChangeHandler = event => {
        this.setState({
            date: event.target.value
        });
    };

    medicalConditionChangeHandler = event => {
        this.setState({
            medicalCondition: event.target.value
        });
    };

    treatmentChangeHandler = event => {
        this.setState({
            treatmentAndResults: event.target.value
        });
    }

    nextStepChangeHandler = event => {
        this.setState({
            nextStep: event.target.value
        });
    }

    handleSubmit = event => {
        alert(`${this.state.patientID} ${this.state.date} ${this.state.medicalCondition} ${this.state.treatmentAndResults} ${this.state.nextStep}`);
    }

    render() {
        const { patientID, date, medicalCondition, treatmentAndResults, nextStep } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>

                     <div>
                        <label>Patient ID</label>
                    </div>
                    <div>          
                        <input 
                        type='textarea' 
                        value={patientID} 
                        onChange={this.patientIDChangeHandler}
                        />
                    </div>

                    <div>
                        <label>Date</label>
                    </div>
                    <div>          
                        <input 
                        type='textarea' 
                        value={date} 
                        onChange={this.dateChangeHandler}
                        />
                    </div>

                    <div>
                        <label>Medical State</label>
                        <select>
                        <option>Select...</option>
                        <option>Undetermined</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Serious</option>
                        <option>Critical</option>
                        </select>
                    </div>

                    <div>
                        <label>Treatment and Results</label>
                    </div>
                    <div>
                        <textarea rows="5" cols="50" value={treatmentAndResults} onChange={this.treatmentChangeHandler}></textarea>
                    </div>
                    <div>
                        <label>Next Steps</label>
                    </div>
                    <div>
                        <textarea rows="5" cols="50" value={nextStep} onChange={this.nextStepChangeHandler}></textarea>
                    </div>

                </div>
                <button type="submit">Submit</button>
            </form>
        )
    };
};