import Preferences from 'components/Preferences';
import GameBoard from 'components/board/GameBoard';
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
