import ImageComponent from "../../components/DataDisplay/Image";


interface LogoProps {
    imageUrl: string;
    alt: string;
    width: string;
    height: string;
}

const Logo = (props: LogoProps) => {
    return (
        <ImageComponent src={props.imageUrl} alt={props.alt} width={props.width} height={props.height} />
    )
}

export default Logo;