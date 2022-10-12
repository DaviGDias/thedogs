import styled from "styled-components"

const Content = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: -4px;

    img{
        width: 100%;
    }
`;


export function SectionTree(){
    return(
        <Content>
            <img src='/images/section3.png' />
        </Content>
    )
}