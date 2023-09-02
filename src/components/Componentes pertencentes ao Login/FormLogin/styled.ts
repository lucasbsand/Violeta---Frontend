import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  animation: fadein .3s forwards;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Titulo = styled.p`
  margin-bottom: 23px;
  color: #fff;
  text-align: center;
  font-family: Esteban;
  font-size: 74px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 6.29px;
`;

export const Input = styled.input`
  width: 433px;
  height: 59px;
  padding: 17px 23px;
  flex-shrink: 0;
  border-radius: 50px;
  background-color: #404040;
  box-sizing: border-box;
  color: #fff;
  font-family: Esteban;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px;
  border: none;

  &::placeholder {
    color: #fff;
    font-family: Esteban;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.7px;
    opacity: 0.35;
  }
`;

export const SubmitButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  cursor: ${(props) => props.disabled ? "not-allowed" : null};
  color: #000;
  font-family: Esteban;
  font-size: 20px;
  border-radius: 50px;
  background: ${(props) => props.disabled ? "#a79246" : "#F1D261"};
  text-align: center;
  padding-left: 66px;
  padding-right: 66px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const LinkTo = styled(Link)`
  color: #fff;
  text-align: center;
  font-family: Esteban;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px;
  text-decoration-line: underline;
  margin-top: 23px;
`;


// Cardzinho de verificação de Login
export const Notification = styled.figure`
 @keyframes fadein {
  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  95% {
    opacity: 1;
    transform: translateY(0);
  }
 }
 
 position: absolute;
 right: 0;
 bottom: 0;
 width: max-content;
 border-radius: 6px;
 background-color: #2b2b2b;
 color: #fff;
 font-family: 'Roboto';
 box-shadow: 0 1px 10px rgba(0,0,0,0.1);
 transform:translateY(30px);
 opacity: 0;
 visibility: hidden;
 animation: fadein 3s linear;
`

export const Notification__body = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 16px 8px;
`

export const Notification__progress = styled.div`
  @keyframes progress {
  to {
    transform: scaleX(1);
  }
 }
 
 position: absolute;
 left: 4px;
 bottom: 4px;
 width: calc(100% - 8px);
 height: 3px;
 transform: scaleX(0);
 transform-origin: left;
 background: linear-gradient(to right, #6525af, #9148e4);
 border-radius: inherit;
 animation: progress 2.5s 0.3s linear;
`

// Cardzinho de verificação de Registro
export const Notification_register = styled.figure`
 @keyframes fadein {
  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  95% {
    opacity: 1;
    transform: translateY(0);
  }
 }
 
 position: absolute;
 right: 0;
 bottom: 0;
 width: max-content;
 border-radius: 6px;
 background-color: #2b2b2b;
 color: #fff;
 font-family: 'Roboto';
 box-shadow: 0 1px 10px rgba(0,0,0,0.1);
 transform:translateY(30px);
 opacity: 0;
 visibility: hidden;
 animation: fadein 3s linear;
`

export const Notification__body_register = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 16px 8px;
`

export const Notification__progress_register = styled.div`
  @keyframes progress {
  to {
    transform: scaleX(1);
  }
 }
 
 position: absolute;
 left: 4px;
 bottom: 4px;
 width: calc(100% - 8px);
 height: 3px;
 transform: scaleX(0);
 transform-origin: left;
 background: linear-gradient(to right, #6525af, #9148e4);
 border-radius: inherit;
 animation: progress 2.5s 0.3s linear;
`