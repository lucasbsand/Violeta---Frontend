import { useState } from "react";
import * as S from "./styled";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function HandleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function HandlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let verifyEmail = email // tenho que fazer a verificação para quando a pessoa digitar senha e email
    let verifyPassword = password
  }

  return (
    <S.ContainerPai>
      <S.Titulo>LOGIN</S.Titulo>
      <S.FormContainer onSubmit={HandleSubmit}>
        <S.Input value={email} type="email" onChange={HandleEmail} placeholder='Insira o seu email/username...' />
        <S.Input value={password} type='password' onChange={HandlePassword} placeholder='Insira a sua senha... ' />
        <S.SubmitButton type='submit'>ENTRAR</S.SubmitButton> 
      </S.FormContainer>
      <S.LinkTo to="/register">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  );
}
