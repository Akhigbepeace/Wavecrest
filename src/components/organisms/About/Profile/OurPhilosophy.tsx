import { Box, Text, Heading, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { ourStands } from "../constants";
import ResponsivePhilosophy from "./ResponsivePhilosophy";

const OurPhilosophy = () => {
  return (
    <Box
      bg="#EBEDEF"
      p={{
        sm: "50px 20px",
        md: "50px 40px",
        lg: "50px",
        xl: "50px 91px",
        "2xl": "50px 91px",
      }}
      w="100%"
      mb="50px"
    >
      <Text
        fontFamily="Manrope"
        fontWeight="400"
        fontSize="24px"
        color="rgba(2, 29, 55, 0.63)"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        Our Philosophy
      </Text>

      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          lineHeight="43px"
          color="#021D37"
        >
          What We Stand For
        </Heading>
      </Box>

      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        mt="30px"
        gridGap="70px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "grid",
          "2xl": "grid",
        }}
      >
        {ourStands.map((ourStand, index) => {
          const textToShow = Array.isArray(ourStand.text)
            ? ourStand.text.map((values, i) => <Box key={i}>{values}</Box>)
            : ourStand.text;

          return (
            <Box key={index}>
              <Heading
                fontFamily="Visual Hollow Script"
                color="#021d37"
                fontSize="55px"
                fontWeight="400"
              >
                {ourStand.heading}
              </Heading>

              <Text
                color="#021d37"
                fontFamily="Manrope"
                fontSize="18px"
                lineHeight="25px"
                fontWeight="400"
              >
                {textToShow}
              </Text>
            </Box>
          );
        })}
      </Grid>
      <ResponsivePhilosophy />
    </Box>
  );
};
OurPhilosophy.Wrapper = styled.div`
  .slick-slide div {
    margin-right: 5px;
  }
`;

export default OurPhilosophy;
