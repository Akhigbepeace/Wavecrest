import { Image } from "@chakra-ui/react";
import React from "react";

const PrimaryImage = () => {
  const hostel3 = "/assets/imgs/hostel3.jpg";

  return (
    <Image
      src={hostel3}
      alt="hostel-primary-image"
      w="100%"
      h="323px"
      objectFit="contain"
      borderRadius="5px"
      mt="30px"
      mr="30px"
    />
  );
};

export default PrimaryImage;
