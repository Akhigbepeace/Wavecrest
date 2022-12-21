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

const CTHFlier = "/assets/imgs/tch flier.png";
const PCHFlier = "/assets/imgs/P.C.H. flier.png";
const CulinaryFlier = "/assets/imgs/Culinary flyer.png";
const graduationFlier = "/assets/imgs/graduation.png";
const graduationFair = "/assets/imgs/graduation-fair.jpg";
export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      flier: CulinaryFlier,
      title: "Culinary Courses",
      text: "A professional programme providing the skill sets for culinary knowledge.",
      date: "February 6 - March 8",
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
    {
      flier: graduationFlier,
      title: "2022 GRADUATION CEREMONY INVITE",
      text: "The Provost of Wavecrest College of Hospitality cordially invites you to her 2022 Graduation ceremony for Higher National Diploma, National Diploma and Certificate students.",
      date: "Friday, 2nd December, 2022",
      linkTo: "/posts/e90cf931-2c52-42cb-bb0d-2a30a2e960bd",
      link: "Read More",
    },
    {
      flier: graduationFair,
      title: "GRADUATE CAREER FAIR",
      text: "Join other organisations like yours for our GRADUATE FAIR scheduled Friday 2nd December 2022 - the same day of the graduation.",
      date: "Friday, 2nd December, 2022",
      linkTo: "/posts/4c06a095-d93c-424d-8adc-9ad5aa250dcb",
      link: "Read More",
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
          {cards.map((card, index) => {
            const buttonStyle = {
              background: "#021d37",
              w: "168px",
              p: "10px 26px",
              color: "#fff",
              fontSize: "20px",
              textDecoration: "none",
              textAlign: "center",
              mt: "20px",
              textTransform: "uppercase",
              borderRadius: "3px",
              fontFamily: "Manrope",
              h: "52px",
              display: "block",
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

                    <Link
                      href={card.linkTo}
                      target={
                        card.linkTo.includes("/posts/") ? "_self" : "_blank"
                      }
                      {...buttonStyle}
                    >
                      {card.link}
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
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
