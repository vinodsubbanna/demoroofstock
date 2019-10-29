import { combineReducers } from 'redux';
import { propertiesReducer, propertyInView } from './propertiesReducer';

export default combineReducers({
    allProperties: propertiesReducer,
    propertyInView: propertyInView
})