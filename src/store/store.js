import { configureStore } from '@reduxjs/toolkit';

import navigateRouter from '../store/navigateSlice';

export default configureStore({
	reducer: {
		navigate: navigateRouter,
	},
});
