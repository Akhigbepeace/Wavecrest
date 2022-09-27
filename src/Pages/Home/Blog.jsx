import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Image,
  Link,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import styled from "@emotion/styled";
import CTHFlier from "assets/Images/tch flier.png";
import PCHFlier from "assets/Images/P.C.H. flier.png";
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      flier: "",
      title: "Culinary Courses",
      text: "A professional programme providing the skill sets for culinary knowledge.",
      date: "31st Oct - 30th Nov",
      linkTo: "https://forms.gle/VQtgEFMa9qhsojGn7",
      link: "Apply Now",
    },
    {
      flier: PCHFlier,
      title: "Professional Certificate in Hospitality",
      text: "Training program geared towards industry managers, supervisors, and operatives.  ",
      linkTo: "https://forms.gle/7vmuHrzHSxHmkh8s8",
      link: "Apply Now",
    },
    {
      flier: CTHFlier,
      title: "Confederation of Tourism and Hospitality",
      text: "UK International Gold standard qualifications  for the Hospitality, Culinary & Tourism industries",
      linkTo: "https://tinyurl.com/CTH-Registration-Form1",
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
          <Box bg="#021D37" h="3px" w="88px" mt="55px"></Box>

          <Heading
            fontSize="30px"
            fontFamily="Playfair Display"
            fontWeight="700"
            mt="10px"
          >
            Upcoming Events
          </Heading>
        </Box>

        <Slider {...settings} ref={(slider) => setSlider(slider)} pauseOnFocus>
          {cards.map((card, index) => (
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
                height="100%"
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
                  alt="founders day"
                  w={{
                    sm: "216px",
                    md: "216px",
                    lg: "216px",
                    xl: "303px",
                    "2xl": "303px",
                  }}
                  h={{
                    sm: "211px",
                    md: "211px",
                    lg: "211px",
                    xl: "295px",
                    "2xl": "295px",
                  }}
                  mr={{
                    sm: "0",
                    md: "100px",
                    lg: "100px",
                    xl: "122px",
                    "2xl": "122px",
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
                    // mb="10px"
                    fontSize={{
                      sm: "28px",
                      md: "28px",
                      lg: "28px",
                      xl: "40px",
                      "2xl": "40px",
                    }}
                    lineHeight="60px"
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
                    mt="22px"
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

                  <Link
                    href={card.linkTo}
                    target="_blank"
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
                </Flex>
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
    margin-top: -45px;
    margin-bottom: 40px;
  }

  .slick-dots li {
    margin: 0px;
  }
`;
