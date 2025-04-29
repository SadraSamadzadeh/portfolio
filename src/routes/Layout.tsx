import styled from 'styled-components'
import Navbar from '../_components/Navbar'
import Home from './home'

const Layout = () => {
  return (
    <>
    <MainContanier>
        <Navbar />
        <Home />
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