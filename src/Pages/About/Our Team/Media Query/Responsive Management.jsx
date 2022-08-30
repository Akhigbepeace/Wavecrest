import {
  Box,
  useBreakpointValue,
  Heading,
  Text,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";
import registrar from "assets/Images/registrar.png";

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Carousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const boards = [
    {
      image: provost,
      name: "Rosana Forsuelo",
      post: "Provost",
    },
    {
      image: deputyProvost,
      name: "Ifeoma Nwabachili",
      post: "Deputy Provost",
    },
    {
      image: bursar,
      name: "Veronica Esode",
      post: "Registrar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
  ];

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Link
        position="absolute"
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      ></Link>

      <Link
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      ></Link>

      <Box>
        <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>

        <Heading
          fontFamily="Playfair Display"
          fontSize="32px"
          fontWeight="700"
          color="#021D37"
          mb="30px"
        >
          Management
        </Heading>
      </Box>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {boards.map((board, index) => (
          <Box key={index}>
            <Box w="250px" h="168px">
              <Image
                src={board.image}
                pr="10px"
                alt="companyLogo"
                objectFit="contain"
              />
            </Box>

            <Flex
              alignItems="center"
              bg="rgba(255, 255, 255, 67%)"
              p="10px 25px"
              position="relative"
              top="-64px"
              borderRadius="0px 0px 5px 5px"
              w="100%"
            >
              <Box
                bg="#021D37"
                w="7px"
                h="80%"
                position="absolute"
                zIndex="1"
              ></Box>

              <Box ml="20px">
                <Heading
                  fontFamily="Playfair Display"
                  fontSize="22px"
                  fontWeight="700"
                  color="#021D37"
                  lineHeight="27px"
                >
                  {board.name}
                </Heading>
                <Text
                  fontFamily="Manrope"
                  fontSize="20px"
                  fontWeight="400"
                  color="rgba(2, 29, 55, 0.63);"
                  lineHeight="27px"
                >
                  {board.post}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
