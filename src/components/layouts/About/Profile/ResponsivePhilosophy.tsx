import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { Box, Heading, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { ourStands } from "../constants";

const ResponsivePhilosophy = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const slideNo = useBreakpointValue({
    sm: 1,
    md: 2,
    lg: 3,
  });
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 4500,
    autoplaySpeed: 3000,
    slidesToShow: slideNo,
    slidesToScroll: 1,
  };

  return (
    <ResponsivePhilosophy.Wrapper>
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
        <Link
          position="absolute"
          left={side}
          top={top}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        ></Link>
        <Link
          position="absolute"
          right={side}
          top={top}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        ></Link>
        
        <Slider {...settings} ref={(slider) => setSlider(slider as Slider)}>
          {ourStands.map((card, index) => {
            const textToShow = Array.isArray(card.text)
              ? card.text.map((values, i) => <Box key={i}>{values}</Box>)
              : card.text;

            return (
              <Box
                key={index}
                bg="#021D37"
                p="35px 30px"
                h="500px"
                mt="20px"
                borderRadius="5px"
              >
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
    </ResponsivePhilosophy.Wrapper>
  );
};

ResponsivePhilosophy.Wrapper = styled.div`
  .slick-slide div {
    margin-right: 5px;
  }
`;

export default ResponsivePhilosophy;
