import { Switch } from '@mui/material';
import { Grid3x3Rounded, Grid4x4Rounded } from '@mui/icons-material';

import SectionTitle from 'components/SectionTitle';

import {
	AdjustersContainer,
	SectionStyled,
	SliderStyled,
	SliderWrapperStyled,
	SwitchWrapperStyled,
} from './Preferences.styled';

const Preferences = () => {
	const handleBoardSize = (e) => {
		console.log(e.target.value);
	};

	return (
		<SectionStyled>
			<SectionTitle>Preferences</SectionTitle>

			<AdjustersContainer>
				<SliderWrapperStyled>
					<Grid3x3Rounded color="primary" />
					<SliderStyled
						name="boardSize"
						onChange={handleBoardSize}
						aria-label="Board Size"
						min={3}
						max={26}
						marks
						defaultValue={3}
						valueLabelDisplay="auto"
					/>
					<Grid4x4Rounded color="primary" />
				</SliderWrapperStyled>

				<SwitchWrapperStyled>
					Normal
					<Switch />
					Expert
				</SwitchWrapperStyled>
			</AdjustersContainer>
		</SectionStyled>
	);
};

export default Preferences;
