import { createSlice } from '@reduxjs/toolkit';
import { calcMovements, randomizer } from 'src/utils';

const initialState = {
	boardSize: 3,
	movements: 10,
	startCell: { x: '', y: '' },
	isStartCellDefined: false,
};

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setStartCell: (state) => {
			state.startCell = {
				x: randomizer(state.boardSize),
				y: randomizer(state.boardSize),
			};
			state.isStartCellDefined = true;
		},

		setBoardSize: (state, action) => {
			state.startCell = { x: '', y: '' };
			state.isStartCellDefined = false;
			state.boardSize = action.payload;
			state.movements = calcMovements(state.boardSize);
		},
	},
});

export const selectBoardSize = (state) => state.board.boardSize;
export const selectMovements = (state) => state.board.movements;
export const selectStartCell = (state) => state.board.startCell;
export const selectIsStartCellDefined = (state) =>
	state.board.isStartCellDefined;

export const { setBoardSize, setStartCell } = boardSlice.actions;

export const boardReducer = boardSlice.reducer;
