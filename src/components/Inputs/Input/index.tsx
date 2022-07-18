import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";

interface InputProps {
    id: string;
    value?: string;
    placeholder?: string;
    height?: string;
    width?: string;
    fontSize?: string;
    borderRadius?: number;
    backgroundColor?: string;
    border?: string;
    iconUrl?: string;
    iconWidth?: number;
    type?: "text" | "button" | "checkbox" | "search" | "date" | "email" | "file" | "hidden" | "password" | "submit" | "tel" | "number"
}

const Input = ({
    value = 'ola',
    height = '64px',
    width = '390px',
    fontSize = '16pt',
    borderRadius = 4,
    iconWidth = 40,
    border = '0',
    backgroundColor = '#ffffff',
    ...props
}: InputProps) => {

    const InputStyle = styled.input`
        width: ${width}px;
        height: ${height}px;        
        font-size: ${fontSize}; 
        border: transparent;        
        border-radius: ${borderRadius};
        margin-left: 20px;
        :focus {
            outline-color: transparent;            
        }
        ::placeholder {
            color: #202020;
            opacity: 0.3;
            font-size: 16px;
            line-height: 30px;
            font-weight: 400;
            font-style: normal;
        }
    `;

    const FormControl = styled.form`
        display: flex;
        flex-direction: row;
        height: ${height};
        width: ${width + 60}px;
        background: ${backgroundColor};
        border: ${border};
        border-radius: ${borderRadius};        
    `;

    const Icon = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        margin-left: 20px;
    `;

    const [text, setText] = useState(value);

    const [valid, setValid] = useState(false);

    // useEffect(() => {        
    //     setText(value);
    //     setValid(valid);
    // })

    const handleChangeValue = (event: any) => {        
        setValid(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))
        console.log(valid);
    }

    return (
        <FormControl>
            <Icon>
                <img src={props.iconUrl} alt="icon" width={iconWidth} />
            </Icon>
            <InputStyle
                // value={text}
                id={props.id}
                onChange={e => handleChangeValue(e)}
                placeholder={props.placeholder}
                type={props.type}
            />
            <Button label="Assinar newsletter" size="large" primary={valid}></Button>
        </FormControl>
    );
}

export default Input;