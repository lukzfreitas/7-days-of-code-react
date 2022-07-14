import styled from "styled-components";

interface LabelProps {
    text: string
} 

const Label = (props: LabelProps) => {

    const LabelStyle = styled.div`
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        color: #202020;
        opacity: 0.5;
    `

    return (
        <LabelStyle>
            {props.text}
        </LabelStyle>
    )
}

export default Label;