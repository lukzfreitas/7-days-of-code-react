import styled from "styled-components";

interface InputProps {
    placeholder: string;
    height: number;
    width: number;
    fontSize: string;
    borderColor: string;
    border: number;
    borderRadius: number;
    outlineColorFocus: string;
    backgroundColor: string;
    iconUrl: string;
}

const Input = (props: InputProps) => {

    const Input = styled.input`
        width: ${props.width}px;
        height: ${props.height}px;        
        font-size: ${props.fontSize}; 
        border: ${props.border} solid ${props.borderColor};        
        border-radius: ${props.borderRadius};
        margin-left: 60px;
        :focus {
            outline-color: ${props.outlineColorFocus};            
        }
    `;

    const FormControl = styled.form`
        display: flex;
        flex-direction: row;        
        width: ${props.width + 60}px;
        height: ${props.height}px;        
        background: ${props.backgroundColor};
        border: ${props.border} solid ${props.borderColor};        
        border-radius: ${props.borderRadius};        
    `;

    const Image = styled.img`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    return (
        <FormControl>
            <Image src={props.iconUrl} alt="" height={20} width={20}/>
            <Input placeholder={props.placeholder}></Input>
        </FormControl>
    );
}

export default Input;