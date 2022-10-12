/* eslint-disable @next/next/no-img-element */

import { Button } from "../Button/Button";
import { Container, Content, TitleText } from "./styled";

export function SectionOne() {
    return (
        <Container>
            <Content>

                <TitleText>
                    <h1>
                        <span>10 Coisas curiosas </span>que os cachorros fazem.
                        
                    </h1>

                    <div>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old.
                        </p>

                        
                        <Button />
                    </div>
                </TitleText>

                <img src="/images/image2.png" alt=""/>
            </Content>

        </Container>
    )
}