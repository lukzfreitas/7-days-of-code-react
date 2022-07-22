import Input from "../../components/Inputs/Input";
import { ImageStyle, Row } from "./styled";

interface NewsletterProps {
    placeholder: string;
    buttonText: string;
}

const Newsletter = (props: NewsletterProps) => {

    return (
        <>
            <ImageStyle />
            <Row>
                <Input
                    id={'newsletter'}
                    placeholder={props.placeholder}
                    type='email'
                    iconUrl="https://raw.githubusercontent.com/lukzfreitas/7-days-of-code-react/b02f304aa60fd638de51bcb3b6a870184969ce01/public/post.svg"
                    buttonText={props.buttonText}
                ></Input>
            </Row>
        </>
    );
}

export default Newsletter;