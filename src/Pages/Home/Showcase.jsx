import {
  Box,
  Grid,
  Image,
  Flex,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import showcase1 from "assets/Images/Showcase1.png";
import showcase2 from "assets/Images/Showcase2.png";
import showcase3 from "assets/Images/Showcase3.png";
import showcase4 from "assets/Images/Showcase4.png";
import waveVid from "assets/Images/wavevid.mp4";
import ShowcaseSlider from "components/ShowcaseSlider";

const showcaseGallery = [showcase1, showcase2, showcase3, showcase4];

const Showcase = () => {
  const navigate = useNavigate();

  const Redirect = (e) => {
    e.preventDefault();

    navigate("/about/profile", { replace: true });
  };

  return (
    <Fragment>
      <Grid
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "grid",
          "2xl": "grid",
        }}
        templateColumns="1fr 1fr"
        gap="8px"
      >
        <Box h="100%" position="relative" zIndex="0">
          <ReactPlayer
            url={waveVid}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
          <Flex
            flexDirection="column"
            justifyContent="end"
            textAlign="left"
            bg="rgba(0,24,71, 0.6)"
            color="white"
            pb="25px"
            pl="91px"
            bottom="0"
            right="0"
            position="absolute"
            w="100%"
            h="100%"
          >
            <Heading
              fontSize="60px"
              fontFamily="Visual Hollow Script"
              fontWeight="400"
            >
              Study In
            </Heading>

            <Text
              fontFamily="Playfair Display"
              fontSize="35px"
              fontWeight="700"
              lineHeight="43px"
              w={{
                "2xl": "600px",
              }}
            >
              NIGERIA'S PREMIERE HOSPITALITY MONOTECHNIC
            </Text>
          </Flex>
        </Box>

        <Grid templateColumns="1fr 1fr" gap="8px">
          {showcaseGallery.map((gallery, index) => {
            return (
              <Box h="100%" key={index}>
                <Image
                  src={gallery}
                  alt="Wavecrest Images"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            );
          })}
        </Grid>
      </Grid>

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
          <Box>
            <ShowcaseSlider />
          </Box>

          <Box
            px={{
              sm: "15px",
              md: "15px",
              lg: "15px",
            }}
          >
            <Box bg="#021D37" h="3px" w="88px" mt="20px"></Box>

            <Heading
              fontSize="60px"
              fontFamily="Visual Hollow Script"
              fontWeight="400"
              mt="10px"
              mb="-15px"
            >
              Study In
            </Heading>

            <Heading
              fontSize={{
                sm: "25px",
                md: "30px",
                lg: "40px",
              }}
              fontFamily="Playfair Display"
              fontWeight="700"
              lineHeight="32px"
              w={{
                sm: "295px",
                md: "350px",
                lg: "350px",
              }}
            >
              Nigeria's Premiere Hospitality Monotechnic
            </Heading>

            <Text
              fontSize="14px"
              fontFamily="Manrope"
              fontWeight="400"
              lineHeight="19px"
              my="15px"
            >
              Wavecrest College of Hospitality is consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>

            <ReactPlayer
              url={waveVid}
              playing
              loop
              muted
              width="100%"
              height="100%"
            />

            <Button
              w="142px"
              height="46.89px"
              bg="transparent"
              border="2px solid #021D37"
              color="#021D37"
              fontWeight="700"
              fontSize="16px"
              lineHeight="22px"
              textAlign="center"
              textTransform="uppercase"
              mt="14px"
              mb="55px"
              onClick={(e) => Redirect(e)}
              _hover={{
                bg: "#020E1B",
                transition: "all ease 0.4s",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Showcase;
