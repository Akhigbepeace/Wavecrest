import { Box, Grid, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import showcase1 from "assets/Images/Showcase1.png";
import showcase2 from "assets/Images/Showcase2.png";
import showcase3 from "assets/Images/Showcase3.png";
import showcase4 from "assets/Images/Showcase4.png";
import waveVid from "assets/Images/wavevid.mp4";

const Showcase = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap="8px">
      <Box h="100%" position="relative" zIndex="0">
        <ReactPlayer
          url={waveVid}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <Flex
          flexDirection="column"
          justifyContent="end"
          textAlign="left"
          bg="rgba(0,24,71, 0.6)"
          color="white"
          p="49px 60px"
          bottom="0"
          right="0"
          position="absolute"
          w="100%"
          h="100%"
          fontFamily="Playfair Display"
          fontSize="16px"
          fontWeight="700"
        >
          <Text
            fontSize="60px"
            fontFamily="Dancing Script, cursive"
            fontWeight="400"
          >
            Study In
          </Text>
          <Text
            fontFamily="Playfair Display"
            fontSize="30px"
            fontWeight="700"
            lineHeight="53px"
          >
            NIGERIAN'S PREMIERE HOSPITALITY MONOTECHNIC
          </Text>
        </Flex>
      </Box>

      <Grid templateColumns="1fr 1fr" gap="8px">
        <Box h="100%">
          <Image src={showcase1} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
        <Box h="100%">
          <Image src={showcase2} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
        <Box h="100%">
          <Image src={showcase3} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
        <Box h="100%">
          <Image src={showcase4} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Showcase;
