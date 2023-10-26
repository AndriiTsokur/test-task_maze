import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Grid3x3Rounded, Grid4x4Rounded } from '@mui/icons-material';

import { calcMovements } from 'src/utils';

import {
	selectBoardSize,
	selectMovements,
	setBoardSize,
	setStartCell,
} from 'src/redux/board/boardSlice';

import SectionTitle from 'components/SectionTitle';

import {
	AccentStyled,
	ButtonsWrapperStyled,
	FormStyled,
	LabelStyled,
	SectionStyled,
	SliderStyled,
	SliderWrapperStyled,
} from './Preferences.styled';

const Preferences = () => {
	const dispatch = useDispatch();
	const boardSize = useSelector(selectBoardSize);
	const movements = useSelector(selectMovements);

	const [isButtonActive, setIsButtonActive] = useState(false);
	const [newMovements, setNewMovements] = useState(movements);

	const handleSliderChange = (e) => {
		const sliderValue = e.target.value;
		setIsButtonActive(sliderValue === boardSize ? false : true);
		setNewMovements(calcMovements(sliderValue));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target.elements;
		const sliderValue = +form.boardSize.value;
		dispatch(setBoardSize(sliderValue));
		setIsButtonActive(false);
	};

	const handleStart = () => dispatch(setStartCell());

	return (
		<SectionStyled>
			<SectionTitle>Preferences</SectionTitle>

			<FormStyled onSubmit={handleSubmit}>
				<LabelStyled>
					<AccentStyled>Adjust board size </AccentStyled>
					{`(movements: ${newMovements})`}
				</LabelStyled>
				<SliderWrapperStyled>
					<Grid3x3Rounded color="primary" />
					<SliderStyled
						name="boardSize"
						onChange={handleSliderChange}
						min={3}
						max={10}
						marks
						valueLabelDisplay="auto"
					/>
					<Grid4x4Rounded color="primary" />
				</SliderWrapperStyled>

				{/* <SwitchWrapperStyled>
					Normal
					<Switch />
					Expert
				</SwitchWrapperStyled> */}

				<ButtonsWrapperStyled>
					<Button type="submit" variant="outlined" disabled={!isButtonActive}>
						Confirm
					</Button>
					<Button
						type="button"
						onClick={handleStart}
						variant="contained"
						disabled={isButtonActive}
					>
						START
					</Button>
				</ButtonsWrapperStyled>
			</FormStyled>
		</SectionStyled>
	);
};

export default Preferences;
