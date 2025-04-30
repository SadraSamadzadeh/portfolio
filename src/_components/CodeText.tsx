import React from 'react'
import styled from 'styled-components'

const CodeText = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Main>
        <SideNumbers>
            {numbers.map((n) => (
                <div key={n}>
                    {n}
                </div>
            ))}
        </SideNumbers>
        <Text>
            /** <br/> * About me <br/>* I have 3 years of experience <br/>* in web development <br/>* and I am currently <br/>* working as a full stack developer <br/> **/
        </Text>
    </Main>
  )
}
const Main = styled.div`
    width: 57%;
    padding: 20px 50px 0 50px;
    display: flex;
    gap: 50px;
    height: 100%;
`
const SideNumbers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 16px;
    gap: 5px;
`
const Text = styled.div`
    line-height: 25px;
`

export default CodeText