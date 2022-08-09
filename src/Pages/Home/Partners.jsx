import React from "react";
import { Box, useBreakpointValue, Image, Heading } from "@chakra-ui/react";
import { Flex, Text, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import Nestle from "assets/Images/Nestle.png";
import Pau from "assets/Images/pau.png";
import bihc from "assets/Images/bihc.png";
import raddison from "assets/Images/raddison.png";
import maggi from "assets/Images/Maggi.png";
import womenBoard from "assets/Images/women's board.jpg";
import sheraton from "assets/Images/sheraton.png";
import intercontinental from "assets/Images/intercontinental.png";
import crowneplaza from "assets/Images/crowneplaza.png";
import starwood from "assets/Images/starwood.png";
import bomahotel from "assets/Images/bomahotel.png";

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: "linear",
};
export default function Carousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    Nestle,
    Pau,
    bihc,
    raddison,
    maggi,
    womenBoard,
    sheraton,
    intercontinental,
    crowneplaza,
    starwood,
    bomahotel,
  ];

  return (
    <Box position={"relative"} overflow={"hidden"}>
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

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          fontFamily="Visual Hollow Script"
          fontWeight="400"
          fontSize="150px"
          color="rgba(3, 29, 56, 0.06)"
        >
          Work with us
        </Heading>

        <Text
          position="absolute"
          color="#021D37"
          fontFamily="Playfair Display"
          fontSize="40px"
          fontWeight="700"
          mb="25px"
        >
          Partners and Sponsors
        </Text>
      </Flex>

      <Slider {...settings} ref={(slider) => setSlider(slider)} pauseOnFocus>
        {cards.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt="companyLogo"
            h="100px"
            mb="63px"
            objectFit="contain"
          />
        ))}
      </Slider>
    </Box>
  );
}
