import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const Twenties = () => {
  const twenties = [
    {
      year: "2002",
      achievement:
        "NBTE granted the approval of commence the National Diploma in Hotel and Catering Management Programme",
    },
    {
      year: "2005",
      achievement: "Accreditation of the National Diploma Programme",
    },
    {
      year: "2006",
      achievement:
        "NBTE granted the approval to commence the Higher National Diploma (HND) Programme in Hotel and Catering Management ",
    },
  ];

  const [slider, setSlider] = React.useState(null);

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box mt="55px">
      <Box>
        <Box w="36px" h="3px" bg="#021D37" mb="5px"></Box>

        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="24px">
          00’s
        </Heading>
      </Box>

      <Slider {...settings} ref={(slider) => setSlider(slider)} pr="30px">
        {twenties.map((seventy, index) => {
          const textToShow = Array.isArray(seventy.achievement)
            ? seventy.achievement.map((values, i) => (
                <Box key={i}>{values}</Box>
              ))
            : seventy.achievement;

          return (
            <Box
              key={index}
              bg="#EBEDEF"
              w="211px"
              p="15px 30px"
              h="330px"
              mt="20px"
              borderRadius="15px"
              mr="50px"
            >
              <Heading
                fontFamily="Playfair Display"
                color="#021D37"
                fontSize="30px"
                fontWeight="700"
                mb="20px"
              >
                {seventy.year}
              </Heading>

              <Text
                color="#021D37"
                fontFamily="Manrope"
                fontSize="18px"
                lineHeight="25px"
                fontWeight="400"
              >
                {textToShow}
              </Text>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default Twenties;
