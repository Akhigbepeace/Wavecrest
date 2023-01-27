import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
};
const FooterCopywright = (props: Props) => {
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
        {props.text}
      </Text>
    </Box>
  );
};

export default FooterCopywright;
