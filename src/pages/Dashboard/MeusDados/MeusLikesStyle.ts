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

export const RightContainer = styled.div`
 
`
