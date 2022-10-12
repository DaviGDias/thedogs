
import { LinkProps } from "next/link";
import styled from "styled-components";



export const NavButonLink = styled.a<LinkProps>`
border-radius: 4px;
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
width: 400px;
background: black;
cursor: pointer;

font-weight: 700;
color: white;

text-decoration: none;
transition: all 0.5s;

&:hover{
    background: ${(props) => props.theme['black-900']};
}
`