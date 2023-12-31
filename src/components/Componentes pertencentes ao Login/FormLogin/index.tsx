import React from "react";
import * as S from "./styled";

export default function FormLogin() {
  return (
    <S.ContainerPai>
      <S.Titulo>LOGIN</S.Titulo>
      <S.FormContainer>
        <S.Input placeholder='Insira o seu email/username...' />
        <S.Input type='password' placeholder='Insira a sua senha... ' />
        <S.SubmitButton type='submit'>ENTRAR</S.SubmitButton>
      </S.FormContainer>
      <S.LinkTo>Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  );
}
