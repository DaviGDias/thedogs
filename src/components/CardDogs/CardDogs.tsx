/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Container, ContentTex, Paragraph, Title } from "./styled";

interface CardProps {
    card: {
        image: {
            url: string
            alt?: string
        },

        title: string
        content: string
    }
}

export function CardDogs({ card }: CardProps) {

    const { image, title, content } = card
    return (

        <Container>
            <Image src={image.url} />
            <ContentTex>
                <Title>
                    {title}
                </Title>
                <Paragraph>
                    {content}
                </Paragraph>
            </ContentTex>
        </Container>

    )
}