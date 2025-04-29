import { useSetAtom } from 'jotai';
import { mobileAtom } from './atoms/general';
import { useEffect } from 'react';
import { theme } from './style/theme';
import { Routing } from './routes/Routing'
function App() {
  const setMobile = useSetAtom(mobileAtom);

	useEffect(() => { 
		window.matchMedia(`(max-width: ${theme.responsive.media.lg})`).addEventListener('change', (e) => setMobile(e.matches));
		return (() => {
			window.matchMedia(`(max-width: ${theme.responsive.media.lg})`).removeEventListener('change', (e) => setMobile(e.matches));
		});
	}, []);

  return (
   <>
   <Routing />
   </>
  )
}

export default App
