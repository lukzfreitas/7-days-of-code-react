import styled from "styled-components";
import Label from "../../components/Typography/Label";
import Paragraph from "../../components/Typography/Paragraph";
import Title from "../../components/Typography/Title";
import Newsletter from "../Newsletter";

interface WelcomeProps {
    prefixTitle: string
    title: string;
    text: string;
}

const Welcome = (props: WelcomeProps) => {

    const Row = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;        
    `;

    const Row2 = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: center;        
    `;

    const Image = styled.div`                
        content: url("https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/plant.png?raw=true");        
        height: 700px;
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
                <Label text={props.prefixTitle} />
                <Title label={props.title} />
                <Paragraph text={props.text} />
                <Newsletter />
            </Column>
            <Image></Image>
        </Row>
    )
}

export default Welcome;