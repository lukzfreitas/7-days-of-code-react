import ImageComponent from "../../components/Image";


interface LogoProps {
    imageUrl: string;
    alt: string;
    width: number;
    height: number;
}

const Logo = (props: LogoProps) => {
    return (
        <ImageComponent src={props.imageUrl} alt={props.alt} width={props.width} height={props.height} />
    )
}

export default Logo;