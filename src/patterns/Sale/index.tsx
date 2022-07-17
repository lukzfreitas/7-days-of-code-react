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

    const Column_3 = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 33%;
        margin: 10px;
    `

    return (
        <Column>
            <Label text={props.prefixTitle}></Label>
            <Title label={props.title}></Title>
            <Row>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>                
            </Row>
            <Row>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle='R$ 20,00'
                        textButton='Comprar'
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>                
            </Row>
        </Column>
    );
}

export default Sale;