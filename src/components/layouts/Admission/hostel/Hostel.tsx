import { Heading, Box, Flex, Button, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import NextLink from "next/link";
import PrimaryImage from "./PrimaryImage";
import MobileRedirect from "components/molecules/MobileRedirect";
import DisplayHostelImages from "./DisplayHostelImages";
import HostelDesc from "../../../../pages/admission/hostelApplication/HostelDesc";

const Hostel = () => {
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
      name: "APPLY ONLINE",
      href: "/admission/applyOnline",
    },
    {
      name: "FAQs",
      href: "/admission/faqs",
    },
  ];
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/hostel1.jpg"
        title="HOSTEL APPLICATION"
      />

      <Box
        p={{
          sm: "35px 20px",
          md: "20px 30px",
          lg: "30px 31px",
          xl: "50px 30px",
          "2xl": "100px 91px",
        }}
        w={{
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1280px",
          "2xl": "1280px",
        }}
        mx="auto"
      >
        <Flex
          alignItems="center"
          display={{
            sm: "block",
            md: "block",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <Flex
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "flex",
              "2xl": "flex",
            }}
            alignItems="center"
          >
            <Box
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
                "2xl": "none",
              }}
            >
              <PrimaryImage />
            </Box>

            <Box
              w={{
                xl: "60%",
                "2xl": "60%",
              }}
            >
              <Box>
                <Box
                  w="88px"
                  h="3px"
                  bg="#021D37"
                  mb="5px"
                  mt="20px"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                ></Box>

                <Box>
                  <Heading
                    fontFamily="Playfair Display"
                    fontSize="32px"
                    fontWeight="700"
                    color="#021D37"
                    display={{
                      sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "block",
                      "2xl": "block",
                    }}
                  >
                    Hostel Application
                  </Heading>

                  <Heading
                    fontFamily="Playfair Display"
                    fontSize="24px"
                    fontWeight="700"
                    color="#021D37"
                    display={{
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "none",
                      "2xl": "none",
                    }}
                  >
                    Apply For A Hostel
                  </Heading>
                </Box>
              </Box>

              <HostelDesc />

              <NextLink
                href="./hostelApplication/HostelApplication"
                passHref
                legacyBehavior
              >
                <Button
                  w="142px"
                  height="46.89px"
                  bg="#021D37"
                  border="none"
                  color="#fff"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="22px"
                  textAlign="center"
                  borderRadius="3px"
                  mt="8px"
                  _hover={{
                    bg: "#020E1B",
                    transition: "all ease 0.4s",
                  }}
                >
                  REGISTER
                </Button>
              </NextLink>
            </Box>

            <Box
              display={{
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
                "2xl": "block",
              }}
            >
              <PrimaryImage />
            </Box>
          </Flex>
        </Flex>

        <DisplayHostelImages />

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
      </Box>
    </Fragment>
  );
};

export default Hostel;
