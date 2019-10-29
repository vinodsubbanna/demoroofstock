import helper from "../helper";
import { FETCH_ALL_PROPERTIES, GET_PROPERTY_CLICKED } from '../types'
import propertyData from '.././testdata.json';
import store from '../server/store';

// export const fetchAllProperties = () => async dispatch => {
//     fetch('http://dev1-sample.azurewebsites.net/properties.json', { mode: 'no-cors'})
//         .then(res=> console.log(res))
//         .then(res=> dispatch({type: FETCH_ALL_PROPERTIES, payload: res}))
//         .catch(err=>console.log(err));
// }

export const fetchAllProperties = () => ({
    type: FETCH_ALL_PROPERTIES,
    payload: propertyData
});

export const getPropertyClicked = (id) => (dispatch) => {
    const properties = store.getState().allProperties.properties;
    const property = properties.filter((prop) => prop.id === id);
    
    dispatch({
        type: GET_PROPERTY_CLICKED,
        payload: property[0]
    })
}