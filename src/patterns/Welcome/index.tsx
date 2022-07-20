import Label from "../../components/Typography/Label";
import Paragraph from "../../components/Typography/Paragraph";
import Title from "../../components/Typography/Title";
import Newsletter from "../Newsletter";
import { Column, NewsletterStyle, Row } from "./styled";

interface WelcomeProps {
    prefixTitle: string
    title: string;
    text: string;
}

const Welcome = (props: WelcomeProps) => {
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