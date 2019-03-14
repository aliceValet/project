import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComp from "./FirstComponent";
import SecondComp from "./SecondComponent";
import NavDraw from "./NavDrawer";
import NavBarre from "./NavBarre";
import FillForm from "./FillForm";
import PieChart from "./Pies";
import LineGraph from "./LineGraf";
import BarreCharte from "./BarreChart";
import AreaCharte from "./ZoneChart";

class App extends Component {
  render() {
    return (

    <div className="App">
	    <NavBarre />
	    <div className="App-header">
	    	
	    	<FirstComp />
	        <PieChart/>
	        <LineGraph/>
	        <BarreCharte/>
	        <AreaCharte/>

	    </div>
    </div>

    );
    return (
    	<div className="App">
		    <NavBarre />
		    <div className="App-header">

	    		<FillForm/>
			</div>
		</div>

    	);
  }
}

export default App;
