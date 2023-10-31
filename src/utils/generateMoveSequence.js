import { randomizer } from 'src/utils';

const generateMoveSequence = ({ startCell, movements, boardSize }) => {
	const directions = {
		up: { x: 0, y: 1 },
		right: { x: 1, y: 0 },
		down: { x: 0, y: -1 },
		left: { x: -1, y: 0 },
	};

	const moveSequence = [];

	const currentCell = {
		x: startCell.x,
		y: startCell.y,
	};

	for (let i = 1; i <= movements; i++) {
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

		const move = availableDirections[randomizer(availableDirections.length)];
		moveSequence.push(move);

		currentCell.x += directions[move].x;
		currentCell.y += directions[move].y;
	}

	const finalCellCoordinates = { ...currentCell };

	return { finalCellCoordinates, moveSequence };
};

export default generateMoveSequence;
