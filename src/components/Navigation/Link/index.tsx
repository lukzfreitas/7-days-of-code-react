import LabelStyled from "./styled";

interface LinkProps {
    label: string;
    visited: boolean;
    onClick: Function;
}

const Link = (props: LinkProps) => {    

    return (
        <LabelStyled visited={props.visited} onClick={() => props.onClick()}>
            {props.label}
        </LabelStyled>
    );
}

export default Link;