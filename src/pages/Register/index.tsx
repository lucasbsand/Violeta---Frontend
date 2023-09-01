import React from "react";
import Footer from "../../components/Componentes pertencentes ao Login/Footer";
import Header from "../../components/Componentes pertencentes ao Login/Header";
import * as S from "../../components/Componentes pertencentes ao Login/FormLogin/styled"
import { GlobalStyle } from "../Login/styled";

export default function Register() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <S.ContainerPai>
                <S.Titulo>REGISTRO</S.Titulo>
                <S.FormContainer>
                    <S.Input type="text" placeholder="Insira o seu username..."/>
                    <S.Input type="email" placeholder="Insira o seu email..."/>
                    <S.Input type="password" placeholder="Insira a sua senha..."/>
                    <S.Input type="password" placeholder="Repita a sua senha..."/>
                    <S.SubmitButton type="submit">CRIAR CONTA</S.SubmitButton>
                </S.FormContainer>
                <S.LinkTo to="/login">Já tem conta? Faça o login!</S.LinkTo>
            </S.ContainerPai>
            <Footer />
        </>
    )
}
