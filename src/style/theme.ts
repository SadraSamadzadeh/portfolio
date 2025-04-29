
// Light Theme

export const theme = {
	colors: {
		typography: '#DBE1F0',
		primary: '#0A0618',
		primaryLighter: '#26203D',
		primaryLight: '#3D5795',
		secondary: '#76B828',
		secondaryDark: '#355212',

		neutralLightest: '#FFFFFF',
		neutralDarkest: '#000000',
		neutralDarker: '#121318'
	},
	styles: { // style

	},
	responsive:{
		media : {
			xs: '400px',
			sm: '600px',
			lg: '1000px',
			xl: '1440px',
		},
		whitespace : {
			xs: 25,
			sm: 25,
			lg: 50,
			xl: 100,
		}
	}
};

export type AppTheme = typeof theme;