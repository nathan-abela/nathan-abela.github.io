import 'styled-components';

interface IPalette {
	main: string;
	contrastText: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		body: string;
		text: string;
		grey: string;
		primary: string;
		headline: string;
	}
}
