import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 15rem;
 width: 90%;
 margin: 0 auto;
 flex-wrap: wrap;

  @media (max-width: 769px) {
    
  }
`

export const Container = styled.div`
 margin: 0 auto;
 margin-top: 1rem;
`

export const LeftContainer = styled.div`
 p {
  color: #FFF;
  font-family: Esteban;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.13281rem;
  height: 10.4375rem;
  margin-top: 3.44rem;
  line-height: 150%;
  max-width: 34.75rem;
  min-width: 21rem;
  flex-wrap: wrap;
 }

 @media (max-width: 769px){
  p {
   text-align: center;
  }
 }
`

export const RightContainer = styled.div`
 img {
  max-width: 250px;
  min-width: 200px;
  height: 390px;
  flex-shrink: 0;
 }
  display: flex;

 @media (max-width: 769px){
  gap: .5rem;
  margin: 0 auto;
   
  height: 477px;
  flex-shrink: 0;
 }
`

export const PrimeiraColuna = styled.div`
 @keyframes anim {
  0% {
    transform: translateY(0.875rem);
  }

  50% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(0.875rem);
  }
 }

  box-shadow: 0px 14px 33px 4px rgba(0,0,0,0.33);
  max-width: 250px;
  min-width: 200px;
  max-height: 270px;
  min-height: 200px;

  flex-shrink: 0;
  background: #444;
  border-radius: 8px;
  animation: anim 3.9s infinite;
  transition: 0.5s all;
 
  img {
    border-radius: 8px;
  }

  @media (max-width: 769px) {
    display: none;
  }
`
export const SegundaColuna = styled.div`
 @keyframes anim {
  0% {
    transform: translateY(0.875rem);
  }

  50% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(0.875rem);
   }
 }

 box-shadow: 0px 14px 33px 4px rgba(0,0,0,0.33);
 
 max-width: 250px;
 min-width: 200px;
 max-height: 270px;
 min-height: 200px;

 flex-shrink: 0;
 margin-top: -80px;
 background: #444;
 border-radius: 8px;
 animation: anim 3.9s infinite;
 transition: 0.5s all;

 img {
    border-radius: 8px;
  }

  @media (max-width: 769px) {
    display: none;
  }
`

export const Title = styled.h1`
 @font-face {
    font-family: Haettenschweiler;
    src: url('/Haettenschweiler Regular.ttf');
 }
 
 color: #FFF;
 font-family: Haettenschweiler;
 font-size: 8rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 margin-bottom: 33px;

 @media (max-width: 992px){
  display: flex;
  justify-content: center;
  font-size: 5rem;
  margin-top: 1.25rem;
 }
`

export const ButtonComecar = styled(Link)`
 text-decoration: none;
 color: #000;
 font-family: Esteban;
 font-size: 20px;
 
 border-radius: 50px;
 background: #F1D261;
 text-align: center;
 padding-left: 66px;
 padding-right: 66px;
 padding-top: 20px;
 padding-bottom: 20px;

 @media (max-width: 769px) {
  display: flex;
  justify-content: center;
  
 }
`

export const Logo = styled.div`
 img {
  max-width: 3.5rem;
  min-width: 2.9rem;
  height: 5.25rem;
 }

 margin-bottom: 8.875rem;
 @media (max-width: 769px) {
  align-content: center;
  
 }
`