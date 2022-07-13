import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

interface NewsletterProps {

}

const Newsletter = (props: NewsletterProps) => {

    const Row = styled.div`        
        display: flex;      
        align-items: flex-start;
        justify-content: flex-start;      
    `;

    return (
        <Row>
            <Input
                height={62}                
                placeholder="Insira seu e-mail"
                iconWidth={30}
                iconUrl="https://raw.githubusercontent.com/lukzfreitas/7-days-of-code-react/b02f304aa60fd638de51bcb3b6a870184969ce01/public/post.svg"
            ></Input>
            <Button label="Assinar newsletter" size="large" primary={true}></Button>
        </Row>
    );
}

export default Newsletter;