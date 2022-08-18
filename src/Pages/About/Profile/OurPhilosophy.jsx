import { Box, Text, Heading, Grid } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const OurPhilosophy = () => {
  const ourStands = [
    {
      heading: "Mission",
      text: "To train women to be competent professionals able to meet the challenges of the fast developing world of Hospitality; and to create awareness of the impact of Hospitality service on the quality of life of the individual, the family and ultimately on the development of society.",
    },
    {
      heading: "Vision",
      text: "To ensure In-depth Hospitality and Life Skills Training that guarantees the Girl Child 3Es (Education, Employment and Economic independence) by providing both technical competence and ethical integrity for the students.",
    },
    {
      heading: "Core Values",
      text: [
        "S - Spirit of Service",
        "P - Personal Responsibility",
        "I - Integrity",
        "R - Respect",
        "I - Industrious",
        "T - Teamwork",
      ],
    },
  ];

  const [slider, setSlider] = React.useState(null);

  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          xl: "block",
          "2xl": "block",
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

      <Box
        position={"relative"}
        width={"full"}
        overflow={"hidden"}
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)} pr="30px">
          {ourStands.map((card, index) => {
            const textToShow = Array.isArray(card.text)
              ? card.text.map((values, i) => <Box key={i}>{values}</Box>)
              : card.text;

            return (
              <Box key={index} bg="#021D37" p="15px 30px" h="330px" mt="20px">
                <Heading
                  fontFamily="Visual Hollow Script"
                  color="#FFF"
                  fontSize="55px"
                  fontWeight="400"
                >
                  {card.heading}
                </Heading>

                <Text
                  color="#FFF"
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
        </Slider>
      </Box>
    </Box>
  );
};

export default OurPhilosophy;
