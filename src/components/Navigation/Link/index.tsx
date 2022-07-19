import { useEffect, useState } from "react";
import styled from "styled-components";

interface LinkProps {
    label: string;
    visited: boolean;
    onClick: Function;
}

const LabelStyled = styled.p((props: { visited: boolean }) => ({
    fontSize: '16pt',
    color: '#202020',
    cursor: props.visited ? 'auto' : 'pointer',
    fontWeight: props.visited ? 'bold' : 'normal',
    ":hover": {
        color: props.visited ? '#202020' : '#8DCE97'
    }
}));

const Link = (props: LinkProps) => {

    const [visitedValue, setVisitedValue] = useState(props.visited);

    useEffect(() => {
        setVisitedValue(props.visited);
    }, [])

    return (
        <LabelStyled visited={visitedValue} onClick={() => props.onClick()}>
            {props.label}
        </LabelStyled>
    );
}

export default Link;