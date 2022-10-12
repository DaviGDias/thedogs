import styled from "styled-components";

export const Container = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${(props) => props.theme['orange-100']};
    height: 90vh;
`;

export const Content = styled.div`
    margin-top: 4rem;
    width: 100%;
    max-width: 1240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerText = styled.div`
    width: 500px;
    max-width: 1240px;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    


`;

export const TitleText = styled.h1`
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.theme['primary']};
`;

export const TextSubTitle = styled.h2`
    margin-top: 1rem;
    font-weight: 500;
`;

export const TextP = styled.p`
margin-top: 2rem;
margin-bottom: 1rem;
line-height: 1.5;
`;
