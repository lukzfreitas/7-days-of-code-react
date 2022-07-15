import styled from "styled-components";
import Button from "../../Inputs/Button";
import Label from "../../Typography/Label";
import Title from "../../Typography/Title";

interface CardProps {
    title: string;
    subtitle: string;
    textButton: string;
}

const Card = (props: CardProps) => {

    const CardStyle = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #ffffff;
        width: 380px;
        height: 200px;  
    `;

    return (
        <CardStyle>
            <Title label={props.title} size="medium"/>
            <Label text={props.subtitle}/>
            <Button label="Comprar" primary={false}/>
        </CardStyle>
    );
}

export default Card;