import { FETCH_ALL_PROPERTIES, GET_PROPERTY_CLICKED, GET_VIEW_TO_DISPLAY } from '../types';

export const propertiesReducer = (state={}, action) => {
    switch(action.type) {
        case FETCH_ALL_PROPERTIES:
            return action.payload;
        default:
            return state;

    }
}

export const propertyInView = (state = {}, action) => {
    console.log(action);
    switch(action.type) {
        case GET_PROPERTY_CLICKED:
            return action.payload;
        default:
            return state;
    }
}

export const getViewForDisplay = (state = 'grid', action) => {
    console.log(action);
    switch(action.type) {
        case GET_VIEW_TO_DISPLAY:
            return action.payload;
        default:
            return state;
    }
}