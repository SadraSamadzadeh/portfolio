
// Light Theme

export const theme = {
	colors: {
		backgroundLighter: '0F172B',
		primary: '#020618',
		primaryLighter: '#314158',
		primaryLight: '#163355',
		background: '#020618',
		textPrimary: '90A1B9',
		white: '#F8FAFC',	
		purple: '#615FFF',
		green: '#00D5BE',
		pink: '#FFA1AD',

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