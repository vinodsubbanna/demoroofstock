import { combineReducers } from 'redux';
import { propertiesReducer, propertyInView, getViewForDisplay } from './propertiesReducer';

export default combineReducers({
    allProperties: propertiesReducer,
    propertyInView: propertyInView,
    viewToDisplay: getViewForDisplay
})