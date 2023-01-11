import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { navigate } from '../store/navigateSlice';

export const withRouter = Component => {
	const Wrapper = props => {
		// const navigate = props.navigate;
		const navigate = useNavigate();

		return (
			<Component
				{...props}
				navigate={navigate}
			/>
		);
	};

	return Wrapper;
};
