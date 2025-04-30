import React from 'react'
import Sidebar from '../../_components/Sidebar'
import SecondNav from '../../_components/SecondNav'
import styled from 'styled-components'
import CodeText from '../../_components/CodeText'

const AboutMe = () => {
  return (
    <Container>
        <Sidebar/>
        <Left>
          <SecondNav />
          <CodeText />
        </Left>
        
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
`
const Left = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export default AboutMe