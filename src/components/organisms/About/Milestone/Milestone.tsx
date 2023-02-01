import React, { Fragment } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Seventies from "./Responsive Milestone/Seventies";
import Eighties from "./Responsive Milestone/Eighties";
import Nineties from "./Responsive Milestone/Nineties";
import Twenties from "./Responsive Milestone/Twenties";
import TwentyTens from "./Responsive Milestone/TwentyTens";
import MobileSideBar from "components/MobileSideBar";
import { milestones } from "../constants";
import MobileRedirect from "components/molecules/MobileRedirect";
import MobilePageBanner from "components/molecules/MobilePageBanner";

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

      <MobilePageBanner
        imageURL="/assets/imgs/milestone.jpg"
        title="MILESTONE"
      />

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

          <Flex
            mt="100px"
            justifyContent="center"
            display={{
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "none",
              "2xl": "none",
            }}
          >
            {redirects.map((redirect, index) => {
              return (
                <MobileRedirect
                  key={index}
                  pageName={redirect.name}
                  pageURL={redirect.url}
                />
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Milestone;
