import { Box, Heading, Image, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";
import registrar from "assets/Images/registrar.png";
import ResponsiveManagement from "Pages/About/Our Team/Media Query/Responsive Management";
import ResponsiveBoard from "Pages/About/Our Team/Media Query/Responsive Board";
import ResponsiveStaff from "Pages/About/Our Team/Media Query/Responsive Staff";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const profile = (e) => {
    e.preventDefault();
    navigate("/about/profile", { replace: true });
  };
  const milestone = (e) => {
    e.preventDefault();
    navigate("/about/milestone", { replace: true });
  };

  return (
    <Box
      px={{
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "0px",
        "2xl": "0px",
      }}
    >
      <Heading
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="700"
        color="#021D37"
        mb="30px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        Management
      </Heading>

      <Flex
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        {managements.map((management, index) => {
          return (
            <Box key={index} w="250px" h="250px" mr="10px">
              <Image
                src={management.image}
                objectFit="contain"
                borderRadius="5px"
              />

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
                    {management.name}
                  </Heading>
                  <Text
                    fontFamily="Manrope"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(2, 29, 55, 0.63);"
                  >
                    {management.post}
                  </Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Box>
          <ResponsiveBoard />
          <ResponsiveManagement />
          <ResponsiveStaff />
        </Box>

        <Box mt="100px">
          <Flex justifyContent="space-evenly">
            <Button
              fontFamily="Manrope"
              fontSize="18px"
              py="25px"
              mb="52px"
              textAlign="center"
              fontWeight="700"
              bg="#EEE"
              onClick={(e) => profile(e)}
            >
              PROFILE
            </Button>
            <Button
              fontFamily="Manrope"
              fontSize="18px"
              py="25px"
              mb="52px"
              textAlign="center"
              fontWeight="700"
              bg="#EEE"
              onClick={(e) => milestone(e)}
            >
              MILESTONE
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Management;
