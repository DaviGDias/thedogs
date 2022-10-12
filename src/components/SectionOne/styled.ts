import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props )=> props.theme['primary']};
    height: 90vh;
`;


export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 4rem 2rem;
    width: 100%;
  
    max-width: 1240px;
    background: ${(props )=> props.theme['primary']};

    img{
        width: 450px;
    }

`;

export const TitleText = styled.div`
    width: 40rem;

    span{
        color: ${(props)=> props.theme['black']}
    }

    h1{
        font-size: 4.25rem;
        color: ${(props) => props.theme['white']};
        font-weight: bold;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    div{
        margin-top: 4rem;
        width: 32rem;
        line-height: 1.5;
    }
`;


