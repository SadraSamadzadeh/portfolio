import React from 'react'
import styled from 'styled-components'
import Skill from './Skill'
import { Icons } from '../Icons/Icons'

const SkillTree = () => {
  return (
    <Main>
      <Header>Skills & Stack</Header>
      <Group>
      <Skill color='#071e24' IconSkill={<Icons.React />} name="React"></Skill>
        <Skill IconSkill={<Icons.Typescipt />} name="Typescript" color='#0d2236'></Skill>
      </Group>
      <Group>
      <Skill color='#072b3b' IconSkill={<Icons.Tailwind />} name="Tailwind"></Skill>
        <Skill IconSkill={<Icons.Git />} name="Git"></Skill>
      </Group>
      <Group>
      <Skill color='#0e1f0e' IconSkill={<Icons.Node />} name="Node.js"></Skill>
        <Skill color='#1a1a1a' IconSkill={<Icons.Express />} name="Express"></Skill>
      </Group>
      <Group>
      <Skill color='#0e1d2a' IconSkill={<Icons.PostgreSQL />} name="PostgreSQL"></Skill>
        <Skill color='#2b120c' IconSkill={<Icons.Git />} name="Git"></Skill>
      </Group>
      <Group>
      <Skill color='#1a1a1a' IconSkill={<Icons.Nextjs />} name="Next.js"></Skill>
      </Group>
       
    </Main>
  )
}
const Header = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: ${p => p.theme.colors.white};
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 50px 0 50px;
    width: 40%;
    align-items: center;
`
const Group = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export default SkillTree