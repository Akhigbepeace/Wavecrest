import { Box, Image, Heading, Text, Grid } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import React from "react";
import contactpic from "assets/Images/contact.png";

import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";

const Downloads = () => {
  const donwloadables = [
    {
      name: "cth brochure",
    },
    {
      name: "nsq brochure",
    },
    {
      name: "programme fliers",
    },
    {
      name: "cth brochure",
    },
    {
      name: "nsq brochure",
    },
    {
      name: "programme fliers",
    },
    {
      name: "cth brochure",
    },
    {
      name: "nsq brochure",
    },
    {
      name: "programme fliers",
    },
  ];
  return (
    <Box>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={contactpic} h="100%" w="100%" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize="60px"
            textAlign="center"
            mt="242px"
          >
            DOWNLOADS
          </Text>
        </Box>
      </Box>

      <Box w="1340px" m="0 auto" px="91px">
        <Box>
          <Heading
            mt="60px"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
          >
            Downloads
          </Heading>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="24px"
            lineHeight="33px"
            color="#021D37"
            mt="24px"
            mb="30px"
          >
            Wavecrest offers accomodation to its students. We have a two well
            furnished hostels orem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
        </Box>

        <Grid gridTemplateColumns="repeat(3, auto)" mb="100px">
          {donwloadables.map((donwloadable) => {
            return (
              <Heading
                bg="#EBEDEF"
                color="#021D37"
                fontFamily="Manrope"
                fontWeight="700"
                fontSize="30px"
                py="20px"
                w="360px"
                mb="15px"
                textAlign="center"
                cursor="pointer"
                border="5px solid #021D37"
                textTransform="uppercase"
                _hover={{
                  bg: "#EDEEFF",
                }}
              >
                {donwloadable.name}
              </Heading>
            );
          })}
        </Grid>
      </Box>

      <Footer />
      <FooterCopywright />
    </Box>
  );
};
export default Downloads;
