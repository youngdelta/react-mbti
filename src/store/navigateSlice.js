import { createSlice } from '@reduxjs/toolkit';

export const navigateSlice = createSlice({
	name: 'navigate',
	initialState: {
		value: 0,
	},
	reducers: {
		navigate: (state, action) => {
			state.value += 1;
		},
	},
});

export const { navigate } = navigateSlice.actions;

export default navigateSlice.reducer;
