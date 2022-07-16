import { Box, Flex, Grid, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import discoverpic1 from "assets/Images/discoverpic 1.png";
import discoverpic2 from "assets/Images/discoverpic 2.png";
import discoverpic3 from "assets/Images/discoverpic 3.png";

const DiscoverHospitality = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="421px"
      my="50px"
      px="91px"
    >
      <Box mr="28px" w="500px">
        <Text fontSize="32px" fontWeight="700" fontFamily="Playfair Display">
          NIGERIA'S PREMIERE HOSPITALITY MONOTECHNIC
        </Text>
        <Text
          m="22px 0"
          fontSize="18px"
          lineHeight="25px"
          fontFamily="Manrope"
          textAlign="left"
        >
          Wavecrest College of Hospitality is consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore r magna a h j aliqua. Ut enim
          ad minim veniam, quis nostrud e exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Link
          to="#!"
          background="#021d37"
          w="208px"
          p="10px 26px"
          color="#fff"
          fontSize="20px"
          textDecoration="none"
          borderRadius="3px"
          fontFamily="Manrope"
          h="52px"
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          READ MORE
        </Link>
      </Box>

      <Grid gridTemplateColumns="1fr 1fr"  m="50px 0">
        <Box w="320px" height="214px">
          <Image
            src={discoverpic1}
            w="100%"
            h="100%"
            p="33px"
            alt="workbench"
            objectFit="cover"
          />
        </Box>

        <Box background="#021d37" w="320px" h="214px">
          <Text
            color="#fff"
            fontSize="40px"
            w="100%"
            h="100%"
            textAlign="center"
            fontFamily="Playfair Display"
            p="40px"
          >
            Discover Hospitality
          </Text>
        </Box>

        <Box w="320px" h="214px">
          <Image
            src={discoverpic2}
            w="100%"
            h="100%"
            alt="img_ny"
            objectFit="cover"
          />
        </Box>

        <Box className="last-pic" w="320px" h="214px">
          <Image
            src={discoverpic3}
            w="100%"
            h="100%"
            p="33px"
            alt="coffee"
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default DiscoverHospitality;
