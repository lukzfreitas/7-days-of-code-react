import styled from "styled-components";

interface InputProps {
    placeholder: string;
    height: number;
    width: number;
    fontSize: string;
    borderColor: string;    
    borderRadius: number;    
    backgroundColor: string;
    border: string;
    iconUrl: string;
    iconWidth: number;
    iconHeight: number;
}

const Input = (props: InputProps) => {

    const Input = styled.input`
        width: ${props.width}px;
        height: ${props.height}px;        
        font-size: ${props.fontSize}; 
        border: transparent;        
        border-radius: ${props.borderRadius};
        margin-left: 20px;
        :focus {
            outline-color: transparent;            
        }
    `;

    const FormControl = styled.form`
        display: flex;
        flex-direction: row;        
        width: ${props.width + 60}px;
        height: ${props.height}px;        
        background: ${props.backgroundColor};
        border: ${props.border};
        padding: 5px;
        border-radius: ${props.borderRadius};        
    `;

    const Icon = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        margin-left: 20px;
    `    

    return (
        <FormControl>
            <Icon>
                <img src={props.iconUrl} alt="icon" height={props.iconHeight} width={props.iconWidth} />
            </Icon>
            <Input placeholder={props.placeholder}></Input>
        </FormControl>
    );
}

export default Input;