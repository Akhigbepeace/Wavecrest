import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import ourstories from "../../assets/Images/ourstories.png";

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      name: "Sara Smart",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
    },
    {
      name: "Joy Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
    },
    {
      name: "Mia Rich",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* Left Icon */}
      <IconButton
        bg="none"
        position="absolute"
        left={side}
        top={top}
        color="white"
        zIndex={2}
        _hover={{
          bg: "transparent",
        }}
        onClick={() => slider?.slickPrev()}
      >
        <BiChevronLeft size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        bg="none"
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        color="white"
        _hover={{
          bg: "transparent",
        }}
        onClick={() => slider?.slickNext()}
      >
        <BiChevronRight size="40px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index} h={"559px"} position="relative" bg="#021D37">
            {/* This is the block you need to change, to customize the caption */}
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              marginBottom="58px"
              position="relative"
              zIndex="1"
            >
              <Text
                position="absolute"
                fontFamily="Dancing Script"
                opacity="0.1"
                fontSize="150px"
                color="white"
              >
                Wavecrest
              </Text>
              <Text
                position="relative"
                top="25px"
                color="white"
                fontFamily="Playfair Display, serif"
                fontSize="40px"
                fontWeight="700"
              >
                Our Stories
              </Text>
            </Flex>

            <Flex
              flexDirection="row"
              position="relative"
              alignItems="center"
              justifyContent="center"
              m="74px auto"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="left"
                bg={card.bg}
              >
                <Heading
                  color="#fff"
                  fontFamily="Playfair Display, serif"
                  fontSize="32px"
                  fontWeight="700"
                >
                  {card.name}
                </Heading>

                <Text
                  color="#EBEDEF"
                  margin="3rem 0"
                  fontFamily="Manrope, sans-serif"
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="25px"
                  width="457px"
                >
                  {card.text}
                </Text>
              </Box>

              <Image
                src={ourstories}
                alt="ourstories"
                w="576px"
                h="345px"
                ml="88px"
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
