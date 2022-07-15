import styled from "styled-components";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";

interface SaleProps {
    prefixTitle: string;
    title: string;
}

const Sale = (props: SaleProps) => {

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;        
    `;
    
    return (
        <Column>
            <Label text={props.prefixTitle}></Label>
            <Title label={props.title}></Title>
        </Column>
    );
}

export default Sale;