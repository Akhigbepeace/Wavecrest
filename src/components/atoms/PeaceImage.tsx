import { Box, ImageProps } from "@chakra-ui/react";
import Image from "next/legacy/image";

import React from "react";

type PeaceImageProps = ImageProps & {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};
const PeaceImage = (props: PeaceImageProps) => {
  const {
    src,
    alt,
    objectPosition,
    objectFit = "cover",
    w = "100%",
    h = "100%",
    ...others
  } = props;
  return (
    <Box {...others} w={w} h={h} position="relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={objectPosition}
      />
    </Box>
  );
};

export default PeaceImage;
