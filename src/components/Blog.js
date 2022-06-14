import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Flex,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import Founders from "../assets/Images/founder.png";

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
      title: "Founders Day",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
      date: "July 24th, 2022",
      link: "Apply Now",
    },
    {
      title: "Founders Day",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
      date: "July 24th, 2022",
      link: "Apply Now",
    },
    {
      title: "Founders Day",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
      date: "July 24th, 2022",
      link: "Apply Now",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <Link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <Link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiChevronLeft size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiChevronRight size="40px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index} h={"446px"} position="relative" bg="#DDD">
            {/* This is the block you need to change, to customize the caption */}

            <Flex
              flexDirection="row"
              height="100%"
              position="relative"
              alignItems="center"
              justifyContent="center"
              w="80%"
              m="0 auto"
            >
              <Image src={Founders} alt="founders day" w="303px" h="295px" />

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                ml="122px"
                bg={card.bg}
              >
                <Heading
                  color="#021D37"
                  fontFamily="Playfair Display, serif"
                  fontWeight="700"
                  fontSize="40px"
                  lineHeight="53px"
                  textAlign="center"
                >
                  {card.title}
                </Heading>

                <Text
                  fontFamily="Manrope, sans-serif"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="22px"
                  mt="22px"
                  w="638px"
                >
                  {card.text}
                </Text>

                <Text
                  fontFamily="Playfair Display, serif"
                  fontWeight="400"
                  fontSize="28px"
                  lineHeight="37px"
                  textAlign="center"
                  mt="5px"
                >
                  {card.date}
                </Text>

                <Link
                  href="#"
                  bg="#021d37"
                  p="10px 25px"
                  mt="30px"
                  color="#fff"
                  fontFamily="Manrope, sans-serif"
                  fontSize="20px"
                  fontWeight="700"
                  textDecoration="none"
                  borderRadius="3px"
                  w="208px"
                  textAlign="center"
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: "#021d37",
                  }}
                >
                  {card.link}
                </Link>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
