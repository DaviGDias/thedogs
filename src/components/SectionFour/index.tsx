/* eslint-disable react/jsx-no-undef */
import { Container, ContainerText, Content, TextSubTitle, TitleText, TextP } from "./styled";

export function SectionFour(){
    return(

        <Container>
        <Content>
            <ContainerText id="SectionFour">
                <TitleText>Where does it come from?</TitleText>
                <TextSubTitle>
                    Filhote de Labrador
                </TextSubTitle>
                <TextP>
                    O filhote de Labrador é energia pura! A raça, que é conhecida por seu companheirismo e hiperatividade, adora uma boa brincadeira e está sempre em busca de aventuras. 
                </TextP>
       
            </ContainerText>

            <img src='/images/SectionFour.png' />
        </Content>
        </Container>
    )
}
