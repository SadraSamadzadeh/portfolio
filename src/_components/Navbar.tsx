import React from 'react'
import styled from 'styled-components'
import { theme } from '../style/theme'
const Navbar = () => {
  return (
    <Container>
        <NavOptionsRight>
        <Item style={{minWidth: '300px'}}>
            sadra-samadzadeh
        </Item>
        <Item>
            _hello
        </Item>
        <Item>
            _about-me
        </Item>
        <Item>
            _projects
        </Item>
        </NavOptionsRight>

        <Item style={{borderRight: 'none', borderLeft: `1px solid ${theme.colors.primaryLighter}`}}>
            _contact-me
        </Item>
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
const Item = styled.a`
    color: ${p => p.theme.colors.textPrimary};
    border-right: 1px solid ${p => p.theme.colors.primaryLighter};
    padding: 15px 25px;
`
export default Navbar