import styled from "styled-components";

interface TitleProps {
    label: string,
    size?: 'medium' | 'large';
}

const Title = ({
    size = 'large',
    ...props
}: TitleProps) => {
    const TitleStyle = styled.div`
        font-size: ${size == 'large' ? '82px' : '42px'};
        line-height: ${size == 'large' ? '94px' : '48px'};
        font-weight: 900;        
        font-style: normal;
        color: #202020;
    `;

    return (
        <TitleStyle>
            {props.label}
        </TitleStyle>
    )
}

export default Title;