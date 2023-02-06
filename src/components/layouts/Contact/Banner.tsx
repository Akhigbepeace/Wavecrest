import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  const contactpic = "/assets/imgs/aboutDesktopBanner.jpg";
  return (
    <Box h="441px" position="relative">
      <Image
        alt="Banner"
        src={contactpic}
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
          fontFamily="Playfair Display, serif"
          fontWeight="700"
          fontSize={{
            sm: "34px",
            md: "50px",
            lg: "50px",
            xl: "60px",
            "2xl": "60px",
          }}
          textAlign="center"
          mt="242px"
        >
          CONTACT
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
