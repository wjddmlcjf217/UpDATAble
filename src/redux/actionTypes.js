const nameSpace = "IN_FOMO";

const actionTypeCreator = (actionName) => `${nameSpace}/${actionName}`;

export const ADD_PATIENT_DATA = actionTypeCreator("ADD_PATIENT_DATA");
export const PATIENT_DATA_CHANGED = actionTypeCreator("PATIENT_DATA_CHANGED");
export const PATIENT_STATUS_CRITICAL = actionTypeCreator("PATIENT_STATUS_CRITICAL");