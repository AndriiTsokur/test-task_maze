import { ContainerStyled, TitleStyled } from './SectionTitle.styled';

const SectionTitle = ({ children }) => {
	return (
		<ContainerStyled>
			<TitleStyled>{children}</TitleStyled>
		</ContainerStyled>
	);
};

export default SectionTitle;
