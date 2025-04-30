import React from 'react'
import styled from 'styled-components'
import { theme } from '../style/theme'
import { useAtom, useAtomValue } from 'jotai'
import { mobileAtom } from '../atoms/general'

const LandingSummary = () => {
    const mobile = useAtomValue(mobileAtom);
  return (
    <Main style={mobile ? {flexDirection: 'column-reverse', padding: '10px'} : {}}>
        <Container style={mobile ? {marginTop: '20px', marginBottom: '20px'} : {}}>
        <Top>
            Hi all. I am 
        </Top>
        <Name style={mobile ? {fontSize: '40px'} : {}}>
            Sadra Samadzadeh
        </Name>
        <Role style={mobile ? {fontSize: '20px'} : {}}>
            &gt; Full Stack Developer
        </Role>
        <Lower>
            <Comment style={mobile ? {fontSize: '15px'} : {}}>
                // Happy to have you here
            </Comment>
            <Comment style={mobile ? {fontSize: '15px'} : {}}>
                // find my profile on github: 
            </Comment>
            <GithubLink style={mobile ? {fontSize: '15px'} : {}}>
                <span style={{color: `${theme.colors.purple}`}}>const</span> <span style={{color: `${theme.colors.green}`}} >githubLink</span> = <a href='https://github.com/SadraSamadzadeh' target='_blank' style={{color: `${theme.colors.pink}`}}>"https://github.com/SadraSamadzadeh"</a>
            </GithubLink>
        </Lower>
    </Container>
        <Image style={mobile ? {marginTop: '20px', marginBottom: '20px', width: '60%', height: '60%'} : {}}>
            <img width={mobile ? '100%' : '50%'} src="./my-image.png" alt="sadra" />
        </Image>
        
    </Main>
    
  )
}
const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 150px;
    display: flex;
    align-items: center;
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
    margin-top: 100px;
    margin-bottom: 100px;  
    `     
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
`
const Top = styled.div`
    font-size: 18px;
    line-height: 27px;
    color: ${p => p.theme.colors.textPrimary};
`
const Name = styled.div`
    font-size: 60px;
    line-height: 66px;
    color: ${p => p.theme.colors.white};
`
const Role = styled.div`
    font-size: 30px;
    line-height: 42px;
    color: ${p => p.theme.colors.purple};
`
const Lower = styled.div`
    
`
const Comment = styled.div`
     font-size: 16px;
    line-height: 24px;
    color: ${p => p.theme.colors.textPrimary};
`
const GithubLink = styled.a`
    font-size: 16px;
    line-height: 24px;
    color: ${p => p.theme.colors.white};
`
export default LandingSummary