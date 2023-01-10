import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../component/Home';
import Questions from '../component/Questions';
import Result from '../component/Result';

class Routers extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {};

	render() {
		return (
			<BrowserRouter>
				<Routes>
					{/* <Switch> */}
					<Route
						exact={true}
						path="/"
						element={<Home />}
					/>
					<Route
						exact={true}
						path="/questions"
						element={<Questions />}>
						{/* <Questions /> */}
					</Route>
					<Route
						exact={true}
						path="/result"
						element={<Result />}
					/>
					{/* </Switch> */}
				</Routes>
			</BrowserRouter>
		);
	}
}

export default Routers;
