import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

type BannerTypeProps = {
  imageURL: string;
  pageName: string;
};

const PagesBanner = (props: BannerTypeProps) => {
  const { imageURL, pageName } = props;
  return (
<<<<<<< HEAD
    <Box
      h="441px"
      w="100%"
      position="relative"
      display={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "block",
        "2xl": "block",
      }}
    >
=======
    <>
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
      <Image src={imageURL} h="100%" w="100%" objectFit="cover" alt="About" />

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
          fontSize="60px"
          textAlign="center"
          mt="140px"
        >
          {pageName}
        </Text>
      </Box>
<<<<<<< HEAD
    </Box>
=======
    </>
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
  );
};

export default PagesBanner;
