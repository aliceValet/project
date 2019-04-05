import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes";


import FirstComp from "./FirstComponent";
import NavDraw from "./NavDrawer";
import NavBarre from "./NavBarre";
import FillForm from "./FillForm";
import PieChart from "./Pies";
import LineGraph from "./LineGraf";
import BarreCharte from "./BarreChart";
import AreaCharte from "./ZoneChart";
import Carde from "./Carte";
import CardeTwo from "./CarteTwo";
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (

    <div className="App">
	    <NavBarre />
	    <div className="App-header">
	    <FirstComp/>
		    <Container>
		        <Row>
		          <Col sm="12" xl="6"><PieChart/></Col>
		          <Col xs = {{size:11}}sm={{size: 12, offset : 2}} md={{size: 9, offset: 2 }} xl="4"><CardeTwo/></Col>
		        </Row>
		        <Row>
		          <Col xs = "12" sm="12" md="12" xl="6"><LineGraph/></Col>
		          <Col xs = "12" sm="12" md="12" xl="6"><BarreCharte/></Col>
		        </Row>
		        <Row>
		          <Col xs={{size : 12, offset: 3}} sm={{size : 12, offset: 3}} md={{size:12}} xl={{ size: 12 }}><Carde/></Col>
		        </Row>

	      </Container>

		        
	    </div>
    </div>

    );
  }
}

export default App;
