import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Link,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { cards } from "./constant";
import NextLink from "next/link";

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 4500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Blog() {
  const [slider, setSlider] = React.useState<Slider>();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Blog.Wrapper>
      <Box position={"relative"} width={"full"} overflow={"hidden"}>
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          display={{
            sm: "none",
            md: "none",
            lg: "none",
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
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          display={{
            sm: "none",
            md: "none",
            lg: "none",
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
            xl: "none",
            "2xl": "none",
          }}
          px={{
            sm: "20px",
            md: "20px",
            lg: "20px",
          }}
          pt={{
            sm: "20px",
            md: "20px",
            lg: "20px",
          }}
          bg="#DDD"
        >
          <Box bg="#021D37" h="3px" w="88px" mt="55px" />

          <Heading
            fontSize="30px"
            fontFamily="Playfair Display"
            fontWeight="700"
            mt="10px"
          >
            Upcoming Events
          </Heading>
        </Box>

        <Slider
          {...settings}
          ref={(slider) => setSlider(slider as Slider)}
          pauseOnFocus
        >
          {cards.map((card, index) => {
            const buttonStyle = {
              background: "#021d37",
              w: "168px",
              p: "10px 26px",
              color: "#fff",
              fontSize: "20px",
              textDecoration: "none",
              mt: "20px",
              borderRadius: "3px",
              fontFamily: "Manrope",
              h: "52px",
              _hover: {
                textDecoration: "none",
                color: "white",
                bg: "#021d37",
              },
            };
            return (
              <Box
                key={index}
                bg="#DDD"
                position="relative"
                pt={{
                  sm: "40px",
                  md: "40px",
                  lg: "40px",
                }}
              >
                <Flex
                  flexDirection={{
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                    "2xl": "row",
                  }}
                  height="454px"
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                  w="80%"
                  m="0 auto"
                  pb={{
                    sm: "90px",
                    md: "90px",
                    lg: "90px",
                  }}
                >
                  <Image
                    src={card.flier}
                    alt="founders-day"
                    maxW={{
                      sm: "216px",
                      md: "216px",
                      lg: "216px",
                      xl: "450px",
                      "2xl": "450px",
                    }}
                    h={{
                      sm: "211px",
                      md: "211px",
                      lg: "211px",
                      xl: "350px",
                      "2xl": "350px",
                    }}
                    mx={{
                      sm: "0",
                      md: "50px",
                      lg: "50px",
                      xl: "50px",
                      "2xl": "50px",
                    }}
                  />

                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                    justifyContent="center"
                  >
                    <Heading
                      color="#021D37"
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      mb={{
                        sm: "-30px",
                        md: "-30px",
                        lg: "-30px",
                      }}
                      fontSize={{
                        sm: "28px",
                        md: "28px",
                        lg: "28px",
                        xl: "40px",
                        "2xl": "40px",
                      }}
                      lineHeight="45px"
                      textAlign="center"
                    >
                      {card.title}
                    </Heading>

                    <Text
                      fontFamily="Manrope"
                      fontSize={{
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                        "2xl": "16px",
                      }}
                      fontWeight="400"
                      lineHeight="22px"
                      textAlign="center"
                      mt="40px"
                      w={{
                        sm: "291px",
                        md: "291px",
                        lg: "291px",
                        xl: "638px",
                        "2xl": "638px",
                      }}
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

                    <NextLink href={card.linkTo} legacyBehavior passHref>
                      <Link
                        target={
                          card.linkTo.includes("/posts/") ? "_self" : "_blank"
                        }
                        display={
                          card.linkTo.includes("https://" || "/posts/")
                            ? "block"
                            : "none"
                        }
                        textTransform="uppercase"
                        textAlign="center"
                        {...buttonStyle}
                      >
                        {card.link}
                      </Link>
                    </NextLink>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Blog.Wrapper>
  );
}

Blog.Wrapper = styled.div`
  .slick-dots {
    position: static;
    margin-top: -45px;
    margin-bottom: 40px;
  }

  .slick-dots li {
    margin: 0px;
  }
`;
