import * as ACTIONS from "./actionTypes";

export function addPatientData(patientData) {
    return {
        type: ACTIONS.ADD_PATIENT_DATA,
        patientData
    };
};

export function patientDataChanged(patientId, patientData) {
    return {
        type: ACTIONS.PATIENT_DATA_CHANGED,
        patientId,
        patientData
    };
};

export function patientStatusCriticalFlag(isCritical) {
    return {
        type: ACTIONS.PATIENT_STATUS_CRITICAL,
        isCritical
    };
};