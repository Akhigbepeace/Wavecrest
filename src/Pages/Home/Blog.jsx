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
import Founders from "assets/Images/founder.png";
import styled from "@emotion/styled";
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
    <CaptionCarousel.Wrapper>
      <Box position={"relative"} width={"full"} overflow={"hidden"}>
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

        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          _hover={{
            bg: "transparent",
          }}
          onClick={() => slider?.slickPrev()}
        >
          <BiChevronLeft size="40px" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          _hover={{
            bg: "transparent",
          }}
          onClick={() => slider?.slickNext()}
        >
          <BiChevronRight size="40px" />
        </IconButton>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index} h={"446px"} position="relative" bg="#DDD">
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
                    fontFamily="Playfair Display"
                    fontWeight="700"
                    fontSize="40px"
                    lineHeight="53px"
                    textAlign="center"
                  >
                    {card.title}
                  </Heading>

                  <Text
                    fontFamily="Manrope"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="22px"
                    textAlign="center"
                    mt="22px"
                    w="638px"
                  >
                    {card.text}
                  </Text>

                  <Text
                    fontFamily="Playfair Display"
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
                    background="#021d37"
                    w="168px"
                    p="10px 26px"
                    color="#fff"
                    fontSize="20px"
                    textDecoration="none"
                    textAlign="center"
                    mt="20px"
                    textTransform="uppercase"
                    borderRadius="3px"
                    fontFamily="Manrope"
                    h="52px"
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
    </CaptionCarousel.Wrapper>
  );
}
CaptionCarousel.Wrapper = styled.div`
  .slick-dots {
    position: static;
  }
`;
