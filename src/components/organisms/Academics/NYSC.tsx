import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import Form from "./form";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import MobileRedirect from "components/molecules/MobileRedirect";
import { navigateTo } from "./constants";

const NYSC = () => {
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner imageURL="/assets/imgs/nyscBg.png" title="NYSC" />

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
              Register for NYSC
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "24px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            color="#021D37"
            lineHeight="33px"
            my="24px"
          >
            Our HND 2 graduates go for the National Youth Service &#40;NYSC&#41;
          </Text>
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

export default NYSC;
