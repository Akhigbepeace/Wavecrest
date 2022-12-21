import { Box, Grid, Flex, Text, Heading, Button } from "@chakra-ui/react";
import React, { Fragment } from "react";
import styled from "@emotion/styled";
import ShowcaseSlider from "components/ShowcaseSlider";
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const showcase1 = "/assets/imgs/Showcase1.png";
const showcase2 = "/assets/imgs/Showcase2.png";
const showcase3 = "/assets/imgs/Showcase4.png";
const showcase4 = "/assets/imgs/Showcase3.jpg";

const waveVid = "/assets/imgs/wavevid.mp4";

const showcaseGallery = [showcase1, showcase2, showcase4, showcase3];

const Showcase = () => {
  const router = useRouter();

  const Redirect = (e) => {
    e.preventDefault();

    router.push("/about/profile");
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
        <VideoHolder>
          <Box
            h="381px"
            w="100%"
            position="relative"
            zIndex="0"
            className="react-holder"
          >
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
                Nigeria&lsquo;s Premier Hospitality Monotechnic
              </Text>
            </Flex>
          </Box>
        </VideoHolder>
        <Grid templateColumns="1fr 1fr" gap="8px">
          {showcaseGallery.map((gallery, index) => {
            return (
              <Box key={index} h="187px" position={"relative"}>
                <Image
                  src={gallery}
                  alt="Wavecrest Images"
                  layout="fill"
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
              }}
              fontFamily="Playfair Display"
              fontWeight="700"
              lineHeight="32px"
              w={{
                sm: "295px",
                md: "350px",
                lg: "400px",
              }}
            >
              Nigeria&lsquo;s Premier Hospitality Monotechnic
            </Heading>

            <Text
              fontSize="14px"
              fontFamily="Manrope"
              fontWeight="400"
              lineHeight="19px"
              my="15px"
            >
              In the last 40 years we have consistently trained individuals and
              produced graduates who are in very high demand in the Industry.
              100% of our graduates are decently employed within 3 months after
              graduation. About 40% become entrepreneurs while working and even
              employers of labour soon after graduation. Presently, Hospitality
              Education is a guarantee of employment in Nigeria.
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
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
const VideoHolder = styled.div`
  video {
    object-fit: cover;
  }
`;

export default Showcase;
