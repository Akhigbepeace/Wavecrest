import { Box, Grid, Image, Flex, Text, Heading } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import showcase1 from "assets/Images/Showcase1.png";
import showcase2 from "assets/Images/Showcase2.png";
import showcase3 from "assets/Images/Showcase3.png";
import showcase4 from "assets/Images/Showcase4.png";
import waveVid from "assets/Images/wavevid.mp4";

const showcaseGallery = [
  {
    image: showcase1,
  },
  {
    image: showcase2,
  },
  {
    image: showcase3,
  },
  {
    image: showcase4,
  },
];

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
          pb="25px"
          pl="91px"
          bottom="0"
          right="0"
          position="absolute"
          w="100%"
          h="100%"
        >
          <Heading
            fontSize="60px"
            fontFamily="Dancing Script, cursive"
            fontWeight="400"
          >
            Study In
          </Heading>

          <Text
            fontFamily="Playfair Display"
            fontSize="35px"
            fontWeight="700"
            lineHeight="43px"
            w="600px"
          >
            NIGERIA'S PREMIERE HOSPITALITY MONOTECHNIC
          </Text>
        </Flex>
      </Box>

      <Grid templateColumns="1fr 1fr" gap="8px">
        {showcaseGallery.map((gallery, index) => {
          return (
            <Box h="100%" key={index}>
              <Image
                src={gallery.image}
                alt="Wavecrest Images"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Showcase;
