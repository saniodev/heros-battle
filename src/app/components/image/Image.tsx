import React from "react";
import Image, { ImageProps } from "next/image";

const ImageComponent: React.FC<ImageProps> = ({ ...props }) => {
  return <Image {...props} width={131} height={40} />;
};

export default ImageComponent;
