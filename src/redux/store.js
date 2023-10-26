import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from 'src/redux/board/boardSlice';

export const store = configureStore({
	reducer: {
		board: boardReducer,
	},
});
