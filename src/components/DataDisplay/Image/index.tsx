import Image from "next/image";

interface ImageProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
}

const ImageComponent = (props: ImageProps) => {
    return (
        <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
    )
}

export default ImageComponent;