import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

export default class PatientForm extends Component {
    state = {
        condition: '',
        treatmentAndResults: '',
        nextStep: ''
    };

    conditionChangeHandler = event => {
        this.setState({
            condition: event.target.value
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
        })
    }

    handleSubmit = event => {
        alert(`${this.state.condition} ${this.state.treatmentAndResults} ${this.state.nextStep}`);
    }

    render() {
        const { condition, treatmentAndResults, nextStep } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>Condition of Patient</label>
                    </div>
                    <div>          
                        <input 
                        type='textarea' 
                        value={condition} 
                        onChange={this.conditionChangeHandler}
                        />
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