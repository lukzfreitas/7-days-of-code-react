import ImageComponent from "../../components/DataDisplay/Image";
import Item from "../../components/DataDisplay/Item";
import Label from "../../components/Typography/Label";
import Title from "../../components/Typography/Title";
import { Column, ItemStyle, Row } from "./styled";

interface MyPlantProps {
    prefixTitle: string;
    title: string;
    items: string[];
}

const MyPlant = (props: MyPlantProps) => {

    return (
        <Row>
            <ImageComponent
                src="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/myPlant.png?raw=true"
                alt={''}
                width="460px" 
                height="400px"/>
            <Column>
                <Label text={props.prefixTitle} />
                <Title label={props.title} size="medium" />

                {props.items.map((item, index) => {
                    return (
                        <ItemStyle key={index}>
                            <Item text={item}></Item>
                        </ItemStyle>
                    )
                })}

            </Column>
        </Row>
    );
}

export default MyPlant;