import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts/fonts';

export const GlobalStyle = createGlobalStyle`

	${fonts}

	html, body, #root {
		height: 100%;
		margin: 0;
		padding:0;
		font-family: 'Barlow Semi Condensed', sans-serif;
		overflow: hidden;
		font-size: 18px;
		color: ${p => p.theme.colors.primary};
		background-color: ${p => p.theme.colors.primary};
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
		color: ${p => p.theme.colors.secondary};
		font-size: 14px;
		pointer-events: none;
	}
`;