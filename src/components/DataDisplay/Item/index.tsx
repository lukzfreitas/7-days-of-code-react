import Label from "../../Typography/Label";
import { Circle, Row } from "./styled";

interface ItemProps {
    text: string;
}

const Item = (props: ItemProps) => {
    return (
        <Row>
            <Circle></Circle>
            <Label text={props.text}></Label>
        </Row>
    );
}

export default Item;