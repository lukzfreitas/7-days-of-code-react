import styled from "styled-components";
import Label from "../../components/Typography/Label";
import Paragraph from "../../components/Typography/Paragraph";
import Title from "../../components/Typography/Title";

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

    const Image = styled.div`
        /* background-image: url("https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/background.png?raw=true");           */
    `;

    const Square = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 585px;
        height: 462px;
    `;

    return (
        <Row>
            <Square>
                <Label text={props.prefixTitle} />
                <Title label={props.title} />
                <Paragraph text={props.text} />
            </Square>
            <Image></Image>
        </Row>
    )
}

export default Welcome;