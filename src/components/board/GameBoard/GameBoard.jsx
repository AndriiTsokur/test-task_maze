import { useSelector } from 'react-redux';

import { selectBoardSize, selectStartCell } from 'src/redux/boardSlice';

import { generateBoard, randomizer } from 'src/utils';

import { AxisX, AxisY, BoardCell } from 'components/board';

import {
	ContainerStyled,
	BoardWrapperStyled,
	RowWrapperStyled,
} from './GameBoard.styled';

const GameBoard = () => {
	const boardSize = useSelector(selectBoardSize);
	const startCell = useSelector(selectStartCell);
	const boardArr = generateBoard(boardSize);

	const AxisYNumeration = [];

	for (let i = boardSize - 1; i >= 0; i--) {
		AxisYNumeration.push(i);
	}

	return (
		<ContainerStyled>
			<BoardWrapperStyled>
				<li>
					<AxisX cellsNumber={boardSize} />
				</li>

				{boardArr.map((row, idx) => (
					<li key={randomizer(10000)}>
						<RowWrapperStyled key={randomizer(10000)}>
							<AxisY key={randomizer(10000)}>{AxisYNumeration[idx]}</AxisY>

							{row.map(({ x, y }) => (
								<li key={randomizer(10000)}>
									<BoardCell coordX={x} coordY={y}>
										{startCell?.x === x && startCell?.y === y && 'START POINT'}
									</BoardCell>
								</li>
							))}

							<AxisY key={randomizer(10000)}>{AxisYNumeration[idx]}</AxisY>
						</RowWrapperStyled>
					</li>
				))}

				<li>
					<AxisX cellsNumber={boardSize} />
				</li>
			</BoardWrapperStyled>
		</ContainerStyled>
	);
};

export default GameBoard;
