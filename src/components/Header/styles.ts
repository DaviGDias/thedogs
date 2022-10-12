import { LinkProps } from "next/link";
import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%;
    height: 90px;
    background: ${(props) => props.theme['white']};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    position: fixed;

`;

export const ContentHeader = styled.div`
    width:100%;
    max-width: 1240px;;
    display:flex ;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;


    img{
        width: 100px;
    }

`;

interface isOpenProps {
    open: boolean
}

export const NavContainer = styled.nav<isOpenProps>`
   display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;

    @media screen and (max-width: 800px){
        border-top: 1px solid ${(props) => props.theme['black-800']};
        background: ${(props) => props.theme['black-100']};
        flex-direction: column;
        position: absolute;
        justify-content: center;
        align-items: center;
        left: ${({open}) => open ? '0' : '-100%' };
        width: 100%;
        height: 80vh;
        top: 90px;
        gap: 1rem;
        transition: 0.5s all ease;
    
    }
   
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const NavLink = styled.a`
        color: ${(props) => props.theme['black']};
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s all ease-in;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        text-decoration: none;
        
       
       
        &:hover{
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            color: ${(props) => props.theme['primary']};
            border-bottom: 2px solid ${(props) => props.theme['primary']};
        }

`;

