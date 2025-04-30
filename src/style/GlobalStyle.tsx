import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts/fonts';

export const GlobalStyle = createGlobalStyle`

	${fonts}

	html, body {
		margin: 20px;
		padding:0;
		font-family: 'Barlow Semi Condensed', sans-serif;
		font-size: 18px;
		color: ${p => p.theme.colors.primary};
		background-color: ${p => p.theme.colors.background};
		font-family: 'Fira Code', monospace;
		overflow-y: hidden;
	}


	* {
		box-sizing: border-box;
	}

	a {
        color: inherit;
        text-decoration: none;
    }

	h1 {
		font-size: 32px;
		margin: 0;
		color: ${p => p.theme.colors.primary};
	}

	label {
		color: ${p => p.theme.colors.primary};
		font-size: 14px;
		pointer-events: none;
	}
`;