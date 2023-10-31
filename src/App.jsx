import Preferences from 'components/PreferencesSection';
import { GameBoard } from 'components/board';
import { Movements } from 'components/movements';
import { AppWrapper } from './App.styled';

const App = () => {
	return (
		<AppWrapper>
			<Preferences />
			<GameBoard />
			<Movements />
		</AppWrapper>
	);
};

export default App;
