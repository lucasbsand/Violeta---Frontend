import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 justify-content: center;
 gap: 20rem;
`

export const SecondLinks = styled(Link)`
 color: #FFF;
 font-family: Esteban;
 text-decoration: none;
 font-size: 2rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.17rem;
`

export const LeftContainer = styled.div`
 
 ul {
  display: flex;
  flex-direction: column;
 }

 li {
  list-style: none;
 }
`

//Esse recebe as informações do map

export const TitleCard = styled.h2`
  @font-face {
    font-family: Haettenschweiler;
    src: url('/Haettenschweiler Regular.ttf');
 }

 color: #FFF;
 text-align: start;
 font-family: Haettenschweiler;
 margin-bottom: 0.25rem;
 font-size: 2rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 0.17rem;
`

export const RightContainer = styled.div`
 
`

export const ParagraphCard = styled.p`
 
`

//Caso o card não receba nada
