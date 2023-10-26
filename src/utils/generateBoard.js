const generateBoard = (boardSize) => {
	const boardArr = new Array();
	const cell = { x: null, y: null };

	for (let i = 0; i < boardSize; i++) {
		boardArr[i] = new Array();

		for (let j = 0; j < boardSize; j++) {
			cell.x = j;
			cell.y = i;
			boardArr[i][j] = { ...cell };
		}
	}

	return boardArr.reverse();
};

export default generateBoard;
