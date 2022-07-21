import styled from "styled-components";

interface PropsAlign {
    verticalAlign: "center" | "flex-start" | "flex-end",
    horizontalAlign: "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
}

export const Row = styled.div((props: PropsAlign) => ({
    display: "flex",
    flexFlow: 'row',
    alignItems: props.verticalAlign,
    justifyContent: props.horizontalAlign,
}));

export const Column = styled.div((props: PropsAlign) => ({
    display: "flex",    
    flexFlow: "column",
    alignItems: props.horizontalAlign,
    justifyContent: props.verticalAlign,    
}));