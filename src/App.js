// import logo from './logo.svg';
// import './App.css';
import Home from './component/Home';
// import Routers from './route/Routers';

// import Home from './component/Home';
import { withRouter } from './route/WithRouter';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { navigateSlice } from './store/navigateSlice';
import { navigateReducer } from './store/navigateSlice';

function App(props) {
	// const navigate = useNavigate();
	// console.log('🚀 ~ file: App.js:14 ~ App ~ navigate', navigate);

	// return <Home />;
	// return <Routes />;
	// <Routers />;
	// return <Home />;

	// dispatch를 사용하기 위한 준비
	// const dispatch = useDispatch();
	// console.log('🚀 ~ file: App.js:22 ~ App ~ dispatch', dispatch);

	// store에 접근하여 state 가져오기
	// const { navigateSlice } = useSelector(state => state.navigate);
	// console.log('APP  navigateSlice===>', navigateSlice);
	// dispatch(navigateSlice.navigateInject());

	// return navigate('/home');
	// return null;
	return (
		<Home
			{...props}
			// navigate={navigate}
		/>
	);
}

export default withRouter(App);
// export default App;
