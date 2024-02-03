'use client'
import styled from "styled-components";
import Logo from "./Logo";
import { useState } from "react";
import { device } from "../breakpoints";
import HamburguerIcon from "./HamburguerIcon";
import { motion } from "framer-motion";

const NavbarStyled = styled.div`
    width: 100vw;
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

    @media ${device.laptop} {
        display: none;
    }
`
const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
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
    
    @media ${device.laptop} {
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
                <Logo />
                <ListStyled>
                    <li><a href="">Personagens</a></li>
                    <li><a href="">Filmes</a></li>
                    <li><a href="">HQs</a></li>
                    <Wrapper>
                        <img src="/profile-picture.png" alt="" />
                        <li><a href="">Sair</a></li>
                    </Wrapper>
                </ListStyled>
                <HamburguerMenu onClick={toggleMenu}>
                    <HamburguerIcon />
                </HamburguerMenu>
            </Container>
            {isToggled &&
                <MobileList animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "linear", delay: 0.3 }}>
                    <MobileListItem><a href="">Personagens</a></MobileListItem>
                    <MobileListItem><a href="">Filmes</a></MobileListItem>
                    <MobileListItem><a href="">HQs</a></MobileListItem>
                </MobileList>
            }
        </NavbarStyled>
    );
}

export default Navbar;