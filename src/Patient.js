import React, { Component } from "react";
import { connect } from 'react-redux';
import profilePic from './assets/profile.png';
import './css/patient.css';
import store from './store/index';

function mapStateToProps(store){
    return { patientData: store.patientData };
}
class Patient extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <>
                <div class="imageContainer">
                    <img id="profilePic" src={profilePic} alt="Profile"/>
                    <div>
                        <h1 class='name'>{this.props.patientData.patientID}</h1>
                    </div>
                    <div>
                        <h2>Current Condition:</h2>
                    </div>
                    <div>
                        <p>
                            Fair{this.props.patientData.medicalCondition}
                        </p>
                    </div>
                </div>
                <div class="profileContainer">
                    <div class="date">
                        <h1>{this.props.patientData.date}</h1>
                    </div>
                    <div class="treatment">
                        <h1>Treatment and Results</h1>
                        <p>
                            {this.props.patientData.treatmentAndResults}
                        </p>
                    </div>
                    <div class="nextStep">
                        <h1>Next Steps</h1>
                        <p>
                            {this.props.patientData.nextStep}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Patient)