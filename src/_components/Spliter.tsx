import styled from 'styled-components'
import { Icons } from '../Icons/Icons'

const Spliter = () => {
  return (
    <Main>
    </Main>
  )
}

const Main = styled.div`
    width: 3%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid ${p => p.theme.colors.primaryLighter};
`

export default Spliter