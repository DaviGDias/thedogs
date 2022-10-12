import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    width: 378px;
    height: 559px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    border-radius: 4px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`

export const ContentTex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;


export const Title = styled.h3`
    font-weight: 600;
    font-size: 1.5rem;
`;


export const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.5;
`;