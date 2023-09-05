import HomeSegunda from '../SegundaParte/HomeSegundaParte'
import HomeTerceira from '../TerceiraParte/HomeTerceiraParte'
import { PaiContainer, LeftContainer, Title, ButtonComecar, RightContainer, Container, Logo } from './HomeStyle'
import { PrimeiraColuna, SegundaColuna } from './HomeStyle'
import LogoImage from '../../../assets/ghost 1.svg'
import FirstImage from '../../../assets/Images/DreamShaper_v7_anime_girl_with_a_hoddie_smiling_with_eyes_clos_1 (1).jpg'
import SecondImage from '../../../assets/Images/DreamShaper_v7_anime_girl_with_a_hoddie_smiling_with_eyes_clos_0.jpg'

function Home() {
    return (
        <>
            <Container>
                <Logo>
                    <img src={LogoImage} />
                </Logo>
                <PaiContainer>
                    <LeftContainer>
                        <Title>SE EXPRESSE<br></br>SEM LIMITES</Title>
                        <ButtonComecar to="/login">Começar</ButtonComecar>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </LeftContainer>
                    <RightContainer>
                        <PrimeiraColuna>
                            <img src={FirstImage} />
                        </PrimeiraColuna>
                        <SegundaColuna>
                            <img src={SecondImage} />
                        </SegundaColuna>
                    </RightContainer>
                </PaiContainer>
            </Container>

            <HomeSegunda />

            <HomeTerceira />
        </>
    )
}

export default Home