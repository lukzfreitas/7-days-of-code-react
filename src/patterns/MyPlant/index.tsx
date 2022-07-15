import styled from "styled-components";
import ImageComponent from "../../components/Image";
import Item from "../../components/Item";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";

interface MyPlantProps {
    prefixTitle: string;
    title: string;
}

const MyPlant = (props: MyPlantProps) => {

    const Row = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;        
    `;

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;        
        padding: 20px;
    `;

    const ItemStyle = styled.div`
        margin-top: 50px;
    `;

    const items = [
        "Escolha suas plantas",
        "Faça seu pedido",
        "Aguarde na sua casa"
    ];

    return (
        <Row>
            <ImageComponent
                src="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/myPlant.png?raw=true"
                alt='minha planta'
                width={500} />
            <Column>
                <Label text={props.prefixTitle} />
                <Title label={props.title} size="medium" />

                {items.map((item) => {
                    return (
                        <ItemStyle>
                            <Item text={item}></Item>
                        </ItemStyle>
                    )
                })}

            </Column>
        </Row>
    );
}

export default MyPlant;