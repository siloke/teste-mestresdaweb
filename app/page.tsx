'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./breakpoints";
import Form from "./components/Form";
import Logo from "./components/Logo";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    @media (max-width: ${device.laptop}px) {
        flex-direction: column;
    }
`
const LoginWrapper = styled.div`
    width: 50%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${device.laptop}px) {
        width: 100%;
        padding: 2rem;
    }
`
const Background = styled.div`
    height: 100vh;
    width: 50%;
    background-image: linear-gradient(to right, rgb(0, 0, 0, 1), rgba(0, 0, 0, 0.100)),
    url('/static/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: ${device.laptop}px) {
        width: 100%;
        background-image: linear-gradient(to bottom, rgb(0, 0, 0, 1), rgba(0, 0, 0, 0.100)),
        url('/static/background.jpg');
    }
`
const Overlay = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginPage = () => {

    return (
        <>
            <Overlay
            animate={{ opacity: 0, transitionEnd: { display: 'none'} }}
            initial={{  opacity: 1 }} 
            transition={{ ease: "linear", delay: 0.4 }}>
                <Logo />
            </Overlay>
            <Container>
                <LoginWrapper>
                        <Logo />
                    <div>
                        <Form />
                    </div>
                </LoginWrapper>
                <Background>
                </Background>
                <span className="sig">
                Lucas Vidal<br />
                Teste - Mestres da Web &#128640;
                </span>
            </Container>
        </>
    );
}

export default LoginPage;