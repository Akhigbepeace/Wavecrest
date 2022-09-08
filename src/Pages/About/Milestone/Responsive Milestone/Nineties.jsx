import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

const Nineties = () => {
  const nineties = [
    {
      year: "1990",
      achievement:
        "An Extension for the Training Center was built. In the same year , recognition was received from the State Ministry of Education as a continuing education center",
    },

    {
      year: "1991",
      achievement:
        "The West Africa Examination Council (WAEC) accredited Wavecrest as an instruction and examination center for WAEC 894 Technical Examination in Hotel & Catering. In 1995, The National Business and Technical Examination Board (NABTED), which has taken over the WAEC Examinations, accorded the Center with the same recognition as an instruction and examination center for the National Technical Certificate (NTC) Examination",
    },
    {
      year: "1998",
      achievement:
        "In an attempt to upgrade the career of Hospitality Management, seeking to make a stronger contribution to raising the standards of the Hospitality sector in Nigeria, it was decided to apply for recognition to the Ntional Board for the Technical Education (NBTE) as a Monotechnic offering courses that would lead to the National Diploma (ND). By 1999, the Federal Ministry granted approval to establish the Wavecrest College of Catering and Hospitality Management able to run ND programmes",
    },
  ];

  return (
    <Box mt="55px">
      <Box>
        <Box w="36px" h="3px" bg="#021D37" mb="5px"></Box>
        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="24px">
          90’s
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {nineties.map((ninety, index) => {
          const textToShow = Array.isArray(ninety.achievement)
            ? ninety.achievement.map((values, i) => <Box key={i}>{values}</Box>)
            : ninety.achievement;

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
                {ninety.year}
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

export default Nineties;
