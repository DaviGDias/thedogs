/* eslint-disable react/jsx-no-undef */
import { Container, ContainerText, Content, TextSubTitle, TitleText, TextP } from "./styled";

export function SectionFour(){
    return(

        <Container>
        <Content>
            <ContainerText id="SectionFour">
                <TitleText>Where does it come from?</TitleText>
                <TextSubTitle>
                    Todas as ferramentas
                    para você criar o seu curso.
                </TextSubTitle>
                <TextP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sagittis tellus,
                    eu congue magna. Vivamus venenatis, nunc et commodo lacinia, est odio blandit nibh, aliquet
                    mollis nunc ipsum id ligula. Aliquam pulvinar porttitor neque non consectetur.
                </TextP>
       
            </ContainerText>

            <img src='/images/SectionFour.png' />
        </Content>
        </Container>
    )
}