import React from 'react'
import styled from 'styled-components'
import Folder, { Icon } from './Folder'
import { Icons } from '../Icons/Icons'
import { theme } from '../style/theme'

const Section = ({title, children} : {title: string, children?: React.ReactNode}) => {
  return (
    <Container>
            <Header>
            <Icon>
                <Icons.ArrowRight />
            </Icon>
            <Title>
                {title}
            </Title>
            </Header>
            <Content>
                {children}
            </Content> 
    </Container>
  )
}
const Container = styled.div`
    display: flex; 
    flex-direction: column;
    
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-bottom: 1px solid ${p => p.theme.colors.primaryLighter};
    border-top: 1px solid ${p => p.theme.colors.primaryLighter};
    color: ${p => p.theme.colors.white};

`
const Content = styled.div`
`
const Title = styled.div`
font-size: 16px;
`
export default Section