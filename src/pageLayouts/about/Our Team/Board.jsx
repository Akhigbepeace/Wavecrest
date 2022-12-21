import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
const imageAvatar = "/assets/imgs/image-avatar.png";

const Board = () => {
  const boards = [
    {
      image: imageAvatar,
      name: "Edna Dafe",
      post: "Women's Board",
    },
    {
      image: "/assets/imgs/ward.jpg",
      name: "Trevor Ward",
      post: "W Hospitality Group",
    },
    {
      image: imageAvatar,
      name: "Moyo Ogunseinde",
      post: "Uraga / Radisson Blu",
    },
    {
      image: imageAvatar,
      name: "Peter Idoko",
      post: "Legend Hotels / Hilton",
    },
    {
      image: imageAvatar,
      name: "Chris Adedipe",
      post: "Independence Consultant",
    },
    {
      image: imageAvatar,
      name: "Gloria Osezua",
      post: "Executive Vice Chairman / Owel Farms",
    },
    {
      image: imageAvatar,
      name: "Dolapo Afolami",
      post: "Member",
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
            <Box key={index} w={{ xl: "230px", "2xl": "250px" }}>
              <Image
                src={board.image}
                w="100%"
                h="250px"
                objectFit="cover"
                borderRadius="5px"
              />

              <Flex
                alignItems="center"
                bg="rgba(255, 255, 255, 67%)"
                p="10px 25px"
                position="relative"
                top="-68px"
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
                    fontSize={{ xl: "18px", "2xl": "22px" }}
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
