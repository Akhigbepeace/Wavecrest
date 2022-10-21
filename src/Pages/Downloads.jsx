import { Box, Image, Heading, Text, Grid, Button } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import React from "react";
import contactpic from "assets/Images/contact.png";
import JsFileDownloader from "js-file-downloader";
import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";

const Downloads = () => {
  const donwloadables = [
    {
      name: "E-Profile",
      fileUrl: "/documents/SCHOOL PROFILE.pdf",
    },
    {
      name: "HND Programme brochure",
      fileUrl: "/documents/HIGHER NATIONAL DIPLOMA (HND) IN HOSP (1).pdf",
    },
    {
      name: "ND Programme brochure",
      fileUrl: "/documents/NATIONAL DIPLOMA (ND) IN HOSP (2).pdf",
    },
    {
      name: "Certificate Course brochure",
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      name: "CTH FLIER",
      fileUrl: "/documents/tch flier.png",
    },
    {
      name: "Pch flier",
      fileUrl: "/documents/P.C.H. flier.png",
    },
    {
      name: "cth brochure",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      name: "nsq brochure",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      name: "programme fliers",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      name: "cth brochure",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      name: "nsq brochure",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      name: "programme fliers",
      fileUrl: "/documents/Ojumo House.pdf",
    },
  ];

  return (
    <Box>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={contactpic} h="100%" w="100%" objectFit="cover" />

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
            fontSize={{
              sm: "34px",
              md: "50px",
              lg: "50px",
              xl: "60px",
              "2xl": "60px",
            }}
            textAlign="center"
            mt="242px"
          >
            DOWNLOADS
          </Text>
        </Box>
      </Box>

      <Box
        m="0 auto"
        px={{
          sm: "20px",
          md: "20px",
          lg: "30px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
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
            Wavecrestsssss offers accomodation to its students. We have a two
            well furnished hostels orem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </Box>

        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "repeat(2, auto)",
            lg: "repeat(2, auto)",
            xl: "repeat(3, auto)",
            "2xl": "repeat(3, auto)",
          }}
          gridGap="20px"
          mb="100px"
        >
          {donwloadables.map((donwloadable, index) => {
            return (
              <Button
                key={index}
                bg="#EBEDEF"
                color="#021D37"
                fontFamily="Manrope"
                fontWeight="700"
                fontSize="20px"
                py="20px"
                border="3px solid #021D37"
                textTransform="uppercase"
                onClick={() =>
                  new JsFileDownloader({ url: donwloadable.fileUrl })
                }
                _hover={{
                  bg: "#EDEEFF",
                }}
              >
                {donwloadable.name}
              </Button>
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
