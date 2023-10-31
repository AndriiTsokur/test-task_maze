import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMoveSequence } from 'src/redux/boardSlice';

import { randomizer } from 'src/utils';

import SectionTitle from 'components/SectionTitle';
import { MovementCell } from 'components/movements';

import { SectionStyled, MovementsWrapperStyled } from './Movements.styled';

const Movements = () => {
	const moveSequence = useSelector(selectMoveSequence);

	useEffect(() => {
		if (moveSequence.length !== 0) {
			const movements = document.querySelectorAll('.movement');
			let timer = null;

			for (let i = 0; i <= movements.length; i++) {
				timer = setTimeout(
					() => {
						movements[i].style.opacity = '1';
					},
					1500 * (i + 1),
				);
			}

			clearTimeout(timer);
		}
	}, [moveSequence.length]);

	return (
		<SectionStyled>
			<SectionTitle>Movements</SectionTitle>
			<MovementsWrapperStyled>
				{moveSequence.map((movement) => (
					<li key={randomizer(10000)}>
						<MovementCell>{movement}</MovementCell>
					</li>
				))}
			</MovementsWrapperStyled>
		</SectionStyled>
	);
};

export default Movements;
