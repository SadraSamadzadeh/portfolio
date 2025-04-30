import styled from 'styled-components'
import Navbar from '../_components/Navbar'
import Home from './home'
import { useAtom } from 'jotai';
import { page } from '../atoms/general'
import AboutMe from './about';

const Layout = () => {
  const [content] = useAtom(page);
  return (
    <>
    <MainContanier>
        <Navbar />
        {content === '_hello' && <Home />}
        {content === '_about-me' && <AboutMe />}
    </MainContanier>
    </>
  )
}

const MainContanier = styled.div`
    border-radius: 10px;
    background-color: ${p => p.theme.colors.backgroundLighter};
    border: 1px solid ${p => p.theme.colors.primaryLighter};
    height: 100%;
`

export default Layout