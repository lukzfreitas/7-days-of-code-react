import styled from "styled-components";
import Card from "../../components/Surfaces/Card";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";

interface SaleProps {
    prefixTitle: string;
    title: string;
}

const Sale = (props: SaleProps) => {

    const Row = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;        
    `

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;        
    `;

    const CardStyle = styled.div`
        margin: 20px;
    `

    return (
        <Column>
            <Label text={props.prefixTitle}></Label>
            <Title label={props.title}></Title>
            <Row>
                <CardStyle>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </CardStyle>
                <CardStyle>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </CardStyle>
                <CardStyle>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </CardStyle>
            </Row>
            <Row>
                <CardStyle>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </CardStyle>
                <CardStyle>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </CardStyle>
                <CardStyle>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </CardStyle>
            </Row>
        </Column>
    );
}

export default Sale;