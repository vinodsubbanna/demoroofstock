import { combineReducers } from 'redux';
import { getAllProperties, getPropertyInView, getViewForDisplay, setLoadedFlag } from './propertiesReducer';

export default combineReducers({
    allProperties: getAllProperties,
    propertyInView: getPropertyInView,
    viewToDisplay: getViewForDisplay,
    isDataLoaded: setLoadedFlag
})