import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import showcase1 from "../assets/Images/Showcase1.png";
import showcase2 from "../assets/Images/Showcase2.png";
import showcase3 from "../assets/Images/Showcase3.png";
import showcase4 from "../assets/Images/Showcase4.png";
import waveVid from "../assets/Images/wavevid.mp4";
const Showcase = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap="8px">
      <Box bg="blue.400" h="100%">
        {/* <ReactPlayer
          src="https://www.youtube.com/watch?v=u7JMhVI7taQ"
          autoPlay
          loop
          muted
        ></ReactPlayer> */}
        <ReactPlayer
          url={waveVid}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </Box>
      <Grid templateColumns="1fr 1fr" gap="8px">
        <Box bg="gray.400" h="100%">
          <Image src={showcase1} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image src={showcase2} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image src={showcase3} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
        <Box bg="gray.400" h="100%">
          <Image src={showcase4} alt="Wavecrest Images 1" w="100%" h="100%" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Showcase;
