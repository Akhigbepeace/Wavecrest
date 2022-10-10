import { Box, Grid, Heading, Image, Flex, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import imageAvatar from "assets/Images/image-avatar.png";
import bursar from "assets/Images/bursar.png";
import registrar from "assets/Images/registrar.png";

const Staff = () => {
  const staffs = [
    {
      title: "Academic Staff",
      others: [
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
      ],
    },

    {
      title: "Non-Teaching Staff",
      others: [
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
      ],
    },

    {
      title: "ODC",
      others: [
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
      ],
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

        <Box>
          {staffs.map((staff, index) => {
            return (
              <Fragment>
                <Heading
                  key={index}
                  fontFamily="Playfair Display"
                  fontSize="32px"
                  fontWeight="700"
                  color="#021D37"
                  mb="30px"
                >
                  {staff.title}
                </Heading>

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
                  {staff.others.map((staff, index) => {
                    return (
                      <Box key={index} w="250px" h="250px">
                        <Image
                          src={imageAvatar}
                          objectFit="contain"
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
                              {staff.name}
                            </Heading>
                            <Text
                              fontFamily="Manrope"
                              fontSize="14px"
                              fontWeight="400"
                              color="rgba(2, 29, 55, 0.63);"
                            >
                              {staff.post}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    );
                  })}
                </Grid>
              </Fragment>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Staff;
