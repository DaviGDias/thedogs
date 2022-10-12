/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */


import Link from "next/link";
import { useState } from "react";
import { ContainerHeader, ContentHeader, MobileIcon, NavContainer, NavLink } from "./styles";
import { FaBars, FaTimes } from 'react-icons/fa'


export function Header() {

    const [isOpen, setOpen] = useState(false)

    function handleOpenMenu() {
        setOpen(!isOpen)
    }
    return (
        <ContainerHeader>
            <ContentHeader>
                <img src="/images/Logo.svg" alt='' />


                <MobileIcon onClick={handleOpenMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </MobileIcon>

                <NavContainer open={isOpen}>

                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink id='SectionFour'>
                        Sobre
                    </NavLink>
                    <NavLink>
                        Contato
                    </NavLink>

                </NavContainer>
            </ContentHeader>
        </ContainerHeader>
    )
}
