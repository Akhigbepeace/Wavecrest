import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Grid,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import { questions } from "./constants";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import MobileRedirect from "components/molecules/MobileRedirect";

const FAQs = () => {
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
      name: "HOSTEL",
      href: "/admission/hostel",
    },
  ];
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner imageURL="/assets/imgs/waveimg.png" title="FAQs" />

      <Box>
        <Box
          px={{
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "91px",
            "2xl": "91px",
          }}
          my={{
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "50px",
            "2xl": "50px",
          }}
        >
          <Box
            w="88px"
            h="3px"
            bg="#021D37"
            mb="10px"
            mt="50px"
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
            fontSize={{
              sm: "21px",
              md: "25px",
              lg: "28px",
              xl: "32px",
              "2xl": "32px",
            }}
            color="#021D37"
          >
            Frequently Asked Questions
          </Heading>
        </Box>

        {questions.map((faq, index) => {
          return (
            <Accordion key={index} allowToggle borderTopColor="#FFF">
              <AccordionItem borderBottom="none">
                {({ isExpanded }) => (
                  <Box
                    mx={{
                      sm: "20px",
                      md: "20px",
                      lg: "50px",
                      xl: "50px",
                      "2xl": "50px",
                    }}
                    border="none"
                  >
                    <h2>
                      <AccordionButton
                        bg="#EBEDEF"
                        mb="20px"
                        borderTop="none"
                        _expanded={{ bg: "#021D37", color: "white" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          p="10px "
                          fontFamily="Manrope"
                          fontSize={{
                            sm: "18px",
                            md: "20px",
                            lg: "22px",
                            xl: "24px",
                            "2xl": "24px",
                          }}
                          fontWeight="700"
                        >
                          {faq.question}
                        </Box>
                        {isExpanded ? (
                          <FaChevronCircleUp size="30px" />
                        ) : (
                          <FaChevronCircleDown size="30px" />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      ml="50px"
                      fontFamily="Manrope"
                      fontSize={{
                        sm: "18px",
                        md: "20px",
                        lg: "22px",
                        xl: "22px",
                        "2xl": "22px",
                      }}
                      fontWeight="400"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </Box>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}

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

export default FAQs;
