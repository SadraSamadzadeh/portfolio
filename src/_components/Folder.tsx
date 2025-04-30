import React, { useState } from 'react'
import styled from 'styled-components'
import { Icons } from '../Icons/Icons'
import { theme } from '../style/theme';
import { useAtomValue, useSetAtom } from 'jotai';
import { active } from '../atoms/folder';
import { contentManager } from '../atoms/general';

const Folder = ({title, color, items}: {title: string, color: string, items: string[]}) => {
    const [show, setShow] = useState(true);
    const setActive = useSetAtom(active);
    const setContent = useSetAtom(contentManager);
    const isActive = useAtomValue(active);
    const clickFolder = () => {
        setShow(!show);
        setActive(title);
    }
  return (
    <Container>
        <MainContainer onClick={() => clickFolder()}>
        <Icon>
            <Icons.ArrowRight style={!show ? {transform: 'rotate(90deg)'} : {}} />
        </Icon>

        <Icon>
            <Icons.Folder />
        </Icon>
        
        <Title style={isActive === title ? {color: `${theme.colors.white}`} : {}}>
            {title}
        </Title>
        </MainContainer>
        <ItemsContainer style={show ? {display: 'none'} : {}}>
        <Items>
       
            {items.map((item, index) => (
            <MainContainer key={index}>
                    <Icon>
            <div />
             </Icon>
     
             <Icon>
                 <Icons.File />
             </Icon>
                <Item onClick={() => setContent(item)} key={index}>
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