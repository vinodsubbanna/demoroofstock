import React from 'react';
import './Address.css';

const Address = ({address1, city, state, zip }) => {
    return (
        <div className="adr-block">
            <span className="street">{address1}</span> <br/>
            <span className="city">{city}, </span>
            <span className="state">{state}-</span>
            <span className="zip">{zip}</span>
         </div>
    )
}

export default Address
