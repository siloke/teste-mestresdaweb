import styled from "styled-components";

const InputSubmitStyled = styled.input`
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: var(--red);
    color: var(--white);
    font-size: 1rem;
    padding: 1.5rem;
    cursor: pointer;
    margin: 1rem 0;
`

interface InputSubmitProps {
    value: string,
}

const InputSubmit = ({ value }: InputSubmitProps) => {
    return (
        <InputSubmitStyled type="submit" value={value} />
    );
}

export default InputSubmit;