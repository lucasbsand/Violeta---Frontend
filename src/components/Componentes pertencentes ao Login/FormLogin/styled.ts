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
