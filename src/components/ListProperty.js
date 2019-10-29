import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridSingleProperty from './GridSingleProperty';
import ListSingleProperty from './ListSingleProperty';

class ListProperty extends Component {
    render() {
        const { properties, gridOrList } = this.props;
        const isGrid = gridOrList === 'grid' ? true: false;
        return (
            <React.Fragment>
                {
                   properties.map((property) => {
                    const { physical, financial } = property;
                    const yearBuilt = physical ? physical.yearBuilt: "Not Available";
                    const listPrice = financial? Number.parseFloat(financial.listPrice).toFixed(2) : "Not Available";
                    const monthlyRent = financial? Number.parseFloat(financial.monthlyRent).toFixed(2) : "Not Available";

                   return isGrid? <GridSingleProperty
                                    key={property.id}
                                    id={property.id}
                                    mainImageUrl={property.mainImageUrl}
                                    address={property.address}
                                    yearBuilt={yearBuilt}
                                    listPrice={listPrice}
                                    monthlyRent={monthlyRent}
                                 /> : 
                                <ListSingleProperty 
                                    key={property.id}
                                    id={property.id}
                                    mainImageUrl={property.mainImageUrl}
                                    address={property.address}
                                    yearBuilt={yearBuilt}
                                    listPrice={listPrice}
                                    monthlyRent={monthlyRent}
                                />
                   }) 
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    properties: state.allProperties.properties,
    gridOrList: props.gridOrList
})

export default connect(mapStateToProps)(ListProperty);
