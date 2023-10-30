import { randomizer } from 'src/utils';
import { WrapperStyled, ContainerStyled, EmptyStyled } from './AxisX.styled';

const AxisX = ({ cellsNumber }) => {
	const rowX = [];
	for (let i = 0; i < cellsNumber; i++) {
		rowX.push(i);
	}

	return (
		<WrapperStyled>
			<EmptyStyled></EmptyStyled>
			{rowX.map((item) => (
				<ContainerStyled key={randomizer(10000)}>{item}</ContainerStyled>
			))}
			<EmptyStyled></EmptyStyled>
		</WrapperStyled>
	);
};

export default AxisX;
