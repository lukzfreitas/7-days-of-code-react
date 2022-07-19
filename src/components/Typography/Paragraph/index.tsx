import styled from "styled-components";

interface ParagraphProps {
    text: string;
}

const ParagraphStyle = styled.p`
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        color: #202020;        
        width: 480px;
        opacity: 0.5;        
    `;

const Paragraph = (props: ParagraphProps) => {
    return (
        <ParagraphStyle>
            {props.text}
        </ParagraphStyle>
    )
}

export default Paragraph;