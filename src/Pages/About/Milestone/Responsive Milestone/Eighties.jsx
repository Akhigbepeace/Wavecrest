import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Eighties = () => {
  const eighties = [
    {
      year: "1986",
      achievement:
        "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
    },
    {
      year: "1987",
      achievement:
        "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering ",
    },

    {
      year: "1988",
      achievement:
        "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
    },
    {
      year: "1989",
      achievement:
        "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
    },
  ];

  return (
    <Box mt="55px">
      <Box>
        <Box w="36px" h="3px" bg="#021D37" mb="5px"></Box>

        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="24px">
          80’s
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {eighties.map((eighty, index) => {
          const textToShow = Array.isArray(eighty.achievement)
            ? eighty.achievement.map((values, i) => (
                <UnorderedList key={i}>
                  <ListItem>{values}</ListItem>
                </UnorderedList>
              ))
            : eighty.achievement;

          return (
            <Box
              key={index}
              bg="#EBEDEF"
              p="15px 30px"
              minW="250px"
              mt="10px"
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
                {eighty.year}
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

export default Eighties;
