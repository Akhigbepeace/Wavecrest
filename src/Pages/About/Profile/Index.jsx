import { Box, Text, Heading, Button } from "@chakra-ui/react";
import React, { Fragment } from "react";
import OurStory from "./OurStory";

import Gallery from "Pages/About/Profile/Gallery";
import OurPhilosophy from "./OurPhilosophy";
import OurClout from "./OurClout";

const Profile = () => {
  return (
    <Fragment>
      <OurStory />

      <OurPhilosophy />

      <OurClout />

      <Box
        bg="#EBEDEF"
        p={{
          sm: "50px 20px",
          md: "50px 40px",
          lg: "50px",
          xl: "50px 91px",
          "2xl": "50px 90px",
        }}
      >
        <Box>
          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="24px"
            color="rgba(2, 29, 55, 0.63)"
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            Our Swags
          </Text>

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
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
              mb="24px"
            >
              Gallery
            </Heading>
          </Box>
        </Box>

        <Box>
          <Gallery />
        </Box>
      </Box>

      <Box
        textAlign={{
          sm: "left",
          md: "left",
          lg: "left",
          xl: "center",
          "2xl": "center",
        }}
        my="55px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "20px",
        }}
      >
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
          mb="22px"
        >
          Want to get a copy of our e-profile
        </Heading>

        <Button
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="20px"
          textAlign="center"
          p="10px 30px"
          bg="#021D37"
          borderRadius="3px"
          color="#fff"
          _hover={{
            bg: " #020E1B",
          }}
        >
          Download Here
        </Button>
      </Box>
    </Fragment>
  );
};

export default Profile;
