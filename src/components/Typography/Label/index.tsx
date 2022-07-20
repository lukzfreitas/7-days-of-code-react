import LabelStyle from "./styled";

interface LabelProps {
    text: string
}

const Label = (props: LabelProps) => {

    return (
        <LabelStyle>
            {props.text}
        </LabelStyle>
    )
}

export default Label;