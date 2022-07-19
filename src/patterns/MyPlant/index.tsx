import styled from "styled-components";
import ImageComponent from "../../components/DataDisplay/Image";
import Item from "../../components/DataDisplay/Item";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";

interface MyPlantProps {
    prefixTitle: string;
    title: string;
}

const Row = styled.div`
        display: flex;        
        align-items: flex-start;
        justify-content: flex-start;        
        background-color: #FFFFFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    `;

const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;        
        padding: 20px;        
    `;

const ItemStyle = styled.div`
        margin-top: 40px;
    `;

const MyPlant = (props: MyPlantProps) => {
    
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
                width={460} />
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