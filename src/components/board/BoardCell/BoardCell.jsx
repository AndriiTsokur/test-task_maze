import { CellStyled } from './BoardCell.styled';

const BoardCell = ({ coordX, coordY, children }) => {
	const handleClick = () => {
		// const coords = JSON.parse(e.target.dataset.cell);
		console.log(coordX, coordY);
	};

	return (
		<CellStyled
			type="button"
			onClick={handleClick}
			// data-cell={coordinates}
		>
			{children}
		</CellStyled>
	);
};

export default BoardCell;
