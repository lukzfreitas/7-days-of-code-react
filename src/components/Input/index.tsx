import styled from "styled-components";

interface InputProps {
    placeholder: string;
    height: string;
    width: string;
    fontSize: string;
}

const Input = (props: InputProps) => {

    const Input = styled.input`
        height: ${props.height};
        width: ${props.width};
        font-size: ${props.fontSize};        
    `;

    return (
        <Input placeholder={props.placeholder} height={props.height} width={props.width} />
    );
}

export default Input;