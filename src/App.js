import React, { Component } from 'react';
import './App.css';
import ListProperty from './components/ListProperty'
import store from './server/store';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setView } from './actions';
import { fetchAllProperties } from './actions'

class App extends Component {

  ListorGridViewByFlag = (viewToDisplay) => {
    const isGrid = viewToDisplay === 'grid' ? true: false;
    return isGrid ? 
      <Col className="property-grid">
        {<ListProperty gridOrList={viewToDisplay}/>}
      </Col> : 
      <Col md={12}>
        <table className="property-list"> 
        <thead>
            <tr>
                <th>image</th>
                <th>Address</th>
                <th>Year Built</th>
                <th>List Price</th>
                <th>Monthly Rent</th>
                <th>Gross Yield</th>
                <th>View Details</th>
            </tr>
        </thead>
        <tbody>
          {<ListProperty gridOrList={viewToDisplay}/>}  
        </tbody> 
    </table>
    </Col>
  }

  render(){
    const { viewToDisplay, setView } = this.props;
    return (
(      <Container className="App">
          <Row className="property-row">   
            <Col md={{span:4, offset:8}} className="btn-block">
              <button className="btn btn-secondary" onClick={() => setView('list')}>List View</button>
              <button className="btn btn-primary" onClick={() => setView('grid')}>Grid View</button>
            </Col>
          {this.ListorGridViewByFlag(viewToDisplay)}
          </Row>
        </Container>)
    );
  }
}

const mapStateToProps = (state) => ({
  viewToDisplay: state.viewToDisplay,
  properties: state.allProperties
})

const mapDispatchToProps = dispatch => ({
  setView: (view) => dispatch(setView(view))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
