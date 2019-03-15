import React from 'react';
import {Route,Switch} from 'react-router-dom';
import FillForm from "./FillForm";
import App from "./App";

export default ()=>(
	<Switch>
	<Route path="/" exact component={App}/>
	<Route path="/admin" exact component={FillForm}/>
	</Switch>
	);