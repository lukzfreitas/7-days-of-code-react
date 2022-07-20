import TitleStyle from "./styled";

interface TitleProps {
    label: string,
    size?: 'medium' | 'large';
}

const Title = ({
    size = 'large',
    ...props
}: TitleProps) => {

    return (
        <TitleStyle size={size}>
            {props.label}
        </TitleStyle>
    )
}

export default Title;