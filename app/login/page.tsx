'use client'
import styled from "styled-components";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Link from "next/link";
import Form from "../components/Form";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const LoginWrapper = styled.div`
    width: 50%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Background = styled.div`
    height: 100vh;
    width: 50%;
    background-image: linear-gradient(to right, rgb(0, 0, 0, 1), rgba(0, 0, 0, 0.100)),
    url('/static/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const LoginPage = () => {
    return (
        <>
            <Container>
                <LoginWrapper>
                    <div>
                        <Logo />
                        <Form />
                    </div>
                </LoginWrapper>
                <Background>

                </Background>
            </Container>
        </>
    );
}

export default LoginPage;