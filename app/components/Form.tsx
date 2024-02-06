import Link from "next/link";
import Input from "./Input";
import styled from "styled-components";
import InputSubmit from "./InputSubmit";
import { device } from "../breakpoints";

const H2 = styled.h2`
    color: var(--red);
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 1rem;

    @media (max-width: ${device.mobile}px) {
        font-size: 1.4rem;
    }
`
const P = styled.p<{ $textAlign?: string}>`
    color: var(--gray-secondary);
    font-size: 1rem;
    font-weight: 400;
    text-align: ${(props) => props.$textAlign ? props.$textAlign : 'none'};

    @media (max-width: ${device.mobile}px) {
        font-size: 0.8rem;
    }
`
const Label = styled.label`
    color: var(--gray-secondary);
    font-size: 1rem;
    font-weight: 400;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`
const RedTag = styled.span`
    color: var(--red);
`

const Form = () => {
    return (
        <form action="/personagens">
            <H2>Bem vindo(a) de volta!</H2>
            <P>Acesse sua conta</P>
            <Input placeholder="Usuário" />
            <Input placeholder="Senha" />
            <Flex>
                <div>
                    <input type="checkbox" id="salvarLogin" />
                    <Label htmlFor="salvarLogin"> Salvar login</Label>
                </div>
                <Link href="#"><P>Esqueci a senha</P></Link>
            </Flex>
            <InputSubmit value="Entrar" />
            <P $textAlign="center">Ainda não tem o login? <Link href="#"><RedTag>Cadastre-se</RedTag></Link></P>
        </form>
    );
}

export default Form;