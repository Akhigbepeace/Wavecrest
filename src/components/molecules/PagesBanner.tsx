import { Box, Text } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";

type BannerTypeProps = {
  imageURL: string;
  pageName: string;
  fontSize?: string;
};

const PagesBanner = (props: BannerTypeProps) => {
  const { imageURL, pageName, fontSize = "60px" } = props;
  return (
    <Box
      h="441px"
      w="100%"
      position="relative"
      display={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "block",
        "2xl": "block",
      }}
    >
      <PeaceImage src={imageURL} h="100%" w="100%" alt="banner" />

      <Box
        bg="rgba(0, 24, 71, 0.5)"
        h="100%"
        w="100%"
        position="absolute"
        bottom="0"
      >
        <Text
          color="white"
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize={fontSize}
          textAlign="center"
          mt="140px"
          textTransform="capitalize"
        >
          {pageName}
        </Text>
      </Box>
    </Box>
  );
};

export default PagesBanner;
