import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

const AppImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop: any) =>
    ["width", "height", "src", "alt"].includes(prop),
});

export default AppImage;
