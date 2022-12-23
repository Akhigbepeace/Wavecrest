import { Box, Heading, Image, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import ResponsiveManagement from "pageLayouts/about/Our Team/Media Query/Responsive Management";
import ResponsiveBoard from "pageLayouts/about/Our Team/Media Query/Responsive Board";
import ResponsiveStaff from "pageLayouts/about/Our Team/Media Query/Responsive Staff";
import { useRouter } from "next/router";

const Management = () => {
  const imageAvatar = "/assets/imgs/membersofthemanagement.png";
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

  const router = useRouter();
  const profile = (e) => {
    e.preventDefault();
    router.push("/about/profile");
  };
  const milestone = (e) => {
    e.preventDefault();
    router.push("/about/milestone");
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
            <Box key={index} w={{ xl: "230px", "2xl": "250px" }} mr="10px">
              <Image src={management.image} alt="management" w="100%" borderRadius="5px" />

              <Flex
                alignItems="center"
                bg="rgba(255, 255, 255, 67%)"
                p="10px 25px"
                position="relative"
                top={{ xl: "-60px", "2xl": "-60px" }}
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
                    fontSize={{ xl: "18x", "2xl": "22px" }}
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
