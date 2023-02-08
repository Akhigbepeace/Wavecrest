import { Box, Text, Heading, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { Fragment } from "react";
import ResponsivePhilosophy from "./ResponsivePhilosophy";
import SectionTitle from "./SectionTitle";

export type OurPhilosophyProps = {
  heading1: string;
  heading2: string;
  heading3: string;
  text1: string;
  text2: string;
  text3: string;
  title: string;
  subTitle: string;
};
const OurPhilosophy = (props: OurPhilosophyProps) => {
  const ourStands = [
    {
      heading: props.heading1,
      text: props.text1,
    },
    {
      heading: props.heading2,
      text: props.text2,
    },
    {
      heading: props.heading3,
      text: props.text3,
    },
  ];

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
      <SectionTitle heading={props.title} subHeading={props.subTitle} />

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
          const textToShow = ourStand.text.split("\n").map((text, index) => (
            <Fragment key={index}>
              {text} <br />
            </Fragment>
          ));

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
