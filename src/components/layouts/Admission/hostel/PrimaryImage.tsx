import { Box, Image } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";

const PrimaryImage = () => {
  const hostel3 = "/assets/imgs/hostel3.jpg";

  return (
    <Box w="100%">
      <PeaceImage
        src={hostel3}
        alt="hostel-primary-image"
        h={{
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "323px",
          "2xl": "323px",
        }}
        w="481px"
        borderRadius="5px"
        mt="30px"
        mr="30px"
      />
    </Box>
  );
};

export default PrimaryImage;
