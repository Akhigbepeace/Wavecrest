import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";
import registrar from "assets/Images/registrar.png";

const Management = () => {
  const managements = [
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
  ];
  return (
    <Box>
      <Heading
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="700"
        color="#021D37"
        mb="30px"
      >
        Board
      </Heading>

      <Grid gridTemplateColumns="auto auto" gridGap="20px">
        {managements.map((management) => {
          return (
            <Box>
              <Box w="436px" h="436px">
                <Image
                  src={management.image}
                  objectFit="contain"
                  borderRadius="5px"
                  position="absolute"
                />
              </Box>

              <Flex
                alignItems="center"
                bg="rgba(255, 255, 255, 67%)"
                p="10px 25px"
                position="relative"
                bottom="187px"
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
                    fontSize="32px"
                    fontWeight="700"
                    color="#021D37"
                    lineHeight="27px"
                  >
                    {management.name}
                  </Heading>
                  <Text
                    fontFamily="Manrope"
                    fontSize="20px"
                    fontWeight="400"
                    color="rgba(2, 29, 55, 0.63);"
                    lineHeight="27px"
                  >
                    {management.post}
                  </Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Management;
