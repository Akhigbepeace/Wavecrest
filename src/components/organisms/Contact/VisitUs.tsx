import { Box, Heading, Grid, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { enquires } from "./constants";

const VisitUs = () => {
  return (
    <Box
      bg={{
        sm: "#EBEDEF",
        md: "#EBEDEF",
        lg: "none",
        xl: "none",
        "2xl": "none",
      }}
      px={{
        sm: "20px",
        md: "20px",
        lg: "0",
        xl: "0",
        "2xl": "0",
      }}
      mb={{
        sm: "100px",
        md: "100px",
        lg: "0",
        xl: "0",
        "2xl": "0",
      }}
    >
      <Box>
        <Box
          w="88px"
          bg="#021D37"
          h="3px"
          mt="40px"
          mb="5px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Heading mb="10px" fontFamily="Playfair Display">
          Visit Us
        </Heading>
      </Box>

      <Box
        w={{
          sm: "335",
          md: "335",
          lg: "665",
          xl: "665",
          "2xl": "665",
        }}
      >
        <iframe
          title="Wavecrest College of Hospitality"
          width="100%"
          height="364"
          frameBorder="0"
          scrolling="no"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=665&amp;height=364&amp;hl=en&amp;q=75%20Adisa%20Bashua%20Street,%20Off%20Adelabu%20Street,%20Surulere,%20Lagos%20State,%20Nigeria.%20%20+(Wavecrest)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />

        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=1e38e70d8c3f5fe4769bac191f721c59a7bdb19c"
        ></script>

        <Text mt="10px" fontFamily="Manrope" fontSize="16px" fontWeight="400">
          75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria.
        </Text>
      </Box>

      <Grid
        gridTemplateColumns={{
          sm: "1fr",
          md: "auto auto",
          lg: "auto auto",
          xl: "auto auto",
          "2xl": "auto auto",
        }}
        mt="30px"
      >
        {enquires.map((enquiry, index) => {
          const multiplePhoneNum = Array.isArray(enquiry.phoneNumber)
            ? enquiry.phoneNumber.map((number, index) => {
                return <Text key={index}>{number}</Text>;
              })
            : enquiry.phoneNumber;
          return (
            <Flex key={index} flexDirection="column" mb="30px" mr="30px">
              <Heading
                mb="6px"
                fontFamily="Playfair Display, serif"
                fontWeight="700"
                fontSize="22px"
                color="#021D37"
              >
                {enquiry.name}
              </Heading>
              <Box
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="18px"
                color="#021D37"
              >
                <Flex>
                  <Text> Phone: &nbsp; </Text>
                  <Text>{multiplePhoneNum}</Text>
                </Flex>

                <Flex>
                  <Text>Email: &nbsp; </Text>
                  <Text w="196px">{enquiry.email}</Text>
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default VisitUs;
