import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
<<<<<<< HEAD
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
=======
import { Box, Heading, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import OurPhilosophy from "./OurPhilosophy";
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
import { ourStands } from "../constants";

const ResponsivePhilosophy = () => {
  const [slider, setSlider] = React.useState<Slider>();
  const slideNo = useBreakpointValue({
    sm: 1,
    md: 2,
    lg: 3,
  });
<<<<<<< HEAD
=======
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e

  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
<<<<<<< HEAD
    speed: 4500,
    autoplaySpeed: 3000,
=======
    speed: 1500,
    autoplaySpeed: 2000,
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
    slidesToShow: slideNo,
    slidesToScroll: 1,
  };

  return (
<<<<<<< HEAD
    <ResponsivePhilosophy.Wrapper>
=======
    <OurPhilosophy.Wrapper>
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
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
<<<<<<< HEAD
=======
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
        
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
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
                h="400px"
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
<<<<<<< HEAD
    </ResponsivePhilosophy.Wrapper>
  );
};

ResponsivePhilosophy.Wrapper = styled.div`
=======
    </OurPhilosophy.Wrapper>
  );
};

OurPhilosophy.Wrapper = styled.div`
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
  .slick-slide div {
    margin-right: 5px;
  }
`;

export default ResponsivePhilosophy;
