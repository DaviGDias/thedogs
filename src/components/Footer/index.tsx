import { Container, Content, FooterContainer } from "./styled";

export function Footer(){
    return(
        <FooterContainer>
            <Container>
                <img src='/images/LogoFooter.svg' />

                <Content>
                  <p>@ 2022 THE DOGS Todos os direitos reservados.</p>
                </Content>
            </Container>
        </FooterContainer>
    )
}