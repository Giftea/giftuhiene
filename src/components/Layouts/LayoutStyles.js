import styled from 'styled-components'

export const Header = styled.nav`
background:${props => props.theme.colors.background};
position: fixed;
width:100vw;
z-index: 100;

border-bottom:1px solid #888;

`
export const Img = styled.img`
  width:100%;
  object-fit: cover;
  overflow: hidden;
`
