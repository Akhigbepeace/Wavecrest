import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";
import registrar from "assets/Images/registrar.png";

const Staff = () => {
  const staffs = [
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
          Staff
        </Heading>
      </Box>

      <Grid
        gridTemplateColumns="1fr 1fr"
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
        {staffs.map((staff, index) => {
          return (
            <Box key={index} mb="-74px">
              <Box
                w={{
                  sm: "250px",
                  md: "100%",
                  lg: "100%",
                  xl: "436px",
                  "2xl": "436px",
                }}
              >
                <Image
                  src={staff.image}
                  objectFit="contain"
                  borderRadius="5px"
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
                    fontSize="32px"
                    fontWeight="700"
                    color="#021D37"
                    lineHeight="27px"
                  >
                    {staff.name}
                  </Heading>
                  <Text
                    fontFamily="Manrope"
                    fontSize="20px"
                    fontWeight="400"
                    color="rgba(2, 29, 55, 0.63);"
                    lineHeight="27px"
                  >
                    {staff.post}
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

export default Staff;
