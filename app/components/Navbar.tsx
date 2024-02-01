'use client'

import styled from "styled-components";
import Logo from "./Logo";

const NavbarStyled = styled.div`
    width: 100vw;
    padding: 2em;
    background-color: #000;
    box-shadow: 0px 4px 4px var(--red);
`
const ListStyled = styled.ul`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3em;  
    list-style-type: none;
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

const Navbar = () => {
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
            </Container>
        </NavbarStyled>
    );
}

export default Navbar;