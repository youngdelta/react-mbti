import { configureStore } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { createStore } from '../store/navigateSlice';

const initialState = {
	navigate: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NAVIGATE':
			return {
				...state,
				navigate: action.payload,
			};
		default:
			return state;
	}
};

// 스토어 생성하기 (<-리듀서 함수)
const store = createStore(reducer);

// 스토어를 구독할 함수
const render = () => {
	const state = store.getState();
};

//스토어의 구독 메서드를 사용해 구독할 함수를 구독 설정
store.subscribe(render);

const setNavigate = nvg => {
	// const { navigate } = store.getState();
	store.dispatch({
		type: 'NAVIGATE',
		payload: nvg,
	});
};

store.subscribe(setNavigate);

export default store;
/* 
export default configureStore({
	reducer: {
		navigate: createStore,
	},
});
 */
