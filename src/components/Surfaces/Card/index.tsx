import styled from "styled-components";
import ImageComponent from "../../DataDisplay/Image";
import Button from "../../Inputs/Button";
import Label from "../../Typography/Label";
import Title from "../../Typography/Title";

interface CardProps {
    title: string;
    subtitle: string;
    textButton: string;
    imgUrl: string;
    width?: string;
    height?: string;
    margin?: number;
}

const Row = styled.div((props: { height: string, width: string }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06)',
    width: props.width || '100%',
    height: props.height || '100%',
}));

const Column = styled.div((props: { margin: number }) => ({
    display: "flex",
    flexFlow: "column", // check if flexFlow works like flexDiretion    
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: props.margin,
}))

const TitleStyle = styled.div(({
    marginTop: '20px'
}));

const LabelStyle = styled.div(({
    marginTop: '10px'
}));

const ButtonStyle = styled.div(({
    marginTop: '30px'
}))

const Card = ({
    width = '100%',
    height = '100%',
    margin = 10,
    ...props
}: CardProps) => {
    return (
        <Row width={width} height={height} >
            <ImageComponent src={props.imgUrl} />
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