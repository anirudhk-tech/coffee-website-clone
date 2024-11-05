import React from "react";
import Image from "next/image";

interface ImageProps {
    src?: string;
    alt: string;
    width?: number;
    height?: number;
}

const NextImage: React.FC<ImageProps> = ({
    src = "https://via.placeholder.com/150", 
    alt, 
    width, 
    height,
}) => <Image src={src} alt={alt} width={width} height={height}/>;

export default NextImage;