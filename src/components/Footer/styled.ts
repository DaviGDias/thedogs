import styled  from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    background: ${(props) => props.theme['black-900']};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;

    img{
        width: 200px;
    }

`;

export const Content = styled.div`
    width:500px ;
    display: flex;
    padding: 1rem 0 ;
    align-items: center;
    justify-content: center;


    p{
        color: white;
    }

`;