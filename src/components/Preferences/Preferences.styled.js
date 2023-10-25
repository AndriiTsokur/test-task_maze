import styled from '@emotion/styled';
import { Slider } from '@mui/material';

export const SectionStyled = styled.section`
	width: 100%;
	min-width: 502px;
	height: 93px;
	margin-bottom: 50px;
	padding-bottom: 10px;
	border: 1px solid #808080;
	border-radius: 10px;
	background-color: #ffffff;
`;

export const AdjustersContainer = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	width: 500px;
	padding-inline: 10px;
	color: #1976d2;
	font-size: 14px;
	font-weight: 300;
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

export const SwitchWrapperStyled = styled(SliderWrapperStyled)`
	gap: 0;
	width: auto;
`;
