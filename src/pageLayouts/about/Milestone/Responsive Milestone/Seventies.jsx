import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

const Seventies = () => {
  const seventies = [
    {
      year: "1973",
      achievement:
        "The College started a 1-year programme in Housekeeping for girls with their first school-leaving cerificate in a modest house in Animashaun Street, Surulere",
    },
    {
      year: "1978",
      achievement:
        "Wavecrest Training Center formally began in its location at 75 Adisa Bashua Street in Surulere, as a center for professional training of young women interested in developing their skills in a career in the filed of catering. ",
    },
  ];

  return (
    <Box>
      <Box>
        <Box w="36px" h="3px" bg="#021D37" mb="5px"></Box>
        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="24px">
          70’s
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {seventies.map((seventy, index) => {
          const textToShow = Array.isArray(seventy.achievement)
            ? seventy.achievement.map((values, i) => (
                <Box key={i}>{values}</Box>
              ))
            : seventy.achievement;

          return (
            <Box
              key={index}
              bg="#021D37"
              minW="250px"
              p="15px 30px"
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

export default Seventies;
