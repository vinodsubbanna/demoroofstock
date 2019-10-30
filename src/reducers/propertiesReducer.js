import { FETCH_ALL_PROPERTIES, GET_VIEW_TO_DISPLAY, GET_PROPERTY_CLICKED, IS_LOADED } from '../types';

export const getAllProperties = (state={}, action) => {
    switch(action.type) {
        case FETCH_ALL_PROPERTIES:
            return action.payload;
        default:
            return state;

    }
}

export const getPropertyInView = (state = {}, action) => {
    switch(action.type) {
        case GET_PROPERTY_CLICKED:
            return action.payload;
        default:
            return state;
    }
}

export const getViewForDisplay = (state = 'grid', action) => {
    switch(action.type) {
        case GET_VIEW_TO_DISPLAY:
            return action.payload;
        default:
            return state;
    }
}

export const setLoadedFlag = (state = false, action) => {
    switch(action.type) {
        case IS_LOADED:
            return action.payload;
        default:
            return state;
    }
}