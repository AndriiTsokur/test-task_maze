import { createSlice } from '@reduxjs/toolkit';
import { calcMovements, randomizer } from 'src/utils';

const initialState = {
	boardSize: 3,
	movements: 10,
	startCell: { x: null, y: null },
	finalCell: { x: null, y: null },
	moveSequence: [],
};

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setBoardSize: (state, action) => {
			state.startCell = { x: null, y: null };
			state.finalCell = { x: null, y: null };
			state.moveSequence = [];

			state.boardSize = action.payload;
			state.movements = calcMovements(state.boardSize);
		},

		setStartCell: (state) => {
			state.finalCell = { x: null, y: null };
			state.moveSequence = [];

			state.startCell = {
				x: randomizer(state.boardSize),
				y: randomizer(state.boardSize),
			};
		},

		setFinalCell: (state, action) => {
			state.finalCell = action.payload;
		},

		setMoveSequence: (state, action) => {
			state.moveSequence = action.payload;
		},
	},
});

export const selectBoardSize = (state) => state.board.boardSize;
export const selectMovements = (state) => state.board.movements;
export const selectStartCell = (state) => state.board.startCell;
export const selectFinalCell = (state) => state.board.finalCell;
export const selectMoveSequence = (state) => state.board.moveSequence;

export const { setBoardSize, setStartCell, setFinalCell, setMoveSequence } =
	boardSlice.actions;

export const boardReducer = boardSlice.reducer;
