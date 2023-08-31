import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 gap: 8%;
`

export const Container = styled.div`
 margin: 0 auto;
 width: 90%;
 margin-top: 2rem;
`

export const LeftContainer = styled.div`
 p {
  color: #FFF;
  font-family: Esteban;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.1328125rem;
  width: 34.75rem;
  height: 10.4375rem;
  flex-shrink: 0;
 }
`

export const RightContainer = styled.div`
 img {
   width: 267px;
   height: 477px;
   flex-shrink: 0;
 }

 display: flex;
 gap: 2.5rem;
`

export const PrimeiraColuna = styled.div`
 width: 267px;
 height: 477px;
 flex-shrink: 0;
 background: #444;
`
export const SegundaColuna = styled.div`
 width: 267px;
 height: 477px;
 flex-shrink: 0;
 margin-top: -80px;
 background: #444;
`

export const Title = styled.h1`
 @font-face {
    font-family: Haettenschweiler;
    src: url('../../../../public/Haettenschweiler Regular.ttf');
 }

 width: 47.4375rem;
 font-family: Haettenschweiler;
 color: #FFF;
 font-family: Haettenschweiler;
 font-size: 8rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
`

export const ButtonComecar = styled.button`
 color: #000;
 text-align: center;
 font-family: Esteban;
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
 letter-spacing: 0.10625rem;
 margin-bottom: 3.4375rem; 

 width: 13.9375rem;
 height: 4.3125rem;
 flex-shrink: 0;
 border-radius: 3.125rem;
 background: #F1D261;
 cursor: pointer;
`

export const Logo = styled.div`
 img {
  width: 3.9375rem;
  height: 5.25rem;
 }
 margin-bottom: 8.875rem;
`