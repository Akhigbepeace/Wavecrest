import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const Eighties = () => {
  const eighties = [
    {
      year: "1987",
      achievement:
        "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
    },
    {
      year: "1989",
      achievement:
        "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
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
          80’s
        </Heading>
      </Box>

      <Slider {...settings} ref={(slider) => setSlider(slider)} pr="30px">
        {eighties.map((seventy, index) => {
          const textToShow = Array.isArray(seventy.achievement)
            ? seventy.achievement.map((values, i) => (
                <UnorderedList key={i}>
                  <ListItem>{values}</ListItem>
                </UnorderedList>
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
                {eighties.year}
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

export default Eighties;
