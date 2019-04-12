import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './Storepicker';
import NotFound from './NotFound';
import App from './App';

// We need to build a router component
// We can use a statless functional component
// Here we're going to have all of our routes
// It will try each route and if it can't find a 
// route it will default to the 404 route
const Router = () => (
	<BrowserRouter>
		<Switch>
			{/*
				Route will take a number of different props 
				Then you tell it the component to render out
				We then do the catch all by ommiting the path
			*/}
			<Route exact path="/" component={StorePicker} />
			<Route path="/store/:storeID" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
