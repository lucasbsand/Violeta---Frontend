import { PaiContainer, SecondLinks } from './MeusLikesStyle'
import { Logo } from '../../Home/PrimeiraParte/HomeStyle'
import { LeftContainer, RightContainer, TitleCard, ParagraphCard } from './MeusLikesStyle'
import { Line } from '../MinhasPostagens/PostsStyle'
import { Container, Header, Links, UsuarioPerfil } from '../MinhasPostagens/PostsStyle'
import { CardLikes } from './Data/MeusLikesData'

import Logo_Link_Perfil from '../MinhasPostagens/assets/profile 1.svg'
import IdeiaImage from '../MinhasPostagens/assets/thought-bubble-svgrepo-com 1.svg'
import LogoImage from '../../../assets/ghost 1.svg'
import LineImage from '../MinhasPostagens/assets/Line 4.svg'

function MeusLikes() {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <img src={LogoImage} />
          </Logo>

          <ul>
            <li><Links to="#">Minhas Postagens</Links></li>
            <Line>
              <img src={LineImage} />
            </Line>
            <li><Links to="#">Outras Postagens</Links></li>
          </ul>

          <UsuarioPerfil to="#"><img src={Logo_Link_Perfil} /></UsuarioPerfil>
        </Header>

        <main>
          <PaiContainer>
            <LeftContainer>
              <ul>
                <li><SecondLinks to="#">Editar Dados</SecondLinks></li>
                <li><SecondLinks to="#">Meus Likes</SecondLinks></li>
                <li><SecondLinks to="#">Meus Comentários</SecondLinks></li>
                <li><SecondLinks to="#">Logout</SecondLinks></li>
              </ul>
            </LeftContainer>
            <RightContainer>

            </RightContainer>
          </PaiContainer>
        </main>
      </Container>
    </>
  )
}

export default MeusLikes