import styled from '@emotion/styled';

export const CellStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70px;
	height: 70px;
	border: 1px solid #808080;
	border-radius: 8px;
	background-color: #ffffff;
	transition:
		background-color 250ms,
		transform 250ms,
		box-shadow 250ms;

	&:hover {
		background-color: #f3f9ff;
		transform: scale(0.99);
		box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3);
	}
`;
