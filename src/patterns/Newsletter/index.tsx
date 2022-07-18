import styled from "styled-components";
import Button from "../../components/Inputs/Button";
import Input from "../../components/Inputs/Input";
import Px2vw from "../../utils/Px2vw";

interface NewsletterProps {

}

const Newsletter = (props: NewsletterProps) => {

    const ImageStyle = styled.image`
        content: url('https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/plant.png?raw=true');
        position: absolute;
        height: 526px;
        top: 0;
        z-index: 0;
        margin-top: 40px;
        margin-left: ${Px2vw(450)};
    `

    const Row = styled.div`        
        display: flex;      
        align-items: flex-start;
        justify-content: flex-start;        
        position: absolute;
        z-index: 1;
    `;


    return (
        <>
            <ImageStyle></ImageStyle>
            <Row>
                <Input
                    id={'newsletter'}                    
                    placeholder="Insira seu e-mail"
                    iconWidth={30}
                    type='email'
                    iconUrl="https://raw.githubusercontent.com/lukzfreitas/7-days-of-code-react/b02f304aa60fd638de51bcb3b6a870184969ce01/public/post.svg"
                ></Input>                
            </Row>
        </>
    );
}

export default Newsletter;