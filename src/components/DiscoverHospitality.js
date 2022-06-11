import { Box, Flex, Grid, Link, Text, Image } from "@chakra-ui/react";
import React from "react";

const DiscoverHospitality = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box ml="63px">
        <Text fontSize="32px" fontWeight="700" w="559px">
          NIGERIAN'S PREMIERE HOSPITALITY MONOTECHNIC
        </Text>
        <Text margin="22px 0" fontSize="18px" line-height="25px" >
          Wavecrest College of Hospitality is consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Link
          to="#!"
          background="#021d37"
          padding="1rem 3rem"
          color="#fff"
          fontSize="20px"
          textDecoration="none"
          borderRadius="3px"
          fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
          w="208px"
          height="52px"
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          APPLY NOW
        </Link>
      </Box>

      <Grid gridTemplateColumns="1fr 1fr" margin="50px 63px">
        <Box w="320px" height="214px">
          <Image
            src="assets/Images/workbench.jpg"
            w="100%"
            height="100%"
            p="33px"
            alt="workbench"
          />
        </Box>

        <Box background="#021d37" w="320px" height="214px">
          <Text
            color="#fff"
            fontSize="40px"
            w="100%"
            height="100%"
            textAlign="center"
            p="40px"
          >
            Discover Hospitality
          </Text>
        </Box>

        <Box w="320px" height="214px">
          <Image
            src="assets/Images/img_ny.jpg"
            w="100%"
            height="100%"
            alt="img_ny"
          />
        </Box>

        <Box className="last-pic" w="320px" height="214px">
          <Image
            src="assets/Images/coffee.jpg"
            w="100%"
            height="100%"
            p="33px"
            alt="coffee"
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default DiscoverHospitality;
