import Card from "../../components/Surfaces/Card";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";
import { Column, Column_3, Row } from "./styled";

interface SaleProps {
    prefixTitle: string;
    title: string;    
    buttonText: string;
}

const Sale = (props: SaleProps) => {
    

    return (
        <Column>
            <Label text={props.prefixTitle}></Label>
            <Title label={props.title}></Title>
            <Row>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`R$ 20,00`}
                        textButton={props.buttonText}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`R$ 20,00`}
                        textButton={props.buttonText}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`R$ 20,00`}
                        textButton={props.buttonText}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
            </Row>
            <Row>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`R$ 20,00`}
                        textButton={props.buttonText}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`R$ 20,00`}
                        textButton={props.buttonText}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`R$ 20,00`}
                        textButton={props.buttonText}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
            </Row>
        </Column>
    );
}

export default Sale;