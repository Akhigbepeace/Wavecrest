import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

type SectionTitleProp = {
  heading: string;
  subHeading: string;
};
const SectionTitle = ({ heading, subHeading }: SectionTitleProp) => {
  return (
    <>
      <Text
        fontFamily="Manrope"
        fontSize="24px"
        fontWeight="400"
        lineHeight="33px"
        color="rgba(2, 29, 55, 0.63)"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        {heading}
      </Text>

      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Heading
          fontFamily="Playfair Display"
          fontSize="32px"
          fontWeight="400"
          color="#021D37"
          lineHeight="43px"
        >
          {subHeading}
        </Heading>
      </Box>
    </>
  );
};

export default SectionTitle;
