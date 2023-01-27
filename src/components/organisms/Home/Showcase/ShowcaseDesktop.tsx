import React from "react";

import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/react";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { ShowcaseProps } from "./types";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const ShowcaseDesktop = (props: ShowcaseProps) => {
  const { gallery, videoURL, topText, bottomText } = props;
  return (
    <Grid
      display={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "grid",
        "2xl": "grid",
      }}
      templateColumns="1fr 1fr"
      gap="8px"
    >
      <VideoHolder>
        <Box
          h="381px"
          w="100%"
          position="relative"
          zIndex="0"
          className="react-holder"
        >
          <ReactPlayer
            url={videoURL}
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
              fontFamily="Visual Hollow Script"
              fontWeight="400"
            >
              {topText}
            </Heading>

            <Text
              fontFamily="Playfair Display"
              fontSize="35px"
              fontWeight="700"
              lineHeight="43px"
              w={{
                "2xl": "600px",
              }}
            >
              {bottomText}
            </Text>
          </Flex>
        </Box>
      </VideoHolder>
      <Grid templateColumns="1fr 1fr" gap="8px">
        {gallery.map((gallery, index) => {
          return (
            <Box key={index} h="187px" position={"relative"}>
              <Image
                src={gallery}
                alt="Wavecrest Images"
                layout="fill"
                objectFit="cover"
                objectPosition="center 20%"
              />
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

const VideoHolder = styled.div`
  video {
    object-fit: cover;
  }
`;

export default ShowcaseDesktop;
