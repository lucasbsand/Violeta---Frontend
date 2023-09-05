import * as S from "./PostsStyle";
import { Card_True_Content, Card_NullContent, IdeiaImagem } from "./PostsStyle";
import { Line } from "./PostsStyle";
import { Posts } from "./Data/PostsData";
import LogoImage from "../../../assets/ghost 1.svg";
import Logo_Link_Perfil from "../MinhasPostagens/assets/profile 1.svg";
import LineImage from "./assets/Line 4.svg";
import IdeiaImage from "./assets/thought-bubble-svgrepo-com 1.svg";
import Footer from "../../../components/Componentes pertencentes ao Login/Footer";
import Heart from "./assets/second_heart-svgrepo-com 1.svg";
import Comment from "./assets/comment-3-svgrepo-com 1.svg";

function PostsUsuario() {
  return (
    <>
      <S.Header>
        <img src={LogoImage} />

        <ul>
          <li>
            <S.Links to="#">Minhas Postagens</S.Links>
          </li>
          <Line>
            <img src={LineImage} />
          </Line>
          <li>
            <S.Links to="#">Outras Postagens</S.Links>
          </li>
        </ul>

        <S.UsuarioPerfil to="#">
          <img src={Logo_Link_Perfil} />
        </S.UsuarioPerfil>
      </S.Header>

      <S.Main>
        {Posts.length == 0 ? (
          <Card_NullContent>
            <IdeiaImagem>
              <img src={IdeiaImage} />
            </IdeiaImagem>
            <p>Ainda sem postagens...</p>
            <S.ButtonCriarPostagens>CRIAR POSTAGEM</S.ButtonCriarPostagens>
          </Card_NullContent>
        ) : (
          <S.Container>
            {Posts.map((post, index) => (
              <Card_True_Content key={index}>
                <S.Image_Custom>
                  <img src={post.img} />
                </S.Image_Custom>
                <S.TitleContainer>
                  <S.TitlePost>{post.title}</S.TitlePost>
                  <S.LinePost />
                  <img src={Heart} alt="Coração" height="34px" />
                  <img src={Comment} alt="Comentário" height="30px" />
                </S.TitleContainer>
                <S.TextPost>{post.text.length > 244 ? post.text.slice(0, 244) + " ..." : post.text}</S.TextPost>
              </Card_True_Content>
            ))}
          </S.Container>
        )}
      </S.Main>
      {console.log(Posts[0].text.length)}
      {Posts.length > 0 ? "" : <Footer />}
    </>
  );
}

{
  /* <S.Container>
  {Posts.length > 0 ? (
    Posts.map((post, index) => (
      <Card_True_Content key={index}>
        <S.TitlePost>{post.title}</S.TitlePost>
        <S.LinePost />
        <S.TextPost>{post.text}</S.TextPost>
        <S.Image_Custom>
          <img src={post.img} />
        </S.Image_Custom>
      </Card_True_Content>
    ))
  ) : (
    <Card_NullContent>
      <IdeiaImagem>
        <img src={IdeiaImage} />
      </IdeiaImagem>
      <p>Ainda sem postagens...</p>
      <S.ButtonCriarPostagens>CRIAR POSTAGEM</S.ButtonCriarPostagens>
    </Card_NullContent>
  )}
</S.Container>; */
}

export default PostsUsuario;
