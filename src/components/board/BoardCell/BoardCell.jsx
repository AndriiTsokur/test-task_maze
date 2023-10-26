import { CellStyled } from './BoardCell.styled';

const BoardCell = ({ coordinates }) => {
	return (
		<CellStyled type="button" data-coordinates={coordinates}>
			{coordinates}
		</CellStyled>
	);
};

export default BoardCell;
