import { Flex, Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import SectionTitle from "./SectionTitle";

export type OurStoryProps = {
  heading: string;
  subHeading: string;
  body: string;
};
const OurStory = (props: OurStoryProps) => {
  const { heading, subHeading, body } = props;
  const brokenParagraphs = body.split("\n");
  const waveVid = "/assets/imgs/wavevid.mp4";
  return (
    <Flex
      bg="#FFF"
      p="50px 0"
      alignItems="center"
      justifyContent="center"
      px={{
        sm: "20px",
        md: "40px",
        lg: "50px",
        xl: "91px",
        "2xl": "91px",
      }}
      display={{
        sm: "block",
        md: "block",
        lg: "flex",
        xl: "flex",
        "2xl": "flex",
      }}
    >
      <Box
        w={{
          sm: "none",
          md: "none",
          lg: "55%",
          xl: "55%",
          "2xl": "55%",
        }}
        mr={{
          sm: "none",
          md: "none",
          lg: "60px",
          xl: "60px",
          "2xl": "60px",
        }}
      >
        <SectionTitle heading={heading} subHeading={subHeading} />

        <Text
          fontFamily="Manrope"
          fontWeight="400"
          lineHeight="25px"
          color="#021D37"
          mt="15px"
          textAlign="justify"
          fontSize={{
            sm: "16px",
            md: "16px",
            lg: "16px",
            xl: "18px",
            "2xl": "18px",
          }}
        >
          {brokenParagraphs.map((para, index) => {
            if (para.trim() === "") return <br key={index} />;
            return <Fragment key={index}>{para}</Fragment>;
          })}
        </Text>
      </Box>

      <Box
        h="10%"
        mt={{
          sm: "25px",
          md: "25px",
          lg: "25px",
          xl: "none",
          "2xl": "none",
        }}
        w={{
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "50%",
          "2xl": "50%",
        }}
      >
        <ReactPlayer url={waveVid} controls loop width="100%" height="100%" />
      </Box>
    </Flex>
  );
};

export default OurStory;
