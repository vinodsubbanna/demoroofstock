import { FETCH_ALL_PROPERTIES, GET_PROPERTY_CLICKED } from '../types';

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