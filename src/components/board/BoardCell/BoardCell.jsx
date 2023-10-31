import { useSelector } from 'react-redux';
import { selectFinalCell } from 'src/redux/boardSlice';

import { CellStyled } from './BoardCell.styled';

const BoardCell = ({ coordX, coordY, children }) => {
	const finalCell = useSelector(selectFinalCell);

	const handleClick = (e) => {
		const cells = document.querySelectorAll('.cell');

		if (coordX === finalCell.x && coordY === finalCell.y) {
			e.target.style.backgroundColor = '#27ad28';
		} else {
			e.target.style.backgroundColor = '#ff1d00';
			cells.forEach((cell) => {
				if (
					Number(cell.dataset.x) === finalCell.x &&
					Number(cell.dataset.y) === finalCell.y
				) {
					cell.style.backgroundColor = '#27ad28';
				}
			});
		}

		cells.forEach((cell) => cell.setAttribute('disabled', true));
	};

	return (
		<CellStyled
			className="cell"
			type="button"
			onClick={handleClick}
			data-x={coordX}
			data-y={coordY}
		>
			{children}
		</CellStyled>
	);
};

export default BoardCell;
