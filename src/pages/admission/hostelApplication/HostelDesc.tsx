import { Text } from "@chakra-ui/react";
import React from "react";

const HostelDesc = () => {
  return (
    <Text
      textAlign="justify"
      fontFamily="Manrope"
      fontWeight="400"
      fontSize={{
        sm: "18px",
        md: "24px",
        lg: "24px",
        xl: "24px",
        "2xl": "24px",
      }}
      lineHeight="33px"
      color="#021D37"
      my="24px"
      mr="50px"
    >
      Wavecrest offers accommodation to her students both on campus and off
      campus. The hostel services are outsourced but regulated by the College
    </Text>
  );
};

export default HostelDesc;
