import {
	ArrowUpward,
	ArrowForward,
	ArrowDownward,
	ArrowBack,
} from '@mui/icons-material';

import { CellStyled } from './MovementCell.styled';

const MovementCell = ({ children }) => {
	return (
		<CellStyled className="movement">
			{(children === 'up' && (
				<ArrowUpward fontSize="large" sx={{ color: '#ffffff' }} />
			)) ||
				(children === 'right' && (
					<ArrowForward fontSize="large" sx={{ color: '#ffffff' }} />
				)) ||
				(children === 'down' && (
					<ArrowDownward fontSize="large" sx={{ color: '#ffffff' }} />
				)) ||
				(children === 'left' && (
					<ArrowBack fontSize="large" sx={{ color: '#ffffff' }} />
				))}
		</CellStyled>
	);
};

export default MovementCell;
