import styled from "styled-components";

interface LinkProps {
    label: string;
    visited: boolean;
    onClick: Function;
}

const Link = (props: LinkProps) => {

    const Label = styled.p`
        font-size: 16pt;
        color: #202020;
        cursor: ${props.visited ? 'auto' : 'pointer'};
        font-weight: ${props.visited ? 'bold' : 'nomal'};
        &:hover {
            color: ${props.visited ? '#202020' : '#8DCE97'};
        }
    `;

    return (
        <Label onClick={() => props.onClick()}>{props.label}</Label>
    );
}

export default Link;