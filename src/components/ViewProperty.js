import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photos from './Photos';
import { Container, Row, Col } from 'react-bootstrap';
import Address from './Address';
import './ViewProperty.css';
import { Link } from 'react-router-dom';

export class ViewProperty extends Component {
    render() {
        const { property } = this.props;
        const photos = property.resources ? property.resources.photos: [];
        const { address, physical, financial } = property;
        const yearBuilt = physical ? physical.yearBuilt: "Not Available";
        const listPrice = financial? Number.parseFloat(financial.listPrice).toFixed(2): "Not Available";
        const monthlyRent = financial? Number.parseFloat(financial.monthlyRent).toFixed(2): "Not Available";

        return (
            <Container className="property-details">
            <Row className="float-right">
                <Link to="/">
                    <button className="btn btn-secondary">Back</button>
                </Link>
            </Row>
            <Row>
                <Col md={8} className="images">
                    <Photos photos={photos} />
                </Col>
                <Col md={4}>
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
                        List Price: <span>{`$${listPrice}`}</span><br/>
                        Monthly Rent: <span>{`$${monthlyRent}`}</span>
                    </div>
                </Col>
            </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state, props) => ({
    property: state.propertyInView,
})

export default connect(mapStateToProps)(ViewProperty);
