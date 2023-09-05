import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  margin-top: 5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  margin-bottom: 13.75rem;
  padding-right: 34px;
  gap: 24px 51px;
  width: 900px;
  height: 747px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 36px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #444444; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D9D9D980; /* color of the scroll thumb */ /* roundness of the scroll thumb */
    border: 1px solid #444 /* creates padding around scroll thumb */
  }
`;

export const UsuarioPerfil = styled(Link)`
  img {
    width: 90px;
    height: 85px;
    flex-shrink: 0;
  }
`;

export const Card_NullContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
  }

  p {
    color: #fff;
    opacity: 0.5;
    text-align: center;
    font-family: Esteban;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.825px;
  }
`;

export const IdeiaImagem = styled.div`
  img {
    width: 220px;
    height: 220px;
    flex-shrink: 0;
  }
`;

export const ButtonCriarPostagens = styled.button`
  color: #000;
  width: 251px;
  height: 69px;
  flex-shrink: 0;
  cursor: pointer;
  margin: 20px;

  text-align: center;
  font-family: Esteban;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px;

  border-radius: 50px;
  border: 1px solid #000;
  background: #f1d261;
`;

export const Line = styled.p`
  width: 54.781px;
  height: 0px;
  background: #fff;
  margin-left: 50px;
  margin-right: 14px;
  margin-top: 8px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin: 30px auto 0;
  li {
    list-style: none;
    margin-top: 20px;
  }

  ul {
    display: flex;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: Esteban;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.7px;
`;

// Components do post
export const Card_True_Content = styled.div`
  width: 383px;
  height: 481px;
  margin: 0 auto;
  background: #444;
  flex-shrink: 0;
  transition: .3s;

  &:hover {
   cursor: pointer;
   scale: .98;
  }
`;

export const TitlePost = styled.p`
  @font-face {
    font-family: Haettenschweiler;
    src: url("/Haettenschweiler Regular.ttf");
  }

  color: #fff;
  text-align: center;
  font-family: Haettenschweiler;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.72px;
`;

export const TitleContainer = styled.div`
  height: 34px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  margin: 15px 19px;
`;

export const TextPost = styled.p`
  color: #fff;
  font-family: Esteban;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.275px;
  margin: 0 20px 24px;
`;

export const MoreText = styled(TextPost)`
   text-decoration: underline;
   font-weight: bold;
`;

export const Image_Custom = styled.div`
  width: 383px;
  height: 273px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  & img {
    object-fit: cover;
    height: fit-content;
    height: 382px;
  }
`;

export const LinePost = styled.hr`
  align-self: center;
  height: 30px;
  width: 3px;
  background-color: #ffffff;
`;
