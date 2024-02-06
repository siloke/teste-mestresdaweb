import styled from "styled-components";

const TextField = styled.input`
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: var(--white);
    color: var(--gray);
    font-size: 1rem;
    padding: 1.5rem;
    margin-top: 1rem;
`

interface InputProps {
    placeholder?: string
}

const Input = ({ placeholder }: InputProps) => {
    return (
        <TextField type="text" placeholder={placeholder} />
    );
}

export default Input;