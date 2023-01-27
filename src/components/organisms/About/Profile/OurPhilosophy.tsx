import { Box, Text, Heading, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { ourStands } from "../constants";
import SectionTitle from "./SectionTitle";

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
      <SectionTitle heading="Our Philosophy" subHeading="What We Stand For" />

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
    </Box>
  );
};
OurPhilosophy.Wrapper = styled.div`
  .slick-slide div {
    margin-right: 5px;
  }
`;

export default OurPhilosophy;
