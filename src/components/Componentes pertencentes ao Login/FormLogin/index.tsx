import React from "react";
import * as S from "./styled";

export default function FormLogin() {
  return (
    <S.ContainerPai>
      <S.Titulo>LOGIN</S.Titulo>
      <S.FormContainer>
        <S.Input placeholder='Insira o seu email/username...' required />
        <S.Input type='password' placeholder='Insira a sua senha... ' required />
        <S.SubmitButton type='submit' to="/dashboard">ENTRAR</S.SubmitButton>
      </S.FormContainer>
      <S.LinkTo to="/register">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  );
}
