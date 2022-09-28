import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import ourstories from "assets/Images/ourstories.png";
import styled from "@emotion/styled";

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
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
      name: "Chinonyerem Favour",
      text: "Studying in Wavecrest has made my dreams broader; I haven't gotten the feel of any limitations ever.My colleagues and customers are always captivated by my performance and keep asking me about where I trained.",
      headline: "STAND YOUR GROUND  - THE EARLIER, THE BETTER",
      image1: "",
      blogPost:
        "My name is Chinonyerem Favour, am 20 years of age. At the time I finished secondary school I couldn't get into University because I wasn't old enough so I spent one year here and there doing nothing of great importance before I took my (JAMB) – This is a National exam everyone who intends to go the University takes in Nigeria and in my opinion is really not a true test of one’s knowledge as there are several hitches one may encounter in writing this exam especially when it became a computer based exam. I took my JAMB exam twice seeking to get into a desired University for a desired course but I wasn't fortunate enough because I did not make the cut-off mark for the course. This meant that I already ‘wasted’ two years trying to get into University.After the second trial, I decided to give my true passion a chance to come alive! The truth is I have always been a lover of the fields in Hospitality especially that of culinary arts and event planning. However, in the part of the world I live, hospitality is not given enough credit for several reasons. Parents prefer their children doing more ‘prestigious’ courses like Law, Engineering and Medicine. This is true especially for children who are brilliant and brainy and unfortunately even for those who are not – there is this ‘class’ thing in the minds of parents.For me, it was not easy at first to convince my parents and the teachers in my life to allow me pursue a career in Hospitality because I was considered a brilliant and brainy student in Secondary School. But I gave it a try and succeeded. When I finally started this journey, I realized how much time I had wasted before pursuing my true dreams.  3 years after Secondary School was when I managed to convince my parents amidst different bad reviews from people telling me I was going to waste my knowledge if I pursued Hospitality courses. This time I did not bother listening to them and I set out to find the best hospitality school so I would not give anyone any opportunity to mock me later if I did not get the best. I did a Google search for the best hospitality schools in the State where I lived and I wrote down the 10 best that I saw. I started going to each of them one by one to make enquiries in person and see what they had to offer. Wavecrest was the 4th and last school I visited.",
    },
    {
      name: "Udodirim Peace",
      headline:
        "My dreams have improved because of Wavecrest College and the exposure it has given me. ",
      text: "My dream was to build my career in hospitality. I met graduates of the College and I admired them a lot. In fact, they lit the fire of Education and Excellence that kept burning in me till date.",
      image1: "",
      image2: "",
      blogPost: "",
    },
    {
      name: "Mia Rich",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.",
      image1: "",
      image2: "",
      blogPost: "",
    },
  ];

  const navigate = useNavigate();

  const showStory = (card) => {
    navigate(
      `/posts?image1=${card.image1}&name=${card.name}&headline=${card.headline}&texts=${card.blogPost}&image2=${card.image2}`,
      { replace: true }
    );
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
            <Box key={index} position="relative" bg="#021D37">
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
                    onClick={(card) => showStory(card)}
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
                  src={ourstories}
                  alt="ourstories"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
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
                  {card.link}
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
