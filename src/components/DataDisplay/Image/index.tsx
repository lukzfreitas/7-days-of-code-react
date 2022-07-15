interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

const ImageComponent = (props: ImageProps) => {
    return (
        <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
    )
}

export default ImageComponent;