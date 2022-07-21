import { useState } from "react";
import ImageComponent from "../../DataDisplay/Image";
import Button from "../Button";
import { FormControl, Icon, InputStyle } from "./styled";

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
    iconWidth?: string;
    iconHeight?: string;
    type?: "text" | "button" | "checkbox" | "search" | "date" | "email" | "file" | "hidden" | "password" | "submit" | "tel" | "number"
    buttonText?: string;
}


const Input = ({
    value = '',
    iconWidth = '40px',
    iconHeight = '40px',
    buttonText = '',
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
            {props.iconUrl ? <Icon>
                <ImageComponent src={props.iconUrl} alt="icon" width={iconWidth} height={iconHeight} />
            </Icon> : null}
            <InputStyle
                value={text}
                onChange={e => handleChangeValue(e)}
                placeholder={props.placeholder}
                type={props.type}
            />
            <Button label={buttonText} size="large" disabled={!valid} primary={true}></Button>
        </FormControl>
    );
}

export default Input;