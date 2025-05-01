import React from 'react'
import styled from 'styled-components'
import { theme } from '../style/theme'
import { mobileAtom, page, ViewType } from '../atoms/general'
import { useAtom } from 'jotai'
const Navbar = () => {
    const mobile = useAtom(mobileAtom);
    const [currentView, setView] = useAtom(page);
    const navItems: ViewType[] = ['_hello', '_about-me', '_projects', '_contact-me'];
  return (
    <Container>
        <NavOptionsRight>
        <Item style={{minWidth: '300px'}}>
            sadra-samadzadeh
        </Item>
        {navItems.filter((item) => item !== '_contact-me').map((item) => (
            <Item  key={item} active={currentView === item} onClick={() => setView(item)}>{item}</Item> 
        ))}
        </NavOptionsRight>

        {/* <Item style={mobile ? {display: 'hidden'} : {}} active={currentView === '_contact-me'} onClick={() => setView('_contact-me')} style={{borderRight: 'none', borderLeft: `1px solid ${theme.colors.primaryLighter}`}}>
            _contact-me
        </Item> */}
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${p => p.theme.colors.primaryLighter};

`
const NavOptionsRight = styled.div`
    display: flex;
    align-items: center;
`
const Item = styled.a<{active?: boolean}>`
    color: ${p => p.theme.colors.textPrimary};
    border-bottom: 1px solid ${({ active }) => (active ? theme.colors.highlight : 'transparent')};
    padding: 15px 25px;
    cursor: pointer;

`
export default Navbar