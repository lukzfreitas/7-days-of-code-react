import Label from "../../components/Typography/Label";
import Paragraph from "../../components/Typography/Paragraph";
import Title from "../../components/Typography/Title";
import Newsletter from "../Newsletter";
import { Column, NewsletterStyle, Row } from "./styled";

interface WelcomeProps {
    prefixTitle: string
    title: string;
    text: string;
    placeholderNewsletter: string;
    buttonTextNesletter: string;
}

const Welcome = (props: WelcomeProps) => {
    return (
        <Row>
            <Column>
                <Label text={props.prefixTitle} />
                <Title label={props.title} />
                <Paragraph text={props.text} />
                <NewsletterStyle>
                    <Newsletter
                        buttonText={props.buttonTextNesletter}
                        placeholder={props.placeholderNewsletter}
                    />
                </NewsletterStyle>
            </Column>
        </Row>
    )
}

export default Welcome;