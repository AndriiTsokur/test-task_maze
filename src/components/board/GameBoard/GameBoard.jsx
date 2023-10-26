import { useSelector } from 'react-redux';

import { selectBoardSize } from 'src/redux/board/boardSlice';
import { generateBoard, randomizer } from 'src/utils';

import { AxisY, BoardCell } from 'components/board';

import {
	BoardWrapperStyled,
	RawContainer,
	RawWrapperStyled,
	CellStyled,
} from './GameBoard.styled';

const GameBoard = () => {
	const boardSize = useSelector(selectBoardSize);
	const boardArr = generateBoard(boardSize);

	console.log(boardArr);

	return (
		<BoardWrapperStyled>
			{boardArr.map((raw, idx) => (
				<RawContainer key={randomizer(10000)}>
					<RawWrapperStyled key={randomizer(10000)}>
						{raw.map(({ x, y }, idx) => (
							<CellStyled
								key={randomizer(10000)}
							>{`X: ${x}, Y: ${y}`}</CellStyled>
						))}
					</RawWrapperStyled>
				</RawContainer>
			))}
		</BoardWrapperStyled>
	);
};

export default GameBoard;
