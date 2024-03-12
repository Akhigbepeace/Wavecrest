import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";

import Form from "./Form";
import VisitUs from "./VisitUs";
import QuickLinks from "./QuickLinks";

const Contact = () => {
  return (
    <Box pt="50px">
      <Grid
        gridTemplateColumns={{
          sm: "1fr",
          md: "1fr",
          lg: "1fr",
          xl: "auto auto",
          "2xl": "auto auto",
        }}
        gridGap="10px"
        w={{
          xl: "1100px",
          "2xl": "1100px",
        }}
        mx="auto"
      >
        <Form />

        <VisitUs />
      </Grid>

      <Box
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
        w={{
          xl: "1300px",
          "2xl": "1300px",
        }}
        mx="auto"
        px={{
          sm: "100px",
          md: "100px",
          lg: "30px",
          xl: "91px",
          "2xl": "91px",
        }}
        mb="100px"
      >
        <Heading
          m="22px 0"
          color="#021D37"
          fontFamily="Playfair Display, serif"
          fontSize="40px"
          fontWeight="700"
          lineHeight="53px"
        >
          Quick Links
        </Heading>

        <QuickLinks />
      </Box>
    </Box>
  );
};

export default Contact;
