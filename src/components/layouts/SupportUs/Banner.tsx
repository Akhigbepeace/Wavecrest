import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  const admission = "/assets/imgs/Admission.png";
  return (
    <Box h="441px" w="100%" gridGap="68px" position="relative">
      <Image
        src={admission}
        h="100%"
        w="100%"
        objectFit="cover"
        alt="Admission"
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
          fontSize={{
            sm: "34px",
            md: "50px",
            lg: "50px",
            xl: "60px",
            "2xl": "60px",
          }}
          textAlign="center"
          mt="140px"
        >
         
        </Text>
      </Box>
    </Box>
  );
};

export default Banner;
