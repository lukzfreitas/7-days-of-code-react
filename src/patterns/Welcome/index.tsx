import styled from "styled-components";
import Paragraph from "../../components/Typography/Paragraph";
import Title from "../../components/Typography/Title";

interface WelcomeProps {
    title: string;
}

const Welcome = (props: WelcomeProps) => {

    const Square = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 585px;
        height: 462px;
    `;

    return (
        <Square>
            <Title label="Melhores Plantas"></Title>
            <Paragraph text="Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca."/>
        </Square>
    )
}

export default Welcome;