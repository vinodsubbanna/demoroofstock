import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridSingleProperty from './GridSingleProperty';
import ListSingleProperty from './ListSingleProperty';
import { fetchAllProperties } from '.././actions';


class ListProperty extends Component {
    componentDidMount() {
        this.props.fetchAllProperties();
    }

    render() {
        const { properties, gridOrList, isDataLoaded } = this.props;
        const isGrid = gridOrList === 'grid' ? true: false;
        return (
            isDataLoaded ? <React.Fragment>
                {
                   properties.map((property) => {
                    const { physical, financial } = property;
                    const yearBuilt = physical ? physical.yearBuilt: "Not Available";
                    const listPrice = financial? Number.parseFloat(financial.listPrice).toFixed(2) : "-Please call";
                    const monthlyRent = financial? Number.parseFloat(financial.monthlyRent).toFixed(2) : "-Please call";
                    let grossYield = 'NA';
                    if (listPrice && financial) {
                        grossYield = Math.floor(((monthlyRent*12)/(listPrice)) * 100) + '%';
                    }
                   
                   return isGrid? <GridSingleProperty
                                    key={property.id}
                                    id={property.id}
                                    mainImageUrl={property.mainImageUrl}
                                    address={property.address}
                                    yearBuilt={yearBuilt}
                                    listPrice={listPrice}
                                    monthlyRent={monthlyRent}
                                    grossYield={grossYield}
                                 /> : 
                                <ListSingleProperty 
                                    key={property.id}
                                    id={property.id}
                                    mainImageUrl={property.mainImageUrl}
                                    address={property.address}
                                    yearBuilt={yearBuilt}
                                    listPrice={listPrice}
                                    monthlyRent={monthlyRent}
                                    grossYield={grossYield}
                                />
                   }) 
                }
            </React.Fragment> : <div>Loading.... </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    properties: state.allProperties.properties,
    gridOrList: props.gridOrList,
    isDataLoaded: state.isDataLoaded
})

export default connect(mapStateToProps, {fetchAllProperties})(ListProperty);
