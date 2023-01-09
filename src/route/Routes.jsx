import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../component/Home';
import Questions from '../component/Questions';
import Result from '../component/Result';

class Routes extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {};

	render() {
		return (
			<Router>
				{/* <Switch> */}
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					// exact
					path="/questions"
					element={<Questions />}
				/>
				<Route
					exact
					path="/result"
					component={Result}
				/>
				{/* </Switch> */}
			</Router>
		);
	}
}

export default Routes;
