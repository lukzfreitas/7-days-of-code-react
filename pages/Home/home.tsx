import styled from "styled-components";
import Header from "../../src/components/Header";
import Newsletter from "../../src/patterns/Newsletter";
import Welcome from "../../src/patterns/Welcome";

interface HomeProps {

};

export const Home = (props: HomeProps) => {

    const Body = styled.body`
        padding: 0;
        margin: 0;         
        background-image: url("https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/background.png?raw=true");        
    `

    return (
        <Body>
            <Header></Header>    
            <Welcome 
                prefixTitle="Sua casa com as"
                title="melhores plantas" 
                text="Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca."/>
            <Newsletter />
        </Body>

    );
};
