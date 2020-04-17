// import initialState from '../store/initialState';
import * as ACTIONS from './actionTypes';
const Immutable = require("seamless-immutable").static;
// import Immutable from 'seamless-immutable';

const initialState = {
    currentPatientId: "",
    patientData: [],
    isCritical: false
};

function rootReducer(state = initialState, action){
    switch(action.type) {
        case ACTIONS.ADD_PATIENT_DATA: {
            // return {
            //     ...state,
            //     patientData:[...state.patientData, action.patientData]
            // };
            return Immutable.setIn(state, ["patientData"], [action.patientData]);
            // state.currentPatientId = action.patientData.status;
            // return state;
        }
        // case ACTIONS.PATIENT_DATA_CHANGED: {
        //     let updatedState = state.pat
        // }
        case ACTIONS.PATIENT_STATUS_CRITICAL: {
            return Immutable.setIn(state, ["isCritical"], action.isCritical);
        }
        default:
            return state;
    }
};

export default rootReducer;