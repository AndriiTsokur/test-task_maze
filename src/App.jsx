import Preferences from 'components/Preferences';
import GameBoard from 'components/GameBoard';
import { AppWrapper } from './App.styled';

const App = () => {
	return (
		<AppWrapper>
			<Preferences />
			<GameBoard />
		</AppWrapper>
	);
};

export default App;
