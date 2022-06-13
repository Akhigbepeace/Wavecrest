import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import showcase1 from "../assets/Images/Showcase1.png";
import showcase2 from "../assets/Images/Showcase2.png";
import showcase3 from "../assets/Images/Showcase3.png";
import showcase4 from "../assets/Images/Showcase4.png";
import waveVid from "../assets/Images/wavecrestvideo.mp4";
const Showcase = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap="10px">
      <Box bg="blue.400" h="100%">
        <ReactPlayer src={waveVid} autoPlay loop muted></ReactPlayer>
      </Box>
      <Grid templateColumns="1fr 1fr" gap="4">
        <Box bg="gray.400" h="100%">
          <Image
            src={showcase1}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image
            src={showcase2}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image
            src={showcase3}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image
            src={showcase4}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Showcase;
