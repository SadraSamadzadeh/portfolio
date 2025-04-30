import Sidebar from '../../_components/Sidebar'
import SecondNav from '../../_components/SecondNav'
import styled from 'styled-components'
import CodeText from '../../_components/CodeText'
import Spliter from '../../_components/Spliter'
import SkillTree from '../../_components/SkillTree'

const AboutMe = () => {
  return (
    <Container>
      <Sidebar/>
      <TextContainer>
        <SecondNav />
        <Description>
            <CodeText />
            <Spliter />
            <SkillTree />
        </Description>
      </TextContainer>
    </Container>  
  )
}
const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`
const Description = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`
export default AboutMe