import { useSelector } from 'react-redux';

import { selectBoardSize, selectStartCell } from 'src/redux/board/boardSlice';
import { generateBoard, randomizer } from 'src/utils';

import { AxisY, BoardCell } from 'components/board';

import {
	ContainerStyled,
	BoardWrapperStyled,
	RawWrapperStyled,
} from './GameBoard.styled';

const GameBoard = () => {
	const startCell = useSelector(selectStartCell);
	const boardSize = useSelector(selectBoardSize);
	const boardArr = generateBoard(boardSize);

	let lastRowNumber = boardSize;

	return (
		<ContainerStyled>
			<BoardWrapperStyled>
				{boardArr.map((raw) => (
					<li key={randomizer(10000)}>
						<RawWrapperStyled key={randomizer(10000)}>
							<AxisY key={randomizer(10000)}>{lastRowNumber--}</AxisY>
							{raw.map(({ x, y }) => (
								<li key={randomizer(10000)}>
									{/* <BoardCell coordinates={`{"cell":{"x":${x}, "y":${y}}}`}> */}
									<BoardCell coordX={x} coordY={y}>
										{(startCell?.x === x && startCell?.y === y && 'START') ||
											`X: ${x}, Y: ${y}`}
										{/* {`X: ${x}, Y: ${y}`} */}
									</BoardCell>
								</li>
							))}
						</RawWrapperStyled>
					</li>
				))}
			</BoardWrapperStyled>
		</ContainerStyled>
	);
};

export default GameBoard;
