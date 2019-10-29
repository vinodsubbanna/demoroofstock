import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPropertyClicked } from '../actions';
import { Link } from 'react-router-dom';
import Address from './Address';
import './GridSingleProperty.css';

class GridSingleProperty extends Component {

render() {
    const { id,
            mainImageUrl,
            address,
            yearBuilt,
            listPrice,
            monthlyRent,
            getPropertyClicked
        } = this.props;

    return (
        <div className="property">
            <div className="img-block">
            <Link to={`/${id}`}>
            <img src ={mainImageUrl} alt={address.address1} 
                    onClick={() => getPropertyClicked(id)}
                />
            </Link>
            </div>
            <Address 
                address1={address.address1}
                city={address.city}
                state={address.state}
                zip={address.zip}
            />
            <div className="built">
                Built in: <span>{yearBuilt}</span>
            </div>
            <div className="financial">
                List Price: <span>{`$${listPrice}`}</span> <br/>
                Monthly Rent: <span>{`$${monthlyRent}`}</span>
            </div>
        </div>
    )
}

}

const mapDispatchToProps = dispatch => ({
    getPropertyClicked: (id) => dispatch(getPropertyClicked(id))
});

export default connect(null, mapDispatchToProps)(GridSingleProperty);
