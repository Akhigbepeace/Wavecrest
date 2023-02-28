import { Heading, Box, Button } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import Footer from "components/organisms/Footer/Footer";
import PagesBanner from "components/molecules/PagesBanner";
import NextLink from "next/link";
import HostelApplicationForm from "./HostelApplicationForm";
import HostelDesc from "./HostelDesc";

const HostelApplication = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />

      <PagesBanner
        imageURL="/assets/imgs/hostel2.jpg"
        pageName="HOSTEL APPLICATION"
      />

      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <NextLink href="/admission/hostel" passHref legacyBehavior>
          <Button
            fontFamily="Manrope"
            fontSize="18px"
            py="25px"
            mt="20px"
            mb="52px"
            fontWeight="700"
            bg="#EEE"
          >
            <FaChevronLeft size="20px" />
            Back To Hostel
          </Button>
        </NextLink>

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
              Apply for Hostel
            </Heading>
          </Box>

          <HostelDesc />
        </Box>

        <HostelApplicationForm />
      </Box>

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
      />
    </Fragment>
  );
};

HostelApplication.requireAuth = true;

export default HostelApplication;
