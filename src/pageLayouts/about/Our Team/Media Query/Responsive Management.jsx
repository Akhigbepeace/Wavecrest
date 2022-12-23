import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

export default function Carousel() {
  const managements = [
    {
      image: "/assets/imgs/membersofthemanagement/rosana.png",
      name: "Rosana Forsuelo",
      post: "Provost",
    },
    {
      image: "/assets/imgs/membersofthemanagement/ifeoma.png",
      name: "Ifeoma Nwabachili",
      post: "Deputy Provost",
    },
    {
      image: "/assets/imgs/membersofthemanagement/veronica.png",
      name: "Veronica Esode",
      post: "Registrar",
    },
    {
      image: "/assets/imgs/membersofthemanagement/edith.png",
      name: "Edith Chukwu",
      post: "Bursar",
    },
  ];

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
          Management
        </Heading>
      </Box>

      <Flex overflowY="scroll">
        {managements.map((management, index) => (
          <Box key={index}>
            <Box w="300px">
              <Image
                src={management.image}
                pr="10px"
                w="100%"
                h="200px"
                alt="companyLogo"
                objectFit="cover"
                borderRadius="0px 0px 5px 5px"
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
                  {management.name}
                </Heading>
                <Text
                  fontFamily="Manrope"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(2, 29, 55, 0.63);"
                  lineHeight="27px"
                >
                  {management.post}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
