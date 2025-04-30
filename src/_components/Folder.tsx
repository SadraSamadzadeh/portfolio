import React, { useState } from 'react'
import styled from 'styled-components'
import { Icons } from '../Icons/Icons'

const Folder = ({title, color, items}: {title: string, color: string, items: string[]}) => {
    const [show, setShow] = useState(true);
  return (
    <Container>
        <MainContainer onClick={() => setShow(!show)}>
        <Icon>
            <Icons.ArrowRight style={show ? {transform: 'rotate(90deg)'} : {}} />
        </Icon>

        <Icon>
            <Icons.Folder />
        </Icon>
        
        <Title>
            {title}
        </Title>
        </MainContainer>
        <ItemsContainer style={show ? {display: 'none'} : {}}>
        <Items>
       
            {items.map((item, index) => (
                <MainContainer>
                    <Icon>
            <div />
             </Icon>
     
             <Icon>
                 <Icons.File />
             </Icon>
                <Item key={index}>
                    {item}
                </Item>
                </MainContainer>
            
            ))}
        </Items>
        </ItemsContainer>
       
    </Container>
  )
}

const Container = styled.div`
`
export const Icon = styled.div`
   width: 16px;
   height: 16px;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    cursor: pointer;

`
const ItemsContainer = styled.div`
`
const Title = styled.div`

`
const Items = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0px;
`
const Item = styled.div`
    
`

export default Folder