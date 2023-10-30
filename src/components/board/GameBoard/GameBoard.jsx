import { useSelector } from 'react-redux';

import { selectBoardSize, selectStartCell } from 'src/redux/board/boardSlice';
import { generateBoard, randomizer } from 'src/utils';

import { AxisX, AxisY, BoardCell } from 'components/board';

import {
	ContainerStyled,
	BoardWrapperStyled,
	RowWrapperStyled,
} from './GameBoard.styled';

const GameBoard = () => {
	const startCell = useSelector(selectStartCell);
	const boardSize = useSelector(selectBoardSize);
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
									{/* <BoardCell coordinates={`{"cell":{"x":${x}, "y":${y}}}`}> */}
									<BoardCell coordX={x} coordY={y}>
										{(startCell?.x === x &&
											startCell?.y === y &&
											'START POINT') ||
											`X: ${x}, Y: ${y}`}
										{/* {`X: ${x}, Y: ${y}`} */}
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
