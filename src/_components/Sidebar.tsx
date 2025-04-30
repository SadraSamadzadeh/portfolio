import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Folder from './Folder'

const Sidebar = () => {
  return (
    <Main>
        <Section title='personal-info'>
            <Folder title="bio" color="red" items={['about-me', 'hobbies']}>
            </Folder>
            <Folder title="Experience" color="red" items={['USF.SPORT', 'Inmotio', 'Inmotio']}>
            </Folder>
            <Folder title="Education" color="red" items={['University']}>
            </Folder>
        </Section>
        <Section title='contacts'>
            
        </Section>
    </Main>
  )
}

const Main = styled.div`
    min-width: 20%;
    max-width: 30%;
    border-bottom: 1px solid ${p => p.theme.colors.primaryLighter};
    border-right: 1px solid ${p => p.theme.colors.primaryLighter};
    border-left: 1px solid ${p => p.theme.colors.primaryLighter};

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export default Sidebar