import React from "react";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Flex,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { CARD_POST } from "data/blog";
import { useRouter } from "next/router";

const settings = {
  dots: true,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = CARD_POST;

  const router = useRouter();

  const showStory = (card) => {
    router.push(`/posts/${card.postId}`);
  };

  return (
    <CaptionCarousel.Wrapper>
      <Box position={"relative"} width={"full"} overflow={"hidden"}>
        <IconButton
          bg="none"
          position="absolute"
          left={side}
          top={top}
          color="white"
          zIndex={2}
          display={{
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
          _hover={{
            bg: "transparent",
          }}
          onClick={() => slider?.slickPrev()}
        >
          <BiChevronLeft size="40px" />
        </IconButton>

        <IconButton
          bg="none"
          position="absolute"
          right={side}
          top={top}
          zIndex={2}
          color="white"
          display={{
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
          _hover={{
            bg: "transparent",
          }}
          onClick={() => slider?.slickNext()}
        >
          <BiChevronRight size="40px" />
        </IconButton>

        <Box
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "flex",
            "2xl": "flex",
          }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          position="relative"
          mt={{
            sm: "0",
            md: "0",
            lg: "0",
            xl: "-80px",
            "2xl": "-80px",
          }}
          pt={{ sm: "55px", md: "55px", lg: "55px" }}
          px={{ sm: "20px", md: "20px", lg: "20px" }}
          zIndex="1"
          bg="#021D37"
        >
          <Heading
            fontFamily="Visual Hollow Script"
            opacity="0.1"
            fontSize="170px"
            color="white"
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            Wavecrest
          </Heading>

          <Box
            bg="#FFF"
            h="3px"
            w="88px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>

          <Text
            position="absolute"
            color="white"
            fontFamily="Playfair Display"
            fontSize={{
              sm: "30px",
              md: "30px",
              lg: "30px",
              xl: "40px",
              "2xl": "40px",
            }}
            fontWeight="700"
            bg={{
              sm: "#021D37",
              md: "#021D37",
              lg: "#021D37",
              xl: "none",
              "2xl": "none",
            }}
          >
            Our Stories
          </Text>
        </Box>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              position="relative"
              bg="#021D37"
              h={{ sm: "700px", md: "500px", lg: "550px" }}
            >
              <Flex
                flexDirection={{
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                position="relative"
                alignItems="center"
                justifyContent="center"
                mt={{
                  sm: "40px",
                  md: "80px",
                  lg: "80px",
                }}
                pb="74px"
              >
                <Flex
                  flexDirection="column"
                  alignItems="left"
                  mx={{
                    sm: "auto",
                    md: "auto",
                    lg: "auto",
                  }}
                >
                  <Heading
                    color="#fff"
                    fontFamily="Playfair Display"
                    fontSize="32px"
                    fontWeight="700"
                    mt={{
                      sm: "40px",
                      md: "40px",
                      lg: "40px",
                    }}
                    textAlign={{
                      sm: "left",
                      md: "center",
                      lg: "center",
                    }}
                  >
                    {card.name}
                  </Heading>

                  <Text
                    color="#EBEDEF"
                    margin="20px 0"
                    fontFamily="Manrope"
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="25px"
                    width="457px"
                    w={{
                      sm: "290px",
                      md: "310px",
                      lg: "310px",
                      xl: "457px",
                      "2xl": "457px",
                    }}
                  >
                    {card.text}
                  </Text>

                  <Button
                    onClick={() => showStory(card)}
                    background="#FFF"
                    w="168px"
                    p="10px 26px"
                    color="#021D37"
                    fontSize="20px"
                    textDecoration="none"
                    textAlign="center"
                    my="20px"
                    textTransform="uppercase"
                    borderRadius="3px"
                    fontFamily="Manrope"
                    h="52px"
                    mx={{
                      sm: "auto",
                      md: "auto",
                      lg: "auto",
                    }}
                    display={{
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                      "2xl": "block",
                    }}
                    _hover={{
                      textDecoration: "none",
                      color: "#021D37",
                      bg: "#EBEDEF",
                    }}
                  >
                    READ MORE
                  </Button>
                </Flex>

                <Image
                  src={card.postsImg}
                  alt="ourstories"
                  objectFit="cover"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                  ml={{
                    xl: "-30px",
                    "2xl": "-30px",
                  }}
                  w={{
                    sm: "310px",
                    md: "310px",
                    lg: "310px",
                    xl: "576px",
                    "2xl": "576px",
                  }}
                  h={{
                    sm: "213px",
                    md: "213px",
                    lg: "213px",
                    xl: "345px",
                    "2xl": "345px",
                  }}
                  mx="auto"
                />

                <Button
                  onClick={(e) => showStory(e)}
                  background="#FFF"
                  w="168px"
                  p="10px 26px"
                  color="#021D37"
                  fontSize="20px"
                  textDecoration="none"
                  textAlign="center"
                  mt="60px"
                  textTransform="uppercase"
                  borderRadius="3px"
                  fontFamily="Manrope"
                  h="52px"
                  mx={{
                    sm: "auto",
                    md: "auto",
                    lg: "auto",
                  }}
                  display={{
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                    "2xl": "none",
                  }}
                  _hover={{
                    textDecoration: "none",
                    color: "#021D37",
                    bg: "#EBEDEF",
                  }}
                >
                  READ MORE
                </Button>
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
    padding-bottom: 40px;
    background: #021d37;
  }
  .slick-dots li {
    margin: 0px;
  }
  .slick-dots li button::before {
    position: absolute;
    color: white;
    font-size: 15px;
  }
`;
