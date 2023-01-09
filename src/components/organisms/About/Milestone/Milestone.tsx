import React, { Fragment } from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import Seventies from "./Responsive Milestone/Seventies";
import Eighties from "./Responsive Milestone/Eighties";
import Nineties from "./Responsive Milestone/Nineties";
import Twenties from "./Responsive Milestone/Twenties";
import TwentyTens from "./Responsive Milestone/TwentyTens";
import MobileSideBar from "components/MobileSideBar";
import { milestones } from "../constants";
import Banner from "./Banner";
import NextLink from "next/link";

const Milestone = () => {
  return (
    <Box>
      <MobileSideBar />

      <Banner />

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
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Milestone;
