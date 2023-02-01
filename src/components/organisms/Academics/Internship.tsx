import {
  Heading,
  Box,
  Text,
  Grid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/MobileSideBar";
import Form from "./form";
import MobileRedirect from "components/molecules/MobileRedirect";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import { internshipCompanies } from "./constants";

const Internship = () => {
  const navigateTo = [
    {
      name: "PROGRAMMES",
      href: "/academics/programmes",
    },
    {
      name: "TRAINING",
      href: "/academics/training",
    },
    {
      name: "NYSC",
      href: "/academics/nysc",
    },
  ];

  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/studyprogramme.jpg"
        title="INTERNSHIP"
      />

      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
        mt="50px"
      >
        <Box>
          <Box>
            <Box
              w="88px"
              h="3px"
              bg="#021D37"
              mt={{
                sm: "60px",
                md: "60px",
                lg: "60px",
                xl: "none",
                "2xl": "none",
              }}
              mb="10px"
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
            >
              Apply for Internship
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "20px",
              lg: "20px",
              xl: "20px",
              "2xl": "20px",
            }}
            lineHeight="33px"
            color="#021D37"
            my="24px"
          >
            The National Board for Technical Education &#40;NBTE&#41; requires
            that students go for an internship. The Industrial Training
            &#40;IT&#41; enables students to put into practice, in the real
            world of work, the theoretical and practical knowledge gained in the
            College in the areas of Front Office, Food &#38; Beverage
            Production, Food &#38; Beverage Service, Housekeeping and any other
            relevant department. <br /> <br /> Over the years, we have built our
            industry partnership with renowned organizations like:
          </Text>

          <UnorderedList>
            <Grid
              gridTemplateColumns={{
                sm: "repeat(1, auto)",
                md: "repeat(2, auto)",
                lg: "repeat(3, auto)",
                xl: "repeat(4, auto)",
                "2xl": "repeat(4, auto)",
              }}
              gridGap="20px"
              my="24px"
            >
              {internshipCompanies.map((internshipCompany, index) => {
                return (
                  <ListItem
                    key={index}
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="20px"
                    color="#021D37"
                  >
                    {internshipCompany}
                  </ListItem>
                );
              })}
            </Grid>
          </UnorderedList>
        </Box>

        <Form />
      </Box>

      <Grid
        justifyContent="center"
        gridTemplateColumns={{
          sm: "repeat(2, auto)",
          md: "repeat(3, auto)",
          lg: "repeat(3, auto)",
        }}
        mt="100px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
        }}
      >
        {navigateTo.map((redirect, index) => {
          return (
            <MobileRedirect
              key={index}
              pageName={redirect.name}
              pageURL={redirect.href}
            />
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Internship;
