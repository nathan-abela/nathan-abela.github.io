import { FC } from 'react';

import { StyledFilterButton } from './styles';

interface FilterButtonProps {
	onClick: () => void;
	isActive: boolean;
	children: React.ReactNode;
}

const FilterButton: FC<FilterButtonProps> = ({ onClick, isActive, children }) => {
	return (
		<StyledFilterButton onClick={onClick} isActive={isActive}>
			{children}
		</StyledFilterButton>
	);
};

export { FilterButton };
