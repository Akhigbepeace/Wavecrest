import React from "react";
import { Box, useBreakpointValue, Image } from "@chakra-ui/react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
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
  speed: 1000,
  autoplaySpeed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
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
      {/* Left Icon */}
      <Link
        background="linear-gradient(90deg, rgba(197,197,197,1) 30%, rgba(209,209,209,0.2) 70%, rgba(248,248,248,0.4) 88%, rgba(255,255,255,0.7) 100%)"
        p="45px 20px"
        mt="-45px"
        ml="-10px"
        h="150px"
        position="absolute"
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <FaChevronCircleLeft size="40px" mb="-45px" />
      </Link>

      {/* Right Icon */}
      <Link
        background="linear-gradient(270deg, rgba(197,197,197,0.8) 30%, rgba(209,209,209,0.6) 70%, rgba(248,248,248,0.4) 88%, rgba(255,255,255,1) 100%)"
        p="45px 20px"
        mt="-45px"
        mr="-10px"
        h="150px"
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <FaChevronCircleRight size="40px" mt="45px" />
      </Link>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text
          position="absolute"
          fontFamily="Dancing Script, cursive"
          fontWeight="400"
          fontSize="130px"
          color="rgba(3, 29, 56, 0.06)"
        >
          Work with us
        </Text>
        <Text
          position="relative"
          top="15px"
          color="#021D37"
          fontFamily="Playfair Display"
          fontSize="40px"
          fontWeight="700"
        >
          Partners and Sponsors
        </Text>
      </Flex>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt="companyLogo"
            h="100px"
            my="63px"
            objectFit="contain"
          />
        ))}
      </Slider>
    </Box>
  );
}
