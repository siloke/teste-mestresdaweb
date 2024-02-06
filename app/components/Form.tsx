import Link from "next/link";
import Input from "./Input";
import styled from "styled-components";
import InputSubmit from "./InputSubmit";

const H2 = styled.h2`
    color: var(--red);
    font-size: 1.8rem;
    font-weight: 400;
`
const P = styled.p`
    color: var(--gray-secondary);
    font-size: 1rem;
    font-weight: 400;
`
const Label = styled.label`
    color: var(--gray-secondary);
    font-size: 1rem;
    font-weight: 400;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
`
const Form = () => {
    return (
        <form>
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
            <P>Ainda não tem o login? Cadastre-se</P>
        </form>
    );
}

export default Form;