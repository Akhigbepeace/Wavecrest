import React from "react";
import { Box, IconButton, useBreakpointValue, Image } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Nestle from "../assets/Images/Nestle.png";
import Pau from "../assets/Images/pau.png";
import bihc from "../assets/Images/bihc.png";
import raddison from "../assets/Images/raddison.png";
import maggi from "../assets/Images/Maggi.png";
import womenBoard from "../assets/Images/women's board.jpg";
import sheraton from "../assets/Images/sheraton.png";
import intercontinental from "../assets/Images/intercontinental.png";
import crowneplaza from "../assets/Images/crowneplaza.png";
import starwood from "../assets/Images/starwood.png";
import bomahotel from "../assets/Images/bomahotel.png";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
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
    <Box
      position={"relative"}
      height={"150px"}
      width={"full"}
      overflow={"hidden"}
    >
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((image, index) => (
          // <Box
          //   key={index}
          //   height={"150px"}
          //   position="relative"
          //   backgroundPosition="center"
          //   backgroundRepeat="no-repeat"
          //   backgroundSize="cover"
          //   backgroundImage={`url(${url})`}
          // />
          <Image src={image} alt="companyLogo" h="72px" objectFit="contain" />
        ))}

        {/* <Image src={sheraton} alt="sheraton" mr="20px" objectFit="contain" />
        <Image src={Nestle} alt="Nestle" w="80px" mr="66px" />
        <Image src={Pau} alt="pauLogo" h="72px" mr="70px" />
        <Image src={bihc} alt="bihc" w="100px" h="100px" mr="59px" />
        <Image src={raddison} alt="raddison" mr="59px" />
        <Image src={maggi} alt="Maggi" h="100px" mr="59px" />
        <Image src={womenBoard} alt="women board" h="100px" mr="59px" />
        <Image
          src={intercontinental}
          alt="intercontinental"
          h="100px"
          mr="59px"
        />
        <Image src={crowneplaza} alt="crowneplaza" mr="59px" />
        <Image src={starwood} alt="starwood" w="208px" h="72px" mr="59px" />
        <Image src={bomahotel} alt="bomahotel" mr="59px" /> */}
      </Slider>
    </Box>
  );
}
