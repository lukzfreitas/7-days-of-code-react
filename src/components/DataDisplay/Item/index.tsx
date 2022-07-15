import styled from "styled-components";
import Label from "../../Typography/Label";

interface ItemProps {
    text: string;
}

const Item = (props: ItemProps) => {

    const Row = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    `;

    const Circle = styled.div`
        background: #FFCB47;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin-right: 10px;
    `;

    return (
        <Row>            
            <Circle></Circle>            
            <Label text={props.text}></Label>
        </Row>
    );
}

export default Item;