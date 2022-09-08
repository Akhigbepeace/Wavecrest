import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

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

  return (
    <Box mt="55px">
      <Box>
        <Box w="36px" h="3px" bg="#021D37" mb="5px"></Box>

        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="24px">
          00’s
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {twenties.map((twenty, index) => {
          const textToShow = Array.isArray(twenty.achievement)
            ? twenty.achievement.map((values, i) => <Box key={i}>{values}</Box>)
            : twenty.achievement;

          return (
            <Box
              key={index}
              bg="#EBEDEF"
              minW="250px"
              p="15px 30px"
              mt="20px"
              borderRadius="15px"
              mr="10px"
            >
              <Heading
                fontFamily="Playfair Display"
                color="#021D37"
                fontSize="30px"
                fontWeight="700"
                mb="20px"
              >
                {twenty.year}
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
      </Flex>
    </Box>
  );
};

export default Twenties;
