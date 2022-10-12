import { Button } from "../Button/Button";
import { Container, ContainerText, Content, Text, TextSubTitle, TitleText } from "./styled";

export function SectionToo() {
    return (
        <Container>
            <Content>
                <ContainerText>
                    <TitleText>Where does it come from?</TitleText>
                    <TextSubTitle>
                       Rottweiler e sua imponência
                    </TextSubTitle>
                    <Text>
                        Rottweiler é uma raça de cães molossos desenvolvida na Alemanha. Criada por açougueiros da região de Rottweil para o trabalho com o gado, logo tornou-se um eficiente cão de guarda e boiadeiro, e cão de tração. Devido à sua utilidade, tornou-se popular em todo o mundo ao decorrer do século XX.
                    </Text>
                    <Button />
                </ContainerText>

                <img src='/images/imagemSection2.png' />
            </Content>
        </Container>
    )
}
