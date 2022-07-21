import { useIntl } from "react-intl";
import Card from "../../components/Surfaces/Card";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";
import { Column, Column_3, Row } from "./styled";

interface SaleProps {
    prefixTitle: string;
    title: string;
}

const Sale = (props: SaleProps) => {

    const intl = useIntl();

    const buy = intl.formatMessage({ id: "page.home.buy" })
    const currency = intl.formatMessage({ id: "page.home.currency" })

    return (
        <Column>
            <Label text={props.prefixTitle}></Label>
            <Title label={props.title}></Title>
            <Row>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`${currency} 20,00`}
                        textButton={buy}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`${currency} 20,00`}
                        textButton={buy}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`${currency} 20,00`}
                        textButton={buy}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
            </Row>
            <Row>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`${currency} 20,00`}
                        textButton={buy}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`${currency} 20,00`}
                        textButton={buy}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
                <Column_3>
                    <Card
                        title='Ajuga reptans'
                        subtitle={`${currency} 20,00`}
                        textButton={buy}
                        imgUrl="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/produto-01.png?raw=true"
                    />
                </Column_3>
            </Row>
        </Column>
    );
}

export default Sale;