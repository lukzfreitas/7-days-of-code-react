import Input from "../../components/Inputs/Input";
import { ImageStyle, Row } from "./styled";

interface NewsletterProps {

}

const Newsletter = (props: NewsletterProps) => {

    return (
        <>
            <ImageStyle />
            <Row>
                <Input
                    id={'newsletter'}
                    placeholder="Insira seu e-mail"                    
                    type='email'
                    iconUrl="https://raw.githubusercontent.com/lukzfreitas/7-days-of-code-react/b02f304aa60fd638de51bcb3b6a870184969ce01/public/post.svg"
                ></Input>
            </Row>
        </>
    );
}

export default Newsletter;