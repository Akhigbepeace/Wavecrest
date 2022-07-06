import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  // AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import React, { Fragment } from "react";

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
      <Heading
        fontFamily="Playfair Display"
        fontWeight="700"
        fontSize="32px"
        color="#021D37"
        px="91px"
        my="50px"
      >
        Frequently Asked Questions
      </Heading>

      {FAQs.map((faq, index) => {
        return (
          <Accordion key={index} allowToggle borderTopColor="#FFF">
            <AccordionItem borderBottom="none">
              {({ isExpanded }) => (
                <Box mx="91px" border="none">
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
                        fontSize="24px"
                        fontWeight="700"
                      >
                        {faq.question}
                      </Box>
                      {isExpanded ? (
                        <FaChevronCircleDown size="30px" />
                      ) : (
                        <FaChevronCircleUp size="30px" />
                      )}
                    </AccordionButton>
                  </h2>

                  <AccordionPanel
                    p="10px 57px"
                    fontFamily="Manrope"
                    fontSize="24px"
                    fontWeight="400"
                    lineHeight="33px"
                  >
                    {faq.answer}
                  </AccordionPanel>
                </Box>
              )}
            </AccordionItem>
          </Accordion>
        );
      })}
    </Fragment>
  );
};

export default FAQs;
