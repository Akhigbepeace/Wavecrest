import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import SectionTitle from "./SectionTitle";

const OurStory = () => {
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
        <SectionTitle heading="Our Story" subHeading="Who We Are" />

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
          Wavecrest College of Hospitality is a private Monotechnic located in
          Lagos, Nigeria. The Institution has been involved with the development
          of Hospitality Education since 1974. It is a project of Women’s Board
          – Education Co-operation Society, a Nigerian, Not-for profit
          organization for the development of the Girl Child.
          <br />
          <br />
          The focus of the College is targeted towards capable young women
          interested in making a career in the Hospitality Industry. The
          students pay a subsidized tuition fee which covers only about 25% of
          the operation costs of the College.
          <br />
          <br />
          For more than 40 years, over 2,500 graduates have successfully
          benefitted from the all-round education received from the College. Our
          graduates are guaranteed quality Education, Employment and Economic
          Independence.
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
        <ReactPlayer
          url={waveVid}
          playing
          controls
          loop
          width="100%"
          height="100%"
        />
      </Box>
    </Flex>
  );
};

export default OurStory;
