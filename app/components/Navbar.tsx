'use client'
import styled from "styled-components";
import Logo from "./Logo";
import { useState } from "react";
import { device } from "../breakpoints";
import HamburguerIcon from "./HamburguerIcon";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarStyled = styled.div`
    // height: 20vh;
    width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    background-color: #000;
    box-shadow: 0px 4px 4px var(--red);
    padding: 1rem 0;
`
const ListStyled = styled.ul`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3em;  
    list-style-type: none;

    @media (max-width: ${device.laptop}px) {
        display: none;
    }
`
const Container = styled.div`
    max-width: 1440px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const HamburguerMenu = styled.span`
    display: none;
    cursor: pointer;
    
    @media (max-width: ${device.laptop}px) {
       display: block;
    }
`

const MobileList = styled(motion.ul)`
    max-width: 90%;
    margin: 20px auto;
    font-size: 1.5rem;
`
const MobileListItem = styled.li`
    margin-top: 1rem;

    
`

const Navbar = (): JSX.Element => {
    const [isToggled, setisToggled] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setisToggled(!isToggled);
    }

    return (
        <NavbarStyled>
            <Container>
                <Link href="/"><Logo /></Link>
                <ListStyled>
                    <li><Link href="/personagens">Personagens</Link></li>
                    <li><Link href="/filmes">Filmes</Link></li>
                    <li><Link href="/HQs">HQs</Link></li>
                    <Wrapper>
                        <img src="/static/profile-picture.png" alt="" />
                        <li><Link href="/">Sair</Link></li>
                    </Wrapper>
                </ListStyled>
                <HamburguerMenu onClick={toggleMenu}>
                    <HamburguerIcon />
                </HamburguerMenu>
            </Container>
            {isToggled &&
                <MobileList animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "linear", delay: 0.3 }}>
                    <MobileListItem><Link href="/personagens">Personagens</Link></MobileListItem>
                    <MobileListItem><Link href="/filmes">Filmes</Link></MobileListItem>
                    <MobileListItem><Link href="/HQs">HQs</Link></MobileListItem>
                    <MobileListItem><Link href="/">Sair</Link></MobileListItem>
                </MobileList>
            }
        </NavbarStyled>
    );
}

export default Navbar;