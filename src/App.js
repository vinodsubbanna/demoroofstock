import React, { Component } from 'react';
import './App.css';
import ListProperty from './components/ListProperty'
import store from './server/store';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOrList: 'grid'
    }
  }

  handleClick = (gridOrList) => {
    this.setState(prevState => ({
      gridOrList: gridOrList
    }));
  }

  ListorGridViewByFlag = () => {
    const isGrid = this.state.gridOrList === 'grid' ? true: false;
    return isGrid ? 
      <Col className="property-grid">
        {<ListProperty gridOrList={this.state.gridOrList}/>}
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
                <th>View Details</th>
            </tr>
        </thead>
        <tbody>
          {<ListProperty gridOrList={this.state.gridOrList}/>}  
        </tbody> 
    </table>
    </Col>
  }

  render(){
    return (
      <Container className="App">
        <Row className="property-row">   
          <Col md={{span:4, offset:8}} className="btn-block">
            <button className="btn btn-secondary" onClick={() => this.handleClick('list')}>List View</button>
            <button className="btn btn-primary" onClick={() => this.handleClick('grid')}>Grid View</button>
          </Col>
        {this.ListorGridViewByFlag()}
        </Row>
      </Container>
    );
  }
}

export default App;
