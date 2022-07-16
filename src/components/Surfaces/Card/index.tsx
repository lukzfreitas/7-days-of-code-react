import styled from "styled-components";
import Px2vw from "../../../utils/Px2vw";
import ImageComponent from "../../DataDisplay/Image";
import Button from "../../Inputs/Button";
import Label from "../../Typography/Label";
import Title from "../../Typography/Title";

interface CardProps {
    title: string;
    subtitle: string;
    textButton: string;
    imgUrl: string;
    width?: number;
    height?: number;
    margin?: number;
}

const Card = (props: CardProps) => {

    const Row = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #ffffff;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        width: ${Px2vw(props.width || 450)};
        height: ${props.height || 300};
        margin: 10px;
    `;

    const Column = styled.div`
        display: flex;        
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;      
        margin: ${props.margin || 10};
    `;

    const TitleStyle = styled.div`
        margin-top: 20px;
    `

    const LabelStyle = styled.div`
        margin-top: 10px;
    `

    const ButtonStyle = styled.div`
        margin-top: 30px;   
    `

    return (
        <Row>
            <ImageComponent src={props.imgUrl} />
            <Column>
                <TitleStyle>
                    <Title label={props.title} size="medium" />
                </TitleStyle>
                <LabelStyle>
                    <Label text={props.subtitle} />
                </LabelStyle>
                <ButtonStyle>
                    <Button label="Comprar" primary={false} />
                </ButtonStyle>
            </Column>
        </Row>
    );
}

export default Card;