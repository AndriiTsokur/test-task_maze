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

	const currentPosition = {
		x: startCell.x,
		y: startCell.y,
	};

	for (let i = 1; i <= movements; i++) {
		console.log('currentPosition: ', currentPosition);

		let availableDirections = [];

		for (const direction in directions) {
			if (
				currentPosition.x + directions[direction].x >= 0 &&
				currentPosition.x + directions[direction].x < boardSize &&
				currentPosition.y + directions[direction].y >= 0 &&
				currentPosition.y + directions[direction].y < boardSize
			) {
				availableDirections.push(direction);
			}
		}
		console.log(availableDirections);

		const move = availableDirections[random(availableDirections.length)];
		console.log(move);

		currentPosition.x += directions[move].x;
		currentPosition.y += directions[move].y;
	}

	console.log('currentPosition: ', currentPosition);
};

export default GameBoard;
