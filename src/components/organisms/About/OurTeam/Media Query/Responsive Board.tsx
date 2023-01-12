import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { boards } from "../../constants";

const ResponsiveBoard = () => {
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Box>
        <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>

        <Heading
          fontFamily="Playfair Display"
          fontSize="32px"
          fontWeight="700"
          color="#021D37"
          mb="30px"
        >
          Board
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {boards.map((board, index) => (
          <Box key={index}>
            <Box w="400px" h="300px" borderRadius="0px 0px 5px 5px">
              <Image
                src={board.image}
                pr="10px"
                h="100%"
                w="100%"
                alt="companyLogo"
                objectFit="cover"
              />
            </Box>

            <Flex
              alignItems="center"
              bg="rgba(255, 255, 255, 67%)"
              p="10px 25px"
              position="relative"
              top="-74px"
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
                  fontSize="20px"
                  fontWeight="700"
                  color="#021D37"
                  lineHeight="27px"
                >
                  {board.name}
                </Heading>
                <Text
                  fontFamily="Manrope"
                  fontSize="18px"
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
      </Flex>
    </Box>
  );
};
export default ResponsiveBoard;
