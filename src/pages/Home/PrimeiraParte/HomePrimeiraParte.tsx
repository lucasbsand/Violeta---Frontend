import { PaiContainer,LeftContainer,Title,ButtonComecar,RightContainer,Container,Logo } from './HomeStyle'
import { PrimeiraColuna, SegundaColuna } from './HomeStyle'
import LogoImage from '../../../assets/ghost 1.svg'

function HomePrimeira() {
    return (
        <>
            <Container>
                <Logo>
                 <img src={LogoImage}/>
                </Logo>
                <PaiContainer>
                    
                    <LeftContainer>
                        <Title>SE EXPRESSESEM LIMITES</Title>
                        <ButtonComecar>Começar</ButtonComecar>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    </LeftContainer>
                    <RightContainer>
                        <PrimeiraColuna/>
                        <SegundaColuna/>
                    </RightContainer>
                </PaiContainer>
            </Container>
        </>
    )
}

export default HomePrimeira