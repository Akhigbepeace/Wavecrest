import React from "react";
import {
  Box,
  Text,
  Image,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import NextLink from "next/link";
import { shortCourses } from "./constant";
import PeaceImage from "components/atoms/PeaceImage";

const ShortCourses = () => {
  return (
    <Box>
      {shortCourses.map((shortCourse, index) => {
        return (
          <Accordion key={index} allowToggle borderTopColor="#FFF">
            <AccordionItem borderBottom="none">
              {({ isExpanded }) => (
                <Box border="none">
                  <h2>
                    <AccordionButton
                      bg="#EBEDEF"
                      mb="20px"
                      borderRadius="3px"
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
                        }}
                        fontWeight="700"
                      >
                        {shortCourse.linkContent}
                      </Box>
                      {isExpanded ? (
                        <FaChevronCircleUp size="30px" />
                      ) : (
                        <FaChevronCircleDown size="30px" />
                      )}
                    </AccordionButton>
                  </h2>

                  <AccordionPanel>
                    {shortCourse.values.map((value, index) => {
                      return (
                        <Box
                          key={index}
                          mx="auto"
                          h="300px"
                          w={{
                            sm: "100%",
                            md: "600px",
                            lg: "600px",
                          }}
                        >
                          <PeaceImage
                            src={value.imageSrc}
                            alt="tranining"
                            mx="auto"
                            h="274px"
                            w={{
                              sm: "100%",
                              md: "600px",
                              lg: "600px",
                            }}
                            borderRadius="3px"
                          />

                          <Box
                            bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
                            textAlign="center"
                            position="relative"
                            py="40px"
                            bottom={{
                              sm: "212px",
                              md: "206px",
                              lg: "206px",
                            }}
                          >
                            <NextLink
                              href="/academics/training"
                              passHref
                              legacyBehavior
                            >
                              <Heading
                                color="#fff"
                                fontWeight="700"
                                fontSize="20px"
                                fontFamily="Manrope"
                                textTransform="uppercase"
                              >
                                {value.captionHeading}
                              </Heading>
                            </NextLink>

                            <Text
                              lineHeight="27px"
                              color="#EBEDEF"
                              mb="28px"
                              fontFamily="Manrope"
                              fontSize={{
                                sm: "14px",
                                md: "14px",
                                lg: "14px",
                              }}
                            >
                              {value.captionTime}
                            </Text>

                            <NextLink
                              href="/admission/applyOnline"
                              legacyBehavior
                              passHref
                            >
                              <Text
                                mx="auto"
                                borderRadius="5px"
                                fontFamily="Manrope"
                                fontWeight="700"
                                fontSize="16px"
                                lineHeight="22px"
                                textTransform="uppercase"
                                bg={{
                                  sm: "none",
                                  md: "none",
                                  lg: "none",
                                  xl: "#FFF",
                                  "2xl": "#FFF",
                                }}
                                color={{
                                  sm: "#FFF",
                                  md: "#FFF",
                                  lg: "#FFF",
                                  xl: "#021d37",
                                  "2xl": "#021d37",
                                }}
                                w="142px"
                                height="46.89px"
                                p="10px 25px"
                                border={{
                                  sm: "2px solid #FFF",
                                  md: "2px solid #FFF",
                                  lg: "2px solid #FFF",
                                  xl: "none",
                                  "2xl": "none",
                                }}
                                _hover={{
                                  textDecoration: "none",
                                  cursor: "pointer",
                                }}
                              >
                                {value.captionButton}
                              </Text>
                            </NextLink>
                          </Box>
                        </Box>
                      );
                    })}
                  </AccordionPanel>
                </Box>
              )}
            </AccordionItem>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default ShortCourses;
