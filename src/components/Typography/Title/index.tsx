import { useEffect, useState } from "react";
import styled from "styled-components";

interface TitleProps {
    label: string,
    size?: 'medium' | 'large';
}

const TitleStyle = styled.div((props: { size: string }) => ({
    fontSize: props.size == 'large' ? '82px' : '42px',
    lineHeight: props.size == 'large' ? '94px' : '48px',
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#202020'
}));

const Title = ({
    size = 'large',
    ...props
}: TitleProps) => {

    const [sizeValue, setSizeValue] = useState(size);

    useEffect(() => {
        setSizeValue(size);
    }, [])

    return (
        <TitleStyle size={sizeValue}>
            {props.label}
        </TitleStyle>
    )
}

export default Title;