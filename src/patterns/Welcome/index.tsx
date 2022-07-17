import styled from "styled-components";
import ImageComponent from "../../components/DataDisplay/Image";
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

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 585px;
        height: 462px;
    `;

    const NewsletterStyle = styled.div`
        height: 75px;
    `;

    return (
        <Row>
            <Column>
                <Label text={props.prefixTitle} />
                <Title label={props.title} />
                <Paragraph text={props.text} />
                <NewsletterStyle>
                    <Newsletter />
                </NewsletterStyle>
            </Column>            
        </Row>
    )
}

export default Welcome;