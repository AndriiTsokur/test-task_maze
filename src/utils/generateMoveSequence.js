import { randomizer } from 'src/utils';

const generateMoveSequence = ({ startCell, movements, boardSize }) => {
	const directions = {
		up: { x: 0, y: 1 }, // UP
		right: { x: 1, y: 0 }, // RIGHT
		down: { x: 0, y: -1 }, // DOWN
		left: { x: -1, y: 0 }, // LEFT
	};

	const moveSequence = [];

	// console.log('startCell: ', startCell);

	const currentCell = {
		x: startCell.x,
		y: startCell.y,
	};

	for (let i = 1; i <= movements; i++) {
		// console.log('currentCell: ', currentCell);

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
		// console.log(availableDirections);

		const move = availableDirections[randomizer(availableDirections.length)];
		moveSequence.push(move);
		// console.log(move);

		currentCell.x += directions[move].x;
		currentCell.y += directions[move].y;
	}

	const finalCellCoordinates = { ...currentCell };

	// console.log('finish: ', finalCellCoordinates);
	// console.log(moveSequence);

	return { finalCellCoordinates, moveSequence };
};

export default generateMoveSequence;
