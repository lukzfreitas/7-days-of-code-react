import Image from "next/image";

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ImageComponent = (props: ImageProps) => {
    return (
        // <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    )
}

export default ImageComponent;