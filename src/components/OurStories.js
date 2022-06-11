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
import ourstories from "../assets/ourstories.png";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
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
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        // aria-label="left-arrow"
        bg="none"
        position="absolute"
        left={side}
        top={top}
        color="white"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiChevronLeft size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        // aria-label="right-arrow"
        bg="none"
        position="absolute"
        right={side}
        top={top}
        // transform={"translate(0%, -50%)"}
        zIndex={2}
        color="white"
        onClick={() => slider?.slickNext()}
      >
        <BiChevronRight size="40px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            h={"600px"}
            position="relative"
            bg="#021D37"
            // mt="75px"
          >
            {/* This is the block you need to change, to customize the caption */}

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              marginBottom="3rem"
              position="relative"
              zIndex="1"
            >
              <Text
                position="absolute"
                fontFamily="'Dancing Script', cursive"
                opacity="0.1"
                fontSize="150px"
                color="white"
              >
                Wavecrest
              </Text>
              <Text
                position="relative"
                top="1.5rem"
                color="white"
                fontSize="4rem"
                fontWeight="600"
              >
                Our Stories
              </Text>
            </Flex>

            <Flex
              flexDirection="row"
              height="100%"
              position="relative"
              alignItems="center"
              justifyContent="center"
              w="80%"
              m="0 auto"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="left"
                bg={card.bg}
              >
                <Heading
                  color="#fff"
                  fontSize="4rem"
                  fontWeight="700"
                  fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                >
                  {card.name}
                </Heading>

                <Text
                  margin="3rem 0"
                  fontSize="18px"
                  lineHeight="25px"
                  color="#EBEDEF"
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
                // border="10px solid red"
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
