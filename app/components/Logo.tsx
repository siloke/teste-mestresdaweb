import styled from "styled-components";
import localFont from 'next/font/local'

const marvelFont = localFont({ 
    src: '../fonts/MarvelRegular-Dj83.ttf',
    weight: '600',
})

const LogoStyled = styled.h1`
    padding: 0.5rem 1rem;
    display: inline;
    font-size: 3rem;
    text-transform: uppercase;
    background-color: var(--red);
    color: var(--white);
`
const Logo = () => {
    return ( 
        <LogoStyled className={marvelFont.className}>
            MARVEL
        </LogoStyled>
    );
}
 
export default Logo;