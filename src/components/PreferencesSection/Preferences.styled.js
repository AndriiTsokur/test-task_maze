import styled from '@emotion/styled';
import { Slider } from '@mui/material';

export const SectionStyled = styled.section`
	min-width: 530px;
	margin-inline: auto;
	margin-bottom: 20px;
	padding-bottom: 10px;
	border: 1px solid #808080;
	border-radius: 10px;
	background-color: #ffffff;
	box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const FormStyled = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 20px;
	min-width: 528px;
	padding-inline: 10px;
	color: #1976d2;
	font-size: 14px;
	font-weight: 300;
`;

export const LabelStyled = styled.p`
	padding-top: 10px;
	padding-left: 40px;
`;

export const AccentStyled = styled.span`
	font-weight: 500;
`;

export const SliderWrapperStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	width: 300px;
`;

export const SliderStyled = styled(Slider)({
	height: 12,

	'& .MuiSlider-thumb': {
		backgroundColor: '#ffffff',
		border: '2px solid currentColor',
	},
});

export const ButtonsWrapperStyled = styled.div`
	display: flex;
	gap: 15px;
`;

export const SwitchWrapperStyled = styled(SliderWrapperStyled)`
	gap: 0;
	width: auto;
`;
