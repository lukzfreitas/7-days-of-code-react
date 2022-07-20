import ImageComponent from "../../DataDisplay/Image";
import Button from "../../Inputs/Button";
import Label from "../../Typography/Label";
import Title from "../../Typography/Title";
import { ButtonStyle, Column, LabelStyle, Row, TitleStyle } from "./styled";

interface CardProps {
    title: string;
    subtitle: string;
    textButton: string;
    imgUrl: string;
    width?: string;
    height?: string;
    margin?: number;
}

const Card = ({
    width = '100%',
    height = '100%',
    margin = 10,
    ...props
}: CardProps) => {    

    return (
        <Row width={width} height={height} >
            <ImageComponent src={props.imgUrl} width="500px" height="700px" />
            <Column margin={margin}>
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