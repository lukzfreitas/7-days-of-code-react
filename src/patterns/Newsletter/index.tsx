import { useIntl } from "react-intl";
import Input from "../../components/Inputs/Input";
import { ImageStyle, Row } from "./styled";

interface NewsletterProps {

}

const Newsletter = (props: NewsletterProps) => {

    const intl = useIntl();

    const toSignNewsletter = intl.formatMessage({ id: "page.home.toSignNewsletter" })
    const typeYourEmail = intl.formatMessage({ id: "page.home.typeYourEmail" })

    return (
        <>
            <ImageStyle />
            <Row>
                <Input
                    id={'newsletter'}
                    placeholder={typeYourEmail}
                    type='email'
                    iconUrl="https://raw.githubusercontent.com/lukzfreitas/7-days-of-code-react/b02f304aa60fd638de51bcb3b6a870184969ce01/public/post.svg"
                    buttonText={toSignNewsletter}
                ></Input>
            </Row>
        </>
    );
}

export default Newsletter;