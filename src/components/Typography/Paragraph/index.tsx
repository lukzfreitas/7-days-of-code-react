import ParagraphStyle from "./styled";

interface ParagraphProps {
    text: string;
}

const Paragraph = (props: ParagraphProps) => {
    return (
        <ParagraphStyle>
            {props.text}
        </ParagraphStyle>
    )
}

export default Paragraph;