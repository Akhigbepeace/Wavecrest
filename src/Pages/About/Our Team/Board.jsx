import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";
import registrar from "assets/Images/registrar.png";
import ResponsiveBoard from "Pages/About/Our Team/Media Query/Responsive Board";

const Board = () => {
  const boards = [
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
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
    {
      image: registrar,
      name: "Edith Chukwu",
      post: "Bursar",
    },
  ];

  return (
    <Box>
      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

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

      <Grid
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gridGap="8px"
        mb="100px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "grid",
          "2xl": "grid",
        }}
      >
        {boards.map((board, index) => {
          return (
            <Box key={index} w="250px" h="250px" mb="-62px">
              <Image src={board.image} objectFit="contain" borderRadius="5px" />

              <Flex
                alignItems="center"
                bg="rgba(255, 255, 255, 67%)"
                p="10px 25px"
                position="relative"
                top="-62px"
                borderRadius="0px 0px 5px 5px"
              >
                <Box
                  bg="#021D37"
                  w="3px"
                  my="auto"
                  h="80%"
                  position="absolute"
                  zIndex="1"
                ></Box>

                <Box ml="10px">
                  <Heading
                    fontFamily="Playfair Display"
                    fontSize="22px"
                    fontWeight="700"
                    color="#021D37"
                  >
                    {board.name}
                  </Heading>
                  <Text
                    fontFamily="Manrope"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(2, 29, 55, 0.63);"
                  >
                    {board.post}
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

export default Board;
