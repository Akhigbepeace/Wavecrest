import React, { Fragment } from "react";
<<<<<<< HEAD
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
=======
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
import Seventies from "./Responsive Milestone/Seventies";
import Eighties from "./Responsive Milestone/Eighties";
import Nineties from "./Responsive Milestone/Nineties";
import Twenties from "./Responsive Milestone/Twenties";
import TwentyTens from "./Responsive Milestone/TwentyTens";
import MobileSideBar from "components/MobileSideBar";
import { milestones } from "../constants";
<<<<<<< HEAD
import NextLink from "next/link";
import MobilePageBanner from "components/molecules/MobilePageBanner";

const Milestone = () => {
  return (
    <Box>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/aboutGallery3.jpg"
        title="MILESTONE"
      />
=======
import PagesBanner from "components/molecules/PagesBanner";
import MobileRedirect from "components/molecules/MobileRedirect";

const Milestone = () => {
  const redirects = [
    {
      name: "PROFILE",
      url: "/about/profile",
    },
    {
      name: "OUR TEAM",
      url: "/about/ourTeam",
    },
  ];
  return (
    <Box>
      <MobileSideBar />
      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <PagesBanner
          imageURL="/assets/imgs/milestone.jpg"
          pageName="MILESTONE"
        />
      </Box>
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
      <Flex
        p={{
          sm: "50px 20px",
          md: "50px 40px",
          lg: "50px",
          xl: "50px 91px",
          "2xl": "50px 91px",
        }}
        flexDirection="column"
      >
        <Box
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          {milestones.map((milestone, index) => {
            const textToShow = Array.isArray(milestone.achievement)
              ? milestone.achievement.map((values, i) => (
                  <Box key={i}>{values}</Box>
                ))
              : milestone.achievement;

            return (
              <Fragment key={index}>
                <Flex flexDirection="column" alignItems="baseline">
                  <Flex alignItems="baseline" mb="-8px">
                    <Box
                      bg="#021D37"
                      w="20px"
                      h="20px"
                      ml="-9px"
                      borderRadius="100%"
                    ></Box>

                    <Heading
                      fontFamily="Playfair Display"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="43px"
                      color="#021D37"
                      pt="15px"
                      ml="34px"
                    >
                      {milestone.year}
                    </Heading>
                  </Flex>

                  <Box borderLeft="2px solid #EBEDEF" mb="-30px">
                    <Text
                      fontFamily="Manrope"
                      fontSize="24px"
                      fontWeight="400"
                      lineHeight="33px"
                      mb="10px"
                      ml="45px"
                      pt="15px"
                      pb="25px"
                    >
                      {textToShow}
                    </Text>
                  </Box>
                </Flex>
              </Fragment>
            );
          })}
        </Box>

        <Box
          position={"relative"}
          overflow={"hidden"}
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        >
          <Box>
            <Seventies />
            <Eighties />
            <Nineties />
            <Twenties />
            <TwentyTens />
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
<<<<<<< HEAD
            <Flex justifyContent="space-evenly">
              <NextLink href="/about/profile" legacyBehavior passHref>
                <Link
                  fontFamily="Manrope"
                  fontSize="18px"
                  py="25px"
                  mb="52px"
                  textAlign="center"
                  fontWeight="700"
                  bg="#EEE"
                >
                  PROFILE
                </Link>
              </NextLink>

              <NextLink href="/about/ourTeam" legacyBehavior passHref>
                <Link
                  fontFamily="Manrope"
                  fontSize="18px"
                  py="25px"
                  mb="52px"
                  textAlign="center"
                  fontWeight="700"
                  bg="#EEE"
                >
                  OUR TEAM
                </Link>
              </NextLink>
            </Flex>
=======
            {redirects.map((redirect, index) => {
              return (
                <MobileRedirect
                  key={index}
                  pageName={redirect.name}
                  pageURL={redirect.url}
                />
              );
            })}
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Milestone;
