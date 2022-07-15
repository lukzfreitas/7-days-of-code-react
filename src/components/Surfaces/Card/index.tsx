import styled from "styled-components";
import ImageComponent from "../../DataDisplay/Image";
import Button from "../../Inputs/Button";
import Label from "../../Typography/Label";
import Title from "../../Typography/Title";

interface CardProps {
    title: string;
    subtitle: string;
    textButton: string;
}

const Card = (props: CardProps) => {

    const Row = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #ffffff;
        width: 380px;
        height: 200px;  
    `;

    const Column = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #ffffff;
        width: 380px;
        height: 200px;  
    `;

    return (
        <Row>
            <ImageComponent src=""/>
            <Column>
                <Title label={props.title} size="medium" />
                <Label text={props.subtitle} />
                <Button label="Comprar" primary={false} />
            </Column>
        </Row>
    );
}

export default Card;