import { StyledThemeToggle } from './styles';

import { getTheme } from 'Redux/selectors';
import { setTheme } from 'Redux/actions/theme';
import { useDispatch, useSelector } from 'react-redux';

import Dark from 'Public/assets/dark.svg';
import Light from 'Public/assets/light.svg';

const ThemeToggle = () => {
	const theme = useSelector(getTheme);
	const dispatch = useDispatch();

	const isLightTheme = theme === 'light';

	const handleToggle = () => {
		dispatch(setTheme(isLightTheme ? 'dark' : 'light'));
	};

	return (
		<StyledThemeToggle
			onClick={handleToggle}
			title={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
		>
			{isLightTheme ? <Dark /> : <Light />}
		</StyledThemeToggle>
	);
};

export { ThemeToggle };
