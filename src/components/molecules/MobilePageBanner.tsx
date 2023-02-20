import { Box, Text } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";

type MobilePageBannerProps = {
  imageURL: string;
  title: string;
};

const MobilePageBanner = (props: MobilePageBannerProps) => {
  const { imageURL, title } = props;
  return (
    <Box
      h="441px"
      w="100%"
      gridGap="68px"
      position="relative"
      display={{
        sm: "block",
        md: "block",
        lg: "block",
        xl: "none",
        "2xl": "none",
      }}
    >
      <PeaceImage
        src={imageURL}
        alt="banner"
        h="100%"
        w="100%"
        objectFit="cover"
      />

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
          fontSize="40px"
          textAlign="center"
          mt="250px"
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default MobilePageBanner;
