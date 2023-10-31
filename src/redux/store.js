import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from 'src/redux/boardSlice';

export const store = configureStore({
	reducer: {
		board: boardReducer,
	},
});
