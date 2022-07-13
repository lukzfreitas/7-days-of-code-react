import styled from "styled-components";

interface TitleProps {
    label: string,
    size?: 'medium' | 'large';
}

const Title = ({
    size = 'large',
    ...props
}: TitleProps) => {
    const TitleStyle = styled.h1`
        font-size: ${size == 'large' ? '82px' : '32px'};
        font-weight: bold;
        color: #202020;
    `;

    return (
        <TitleStyle>
            {props.label}
        </TitleStyle>
    )
}

export default Title;