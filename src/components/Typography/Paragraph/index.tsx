import styled from "styled-components";

interface ParagraphProps {
    text: string;
}

const Paragraph = (props: ParagraphProps) => {

    const ParagraphStyle = styled.p`
        font-size: 16px;
        color: #202020;
    `;

    return (
        <ParagraphStyle>
            {props.text}
        </ParagraphStyle>
    )
}

export default Paragraph;