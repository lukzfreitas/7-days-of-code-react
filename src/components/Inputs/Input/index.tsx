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

const InputStyle = styled.input`
    width: 100%;
    height: 68px;        
    font-size: 16px; 
    border: transparent;        
    border-radius: 4;    
    :focus {
        outline-color: transparent;            
        outline-width: 0;
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

const FormControl = styled.div`
        display: flex;
        flex-direction: row;
        height: 70px;
        width: 100%;        
        border: 0;
        border-radius: 4;        
    `;

const Icon = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        padding: 20px;
        background-color: #ffffff;
    `;


const Input = ({
    value = '',    
    iconWidth = 40,    
    ...props
}: InputProps) => {

    const [text, setText] = useState(value);

    const [valid, setValid] = useState(false);

    const handleChangeValue = (event: any) => {
        setValid(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))
        setText(event.target.value);        
    }

    return (
        <FormControl>
            <Icon>
                <img src={props.iconUrl} alt="icon" width={iconWidth} />
            </Icon>
            <InputStyle
                value={text}                
                onChange={e => handleChangeValue(e)}
                placeholder={props.placeholder}
                type={props.type}
            />
            <Button label="Assinar newsletter" size="large" disabled={!valid} primary={true}></Button>
        </FormControl>
    );
}

export default Input;