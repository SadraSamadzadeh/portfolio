import { useAtomValue } from 'jotai';
import React from 'react'
import styled from 'styled-components'
import { contentManager } from '../atoms/general';

const SecondNav = () => {
    const file = useAtomValue(contentManager);
  return (
    <Main>
        <FileContainer>
            {file}
        </FileContainer>
    </Main>
  )
}

const Main = styled.div`
    width: 100%;
    border-bottom: 1px solid ${p => p.theme.colors.primaryLighter};

`;
const FileContainer = styled.div`
    width: 15%;
    border-top: 1px solid ${p => p.theme.colors.primaryLighter};
    border-right: 1px solid ${p => p.theme.colors.primaryLighter};
    padding: 15px;
    font-size: 16px;
`

export default SecondNav