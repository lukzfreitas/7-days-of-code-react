import styled from "styled-components";
import Header from "../../src/components/Header";
import Input from "../../src/components/Input";
import Newsletter from "../../src/patterns/Newsletter";

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
            
            <Newsletter></Newsletter>
        </Body>

    );
};
