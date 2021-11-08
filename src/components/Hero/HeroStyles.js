import styled from 'styled-components'

export const HeroContainer = styled.div`
background:${props => props.theme.colors.background};
height: 100vh;
padding-top: 100px;
postion: relative;
`

export const Head1 = styled.h1`
    font-size:60px;
    color:#0CCA98;
    text-align: center;
` 

export const Head4 = styled.h4`
    font-size:25px;
    color:#fff;
    text-align: center;
` 
export const P = styled.p`
    font-size:16px;
    color:rgba(255,255,255,.55);
    text-align: center;
` 
