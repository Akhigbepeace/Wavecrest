import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import React from "react";
// import Slider from "react-slick";

const TwentyTens = () => {
  const twentyTens = [
    {
      year: "2010",
      achievement:
        "Received the 2010 Platinum award for the best hospitality educational institute in West Africa Tourism and Hospitality Awards (WATHA)",
    },
    {
      year: "2011",
      achievement:
        "Received the 2011 Platinum award for the best hospitality educational Institute in West Africa Tourism and Hospitality Awards (WATHA)",
    },
    {
      year: "2012",
      achievement:
        "Received the 2012 Platinum award for the best hospitality educational Institute in West Africa Tourism and Hospitality Awards (WATHA)",
    },
    {
      year: "2014",
      achievement: [
        "Wavecrest became the Approved International Center for the Institute of Hospitality (IHG), UK Management Qualifications",
        "Wavecrest  came 2nd in the Accor students take off Finals in Paris, a global student's competition.",
        "Official signing of the Memorandum of Agreement with Intercontinental Hotel Group, Wavecrest becomes an official IHG Academy Partner",
      ],
    },
    {
      year: "2015",
      achievement:
        "Appointed training provider for the National Vocation Qualificatio (NVQ) recently approved by the Federal Government",
    },
    {
      year: "2016",
      achievement:
        "Eight students were awarded a Swiss Government scholarship to study in the Swiss Hotel School - Boma International Hospitality College in Nairobi, Kenya ",
    },
    {
      year: "2017",
      achievement:
        "Signed MOU for collaboration with UNDP and Lagos State Employment Trust (LSETF) through the Lagos State Employability Support Project to teain 1,500 youth in Hospitality skills",
    },
    {
      year: "2018",
      achievement: [
        "The Pyne Awards for Best Institution for the Development of Women in Nigeria",

        "The Africa Travels Times Magazine Awards for Best Hospitality College for Women (West Africa)",
      ],
    },
  ];
  // const [slider, setSlider] = React.useState(null);

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   fade: false,
  //   infinite: true,
  //   autoplay: false,
  //   speed: 1500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <Box mt="55px">
      <Box>
        <Box w="36px" h="3px" bg="#021D37" mb="5px"></Box>
        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="24px">
          10’s
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {twentyTens.map((seventy, index) => {
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
              bg="#021D37"
              w="300px"
              p="15px 30px"
              h="100%"
              mt="20px"
              borderRadius="15px"
              mr="10px"
            >
              <Heading
                fontFamily="Playfair Display"
                color="#FFF"
                fontSize="30px"
                fontWeight="700"
                mb="20px"
              >
                {seventy.year}
              </Heading>

              <Text
                color="#FFF"
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
      </Flex>
    </Box>
  );
};

export default TwentyTens;
