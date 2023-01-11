// import { createSlice } from '@reduxjs/toolkit';
import { addListener } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export const createStore = reducer => {
	if (typeof reducer !== 'function') {
		throw new Error('createStore 함수는 reducer 함수를 전달 받아야 한다.');
	}

	//외부에서 스토어를 구독하고자 할 때 사용하는 멧더--
	const state = reducer(undefined, {});

	// 외부에서 스토어를 구독하는 함수의 집합 관리
	let listeners = [];

	//외부에서 상태를 가져오고자 할 때 사용하는 멧더--
	const getState = () => state;

	// 외부에서 사용자가 액션을 받아, 리듀서 함수에 전달한다.
	const dispatch = action => {
		// 리듀서 함수를 실행해 새로운 상태를 반환
		state = reducer(state, action);

		// 스토어의 상태를 구독중인 리스너 실행
		listeners.forEach(listener => listener?.());
	};

	// 외부의 함수가 스토어의 상태 업데이트를 구독
	// 구독 = 상태를 구독중인 리스너 실행
	const subscribe = addListener => {
		// 구독
		listeners.push(addListener);

		// 구독 해지 (cleanup)
		return () => {
			// 구독 해지 (cleanup)
			listeners = listeners.filter(listener => listener !== addListener);
		};
	};

	return {
		getState,
		dispatch,
		subscribe,
	};
};

/* export const navigateSlice = createSlice({
	name: 'navigate',
	initialState: {
		navigate: useNavigate,
	},
	reducers: {
		navigateInject: (state, action) => {
			// state.value += 1;
			state.navigate = useNavigate;
		},
	},
});
 */
// export const { navigate } = navigateSlice.actions;

// export default navigateSlice.reducer;
