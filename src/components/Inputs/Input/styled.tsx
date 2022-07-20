import styled from "styled-components";

export const InputStyle = styled.input`
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

export const FormControl = styled.div`
        display: flex;
        flex-direction: row;
        height: 70px;
        width: 100%;        
        border: 0;
        border-radius: 4;        
    `;

export const Icon = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-end;  
        padding: 20px;
        background-color: #ffffff;
    `;