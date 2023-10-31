import styled from '@emotion/styled';

export const ContainerStyled = styled.section`
	min-width: 530px;
	margin-inline: auto;
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #808080;
	border-radius: 10px;
	background-color: #aeceee;
	box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const BoardWrapperStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 3px;
	align-items: center;
`;

export const RowWrapperStyled = styled.ul`
	display: flex;
	gap: 3px;
`;
