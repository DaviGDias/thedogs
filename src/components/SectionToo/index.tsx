import { Button } from "../Button/Button";
import { Container, ContainerText, Content, Text, TextSubTitle, TitleText } from "./styled";

export function SectionToo() {
    return (
        <Container>
            <Content>
                <ContainerText>
                    <TitleText>Where does it come from?</TitleText>
                    <TextSubTitle>
                        Todas as ferramentas
                        para você criar o seu curso.
                    </TextSubTitle>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac sagittis tellus,
                        eu congue magna. Vivamus venenatis, nunc et commodo lacinia, est odio blandit nibh, aliquet
                        mollis nunc ipsum id ligula. Aliquam pulvinar porttitor neque non consectetur.
                    </Text>
                    <Button />
                </ContainerText>

                <img src='/images/imagemSection2.png' />
            </Content>
        </Container>
    )
}