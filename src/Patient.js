import React, { Component } from "react";
import { connect } from 'react-redux';
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
                <div>
                    <h1>Patient Name</h1>
                </div>
                <div>
                    <p>
                        {this.props.patientData.patientID}
                    </p>
                </div>
                <div>
                    <h1>Date</h1>
                </div>
                <div>
                    <p>
                        {this.props.patientData.date}
                    </p>
                </div>
                <div>
                    <h1>Medical State</h1>
                </div>
                <div>
                    <p>
                        {this.props.patientData.medicalCondition}
                    </p>
                </div>
                <div>
                    <h1>Treatment and Results</h1>
                </div>
                <div>
                    <p>
                        {this.props.patientData.treatmentAndResults}
                    </p>
                </div>
                <div>
                    <h1>Next Steps</h1>
                </div>
                <div>
                    <p>
                        {this.props.patientData.nextStep}
                    </p>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Patient)