import { useState } from "react";
// import { IoIosClose } from "react-icons/io";
import { Notification, Notification__body, Notification__progress } from './styled'
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
  }

  return (
    <S.ContainerPai>
      <S.Titulo>LOGIN</S.Titulo>
      <S.FormContainer onSubmit={HandleSubmit}>
        <S.Input value={email} type="email" onChange={HandleEmail} placeholder='Insira o seu email/username...' />
        <S.Input value={password} type='password' onChange={HandlePassword} placeholder='Insira a sua senha... ' />
        <S.SubmitButton type='submit' disabled={password.length > 8 || password.length == 0}>ENTRAR</S.SubmitButton> 
        {password.length > 8 ? (
          <Notification>
            <Notification__body>
              A Senha declarada não é válida 
            </Notification__body>
            <Notification__progress></Notification__progress>
          </Notification>
        ) : null}
      </S.FormContainer>
      <S.LinkTo to="/register">Ainda sem conta? Se registre!</S.LinkTo>
    </S.ContainerPai>
  );
  

}
