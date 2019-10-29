import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPropertyClicked } from '../actions';
import { Link } from 'react-router-dom';
import Address from './Address';
import './ListSingleProperty.css';

class ListSingleProperty extends Component {
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
            <tr>
                <td>
                    <div className="img-block">
                        <img src ={mainImageUrl} alt={address.address1} />
                    </div>
                </td>
                <td>            
                <Address 
                    address1={address.address1}
                    city={address.city}
                    state={address.state}
                    zip={address.zip}
                />
                </td>
                <td>{yearBuilt}</td>
                <td>{`$${listPrice}`}</td>
                <td>{`$${monthlyRent}`}</td>
                <td>
                    <div className="view-details">
                    <Link to="/{id}">
                        <button className="btn btn-success"
                        onClick={() => getPropertyClicked(id)}>See Details</button>
                    </Link>
                    </div>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPropertyClicked: (id) => dispatch(getPropertyClicked(id))
});

export default connect(null, mapDispatchToProps)(ListSingleProperty);

