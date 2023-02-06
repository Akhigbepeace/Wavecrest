import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import ApplyOnlineForm from "./Form";
import MobileRedirect from "components/molecules/MobileRedirect";
import { Programme } from "./data";

const ApplyOnline = () => {
  const [showCoursePrice, setShowCoursePrice] = useState({
    price: "",
    paymentLink: "",
  });

  const redirects = [
    {
      name: "ADMISSION REQs",
      href: "/admission/admissionRequirements",
    },
    {
      name: "TUITIONS",
      href: "/admission/tuitionAndScholarship",
    },
    {
      name: "HOSTEL",
      href: "/admission/hostel",
    },
    {
      name: "FAQs",
      href: "/admission/faqs",
    },
  ];

  const handleChange = (programme: Programme) => {
    setShowCoursePrice({
      price: programme.price || "",
      paymentLink: programme.paymentLink,
    });
  };

  return (
    <>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/waveimg.png"
        title="APPLY ONLINE"
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
        <Box>
          <Box
            w="88px"
            h="3px"
            mb="10px"
            mt="40px"
            bg="#021D37"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>
          <Heading
            my={{
              xl: "30px",
              "2xl": "30px",
            }}
            mb={{
              sm: "30px",
              md: "30px",
              lg: "30px",
            }}
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize={{
              sm: "24px",
              md: "32px",
              lg: "32px",
              xl: "32px",
              "2xl": "32px",
            }}
            color="#021D37"
          >
            Pre-Registration Form
          </Heading>
        </Box>

        <ApplyOnlineForm
          price={showCoursePrice.price}
          paymentLink={showCoursePrice.paymentLink}
          onChange={handleChange}
          showCoursePrice={showCoursePrice}
        />

        <Text
          fontFamily="Manrope"
          fontSize={{
            sm: "18px",
            md: "24px",
            lg: "24px",
            xl: "24px",
            "2xl": "24px",
          }}
          fontWeight="400"
          my="45px"
        >
          NB: After payment, a google link would be sent to your mail to
          complete the registration
        </Text>
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
        {redirects.map((redirect, index) => {
          return (
            <MobileRedirect
              key={index}
              pageName={redirect.name}
              pageURL={redirect.href}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ApplyOnline;
