import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import wave1 from "../assets/waveimg.png";
const Showcase = () => {
  return (
    <Grid templateColumns="1fr 1fr" h="388px" gap="10px">
      <Box bg="blue.400" h="100%">
        {/* <video
          src="assets/Images/Study at Wavecrest College of Hospitality, Lagos.mp4"
          autoPlay
          loop
          muted
        ></video> */}
        {/* <AspectRatio maxW="660px" ratio={1}>
          <iframe
            title="naruto"
            src="assets/Images/Study at Wavecrest College of Hospitality, Lagos.mp4"
            allowFullScreen
          />
        </AspectRatio> */}
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
