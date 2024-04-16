import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import React from "react";
import NextLink from "next/link";

const ScholarshipAccordion = () => {
  return (
    <Accordion allowToggle borderTopColor="#FFF">
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
                <Heading
                  flex="1"
                  textAlign="left"
                  fontFamily="Playfair Display"
                  fontSize="28px"
                  fontWeight="700"
                  my="17px"
                  pr="100px"
                >
                  Scholarships
                </Heading>

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
              <Text
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="24px"
                lineHeight="33px"
              >
                For over 40 years, we have constantly trained girls and produced
                graduates who are in very High demand in the Hospitality
                Industry. In order to assist those who would like to pursue a
                career in Hospitality but are unable to afford the complete
                tuition fees, Wavecrest College seeks the collaboration of
                well-meaning Individuals or Corporate bodies in order to train
                these young ladies through the Scholarship fund.
              </Text>

              <Box>
                <Heading
                  fontFamily="Manrope"
                  fontWeight="700"
                  fontSize="24px"
                  lineHeight="43px"
                  mt="37px"
                >
                  ELIGIBILITY
                </Heading>

                <Box
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="24px"
                  lineHeight="33px"
                >
                  <Text>
                    Students must meet the following criteria in order to
                    qualify for Scholarship:
                  </Text>

                  <UnorderedList>
                    <ListItem>Proof of inability to pay complete fees</ListItem>

                    <ListItem>High performance in admission tests</ListItem>

                    <ListItem>
                      GP in semester performance not less than 2.5
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>

              <Box
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="24px"
                lineHeight="33px"
                mt="37px"
              >
                <Heading
                  fontFamily="Manrope"
                  fontWeight="700"
                  fontSize="24px"
                  lineHeight="43px"
                  mb="7px"
                >
                  WAVECREST COLLEGE OF HOSPITALITY SCHOLARSHIP FUND CATEGORIES
                </Heading>

                <UnorderedList>
                  <ListItem>
                    CORPORATE SCHOLARSHIP <br /> Who gives? Any registered
                    organisation
                  </ListItem>
                  <ListItem>
                    INDIVIDUAL OR FAMILY SCHOLARSHIP <br /> Who gives? Any
                    Individual or Family
                  </ListItem>
                  <ListItem>
                    COMMON FUND SCHOLARSHIP <br /> Who gives? Any Individual
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box p="51px 91px">
                <Heading
                  fontFamily="Playfair Display"
                  fontWeight="700"
                  fontSize="32px"
                  lineHeight="43px"
                  mb="20px"
                >
                  You can Support the Scholarship Scheme by following the link
                  below:
                </Heading>

                <NextLink href="/support" passHref legacyBehavior>
                  <Text
                    bg="#021D37"
                    p="10px"
                    w="142px"
                    color="#FFF"
                    borderRadius="5px"
                    fontFamily="Open Sans"
                    fontWeight="700"
                    fontSize="17px"
                    textAlign="center"
                    cursor="pointer"
                    _hover={{
                      textDecoration: "none",
                      bg: "#020E1B",
                    }}
                  >
                    SUPPORT US
                  </Text>
                </NextLink>
              </Box>
            </AccordionPanel>
          </Box>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default ScholarshipAccordion;
