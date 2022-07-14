import styled from "styled-components";
import ImageComponent from "../../components/Image";
import Label from "../../components/Typography/Label";
import Paragraph from "../../components/Typography/Paragraph";
import Title from "../../components/Typography/Title";

interface MyPlantProps {
    prefixTitle: string;
    title: string;
}

const MyPlant = (props: MyPlantProps) => {

    const Row = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;        
    `;

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 585px;
        height: 250px;        
    `;

    return (
        <Row>
            <ImageComponent
                src="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/myPlant.png?raw=true"
                alt='minha planta'
                height={250}
                width={300} />
            <Column>
                <Label text={props.prefixTitle} />
                <Title label={props.title} size="medium" />                
                <Paragraph text=""/>
            </Column>
        </Row>
    );
}

export default MyPlant;