import {
  Box,
  Image,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import React, { Fragment } from "react";
import waveimg from "assets/Images/waveimg.png";

const FAQs = () => {
  const FAQs = [
    {
      question: "What is Wavecrest College",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "What are the programs offered at the college?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question:
        "What are the processes to gain admission to the college National Diploma program?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "What is the Gap-year programme?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Is the Gap-year same as Certificate programme?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question:
        "Can I use the Gap year program and gain direct entry into the ND program?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question:
        "Must I be a science student to enrol for the either of the programs?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Are males allowed to enrol at the college?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Are married women allowed to enrol for the Programs?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "What are the subjects required to enrol for the ND program?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question:
        "Does the college accept National Diploma Certificate from another Polytechnics to enrol for the HND?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "How much is the Tuition?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Are there accommodation available?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },

    {
      question: "Where is the college situated at?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Can I apply online?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Do the HND students go for NYSC?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Does the Gap year programme require JAMB?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question:
        "What other programmes does the school offer and can I apply for them online?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Is a certificate issued after the courses?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Does the college offer Jobs for her students?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Is the college a Catholic institution?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Does the college go on strike?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question:
        "Apart from the payment of school fees are there other payments that needs to be made?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Contact Number to reach for further enquires?      ",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
    {
      question: "Which program do you have for graduates?",
      answer:
        "The Certificate course is #148,000, National Diploma 1 is #172,000 and Higher National Diploma 1 is #189,000. Medicals - #21,500, Uniform - #22,700 ",
    },
  ];

  return (
    <Fragment>
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={waveimg} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            FAQs
          </Text>
        </Box>
      </Box>

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

        {FAQs.map((faq, index) => {
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
                      p="10px"
                      fontFamily="Manrope"
                      fontSize={{
                        sm: "18px",
                        md: "20px",
                        lg: "22px",
                        xl: "24px",
                        "2xl": "24px",
                      }}
                      fontWeight="400"
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
    </Fragment>
  );
};

export default FAQs;
