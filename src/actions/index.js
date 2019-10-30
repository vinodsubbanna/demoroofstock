import { FETCH_ALL_PROPERTIES, GET_PROPERTY_CLICKED, GET_VIEW_TO_DISPLAY, IS_LOADED } from '../types'
import store from '../server/store';
import axios from "axios";

export const fetchAllProperties = () => dispatch => {
    axios.get('/properties')
        .then(res=> res.data)
        .then(res=> dispatch({type: FETCH_ALL_PROPERTIES, payload: res}))
        .then(() => dispatch({type: IS_LOADED, payload: true}))
        .catch(err=>console.log(err));
}

export const getPropertyClicked = (id) => (dispatch) => {
    const properties = store.getState().allProperties.properties;
    const property = properties.find((prop) => prop.id === id);

    dispatch({
        type: GET_PROPERTY_CLICKED,
        payload: property
    })
}

export const setView = (view) => ({
    type: GET_VIEW_TO_DISPLAY,
    payload: view
})