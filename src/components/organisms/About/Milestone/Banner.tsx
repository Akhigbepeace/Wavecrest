import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  const about = "pageLayouts/about";

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
      <Image src={about} alt="banner" h="100%" w="100%" objectFit="cover" />

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

        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
