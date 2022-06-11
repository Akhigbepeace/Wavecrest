import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import wave1 from "../assets/waveimg.png";
// import wave2 from "../assets/Wavecrest Images 1.jpeg";
// import wave3 from "../assets/Wavecrest Images 2.jpeg";
// import wave4 from "../assets/Wavecrest Images 4.jpg";
import waveVid from "../assets/wavecrestvideo.mp4";
const Showcase = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap="10px">
      <Box bg="blue.400" h="100%">
        <ReactPlayer src={waveVid} autoPlay loop muted></ReactPlayer>
      </Box>
      <Grid templateColumns="1fr 1fr" gap="4">
        <Box bg="gray.400" h="100%">
          <Image
            src={wave1}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image
            src={wave1}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image
            src={wave1}
            alt="Wavecrest Images 1"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image
            src={wave1}
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
