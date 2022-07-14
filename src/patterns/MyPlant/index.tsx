import styled from "styled-components";
import ImageComponent from "../../components/Image";
import Label from "../../components/Typography/Label";
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
        justify-content: flex-start;
        width: 585px;
        height: 462px;
    `;


    return (
        <Row>
            <Column>
                <ImageComponent 
                    src="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/plant.png?raw=true" 
                    alt='minha planta' 
                    height={440} 
                    width={585} />
            </Column>
            <Column>
                <Label text={props.prefixTitle} />
                <Title label={props.title} size="medium" />
            </Column>
        </Row>
    );
}

export default MyPlant;