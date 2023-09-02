import React, { useState } from "react";
import Footer from "../../components/Componentes pertencentes ao Login/Footer";
import Header from "../../components/Componentes pertencentes ao Login/Header";
import * as S from "../../components/Componentes pertencentes ao Login/FormLogin/styled"
import { GlobalStyle } from "../Login/styled";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    
    function HandleUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function HandleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function HandlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function HandleConfirmPassword(event: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(event.target.value);
    }

    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <S.ContainerPai>
                <S.Titulo>REGISTRO</S.Titulo>
                <S.FormContainer onSubmit={HandleSubmit}>
                    <S.Input value={userName} onChange={HandleUserName} type="text" placeholder="Insira o seu username..." required />
                    <S.Input value={email} onChange={HandleEmail} type="email" placeholder="Insira o seu email..." required />
                    <S.Input value={password} onChange={HandlePassword} type="password" placeholder="Insira a sua senha..." required />
                    <S.Input value={confirmPassword} onChange={HandleConfirmPassword} type="password" placeholder="Repita a sua senha..." required />
                    <S.SubmitButton type="submit" disabled={password != confirmPassword || password.length > 8 || password.length < 1}>CRIAR CONTA</S.SubmitButton>
                    {password.length != confirmPassword.length ? (
                      <S.Notification_register>
                         <S.Notification__body_register>
                           As senhas não coincidem
                          </S.Notification__body_register>
                        <S.Notification__progress_register></S.Notification__progress_register>
                      </S.Notification_register>
                    ) : null}
                    
                    {password.length > 8 ? (
                      <S.Notification_register>
                         <S.Notification__body_register>
                           A senha não pode ter mais de 8 carácteres
                          </S.Notification__body_register>
                        <S.Notification__progress_register></S.Notification__progress_register>
                      </S.Notification_register>
                    ) : null}
                </S.FormContainer>
                <S.LinkTo to="/login">Já tem conta? Faça o login!</S.LinkTo>
            </S.ContainerPai>
            <Footer />
        </>
    )
}
