import React from 'react'
import styled from 'styled-components'

const Skill = ({name, IconSkill, color}: {name: string, IconSkill: React.ReactNode, color?: string}) => {
  return (
    <Main>
      <IconContainer style={{backgroundColor: color}}>
        {IconSkill}
      </IconContainer>
        {name}
    </Main>
  )
}


const Main = styled.div`
    padding: 20px;
    box-shadow: 0 4px 12px rgba(49, 65, 88, 0.3);
    border-radius: 10px;
    width: 50%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`
const IconContainer = styled.div`
    width: 64px;
    height: 64px;
    border: 1px solid ${p => p.theme.colors.primaryLighter};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
const IconSkill = styled.div`
    
`
export default Skill