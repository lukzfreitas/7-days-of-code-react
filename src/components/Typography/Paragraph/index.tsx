import styled from "styled-components";

interface ParagraphProps {
    text: string;
}

const Paragraph = (props: ParagraphProps) => {

    const ParagraphStyle = styled.p`
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        color: #202020;        
        width: 480px;
        opacity: 0.5;        
    `;

    return (
        <ParagraphStyle>
            {props.text}
        </ParagraphStyle>
    )
}

export default Paragraph;