import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import imageAvatar from "assets/Images/image-avatar.png";

const Board = () => {
  const boards = [
    {
      image: imageAvatar,
      name: "Edna Dafe",
      post: "Women's Board",
    },
    {
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666966088/attachments/8_ohblsr.png",
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
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666962788/boardmembers/17_tykwcm.png",
      name: "Gloria Osezua",
      post: "Executive Vice Chairman / Owel Farms",
    },
    {
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666962789/boardmembers/18_hvdbsl.png",
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
            <Box key={index} w="250px">
              <Image
                src={board.image}
                w="100%"
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
