import styled from "styled-components";

interface InputProps {
    placeholder: string;
    height?: string;
    width?: string;
    fontSize?: string;    
    borderRadius?: number;
    backgroundColor?: string;
    border?: string;
    iconUrl?: string;
    iconWidth?: number;
}

const Input = ({
    height = '75px',
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
        width: ${width + 60}px;
        background: ${backgroundColor};
        border: ${border};
        padding: 5px;
        border-radius: ${borderRadius};        
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
                <img src={props.iconUrl} alt="icon" width={iconWidth} />
            </Icon>
            <InputStyle placeholder={props.placeholder}></InputStyle>
        </FormControl>
    );
}

export default Input;