import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FooterCopywright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box>
      <Text
        bg="#021d37"
        py="25px"
        fontWeight="600"
        fontSize={{
          sm: "14px",
          md: "14px",
          lg: "22px",
          xl: "22px",
          "2xl": "22px",
        }}
        lineHeight="30px"
        textAlign="center"
        color="#FFFFFF"
      >
        Wavecrest College {currentYear}. All Rights Reserved
      </Text>
    </Box>
  );
};

export default FooterCopywright;
