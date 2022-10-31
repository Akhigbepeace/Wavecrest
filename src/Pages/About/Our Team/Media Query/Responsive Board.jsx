import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import ward from "assets/Images/ward.JPG";
import imageAvatar from "assets/Images/image-avatar.png";

export default function Carousel() {
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
            <Box w="350px" h="300px">
              <Image
                src={board.image}
                pr="10px"
                alt="companyLogo"
                objectFit="contain"
              />
            </Box>

            <Flex
              alignItems="center"
              bg="rgba(255, 255, 255, 67%)"
              p="10px 25px"
              position="relative"
              top="-64px"
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
}
