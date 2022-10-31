import {
  Box,
  Text,
  Heading,
  Button,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import OurStory from "./OurStory";
import JsFileDownloader from "js-file-downloader";
import about from "assets/Images/aboutDesktopBanner.jpg";
import Gallery from "Pages/About/Profile/Gallery";
import OurPhilosophy from "./OurPhilosophy";
import OurClout from "./OurClout";
import { useNavigate } from "react-router-dom";
import MobileSideBar from "components/MobileSideBar";

const Profile = () => {
  const fileUrl = "/documents/SCHOOL PROFILE.pdf";

  const navigate = useNavigate();

  const milestone = (e) => {
    e.preventDefault();
    navigate("/about/milestone", { replace: true });
  };
  const ourTeam = (e) => {
    e.preventDefault();
    navigate("/about/ourTeam", { replace: true });
  };

  return (
    <Fragment>
      <MobileSideBar />

      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={about} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            PROFILE
          </Text>
        </Box>
      </Box>

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

        <Link
          href="/documents/SCHOOL PROFILE.pdf"
          target="_blank"
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
        </Link>
      </Box>

      <Box
        mt="100px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Flex justifyContent="space-evenly">
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
          <Button
            fontFamily="Manrope"
            fontSize="18px"
            py="25px"
            mb="52px"
            textAlign="center"
            fontWeight="700"
            bg="#EEE"
            onClick={(e) => ourTeam(e)}
          >
            OUR TEAM
          </Button>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Profile;
