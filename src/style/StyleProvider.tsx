import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import {ThemeProvider} from 'styled-components';
import { ReactNode } from 'react';

const StyleProvider = ({children} : {children: ReactNode}) => {

	return ( 
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			{children}
		</ThemeProvider>
	);
};
 
export default StyleProvider;