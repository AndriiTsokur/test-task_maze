const GameBoard = () => {
	const boardSize = 3;
	const movements = 10;

	const directions = {
		up: { x: 0, y: 1 },
		right: { x: 1, y: 0 },
		down: { x: 0, y: -1 },
		left: { x: -1, y: 0 },
	};

	const random = (interval) => {
		return Math.floor(Math.random() * interval);
	};

	const startCell = {
		x: random(boardSize),
		y: random(boardSize),
	};

	console.log('startCell: ', startCell);

	const currentCell = {
		x: startCell.x,
		y: startCell.y,
	};

	for (let i = 1; i <= movements; i++) {
		console.log('currentCell: ', currentCell);

		let availableDirections = [];

		for (const direction in directions) {
			if (
				currentCell.x + directions[direction].x >= 0 &&
				currentCell.x + directions[direction].x < boardSize &&
				currentCell.y + directions[direction].y >= 0 &&
				currentCell.y + directions[direction].y < boardSize
			) {
				availableDirections.push(direction);
			}
		}
		console.log(availableDirections);

		const move = availableDirections[random(availableDirections.length)];
		console.log(move);

		currentCell.x += directions[move].x;
		currentCell.y += directions[move].y;
	}

	const finalCell = { ...currentCell };

	console.log('finalCell: ', finalCell);
};

export default GameBoard;
