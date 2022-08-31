import React from "react";
import {
  Box,
  Text,
  Link,
  Image,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import studyProgrammes1 from "assets/Images/studyprogrammes1.png";
import studyProgrammes2 from "assets/Images/studyprogrammes2.png";
import studyProgrammes4 from "assets/Images/studyprogrammes4.png";

const ShortCourses = () => {
  const shortCourses = [
    {
      linkContent: "SHORT COURSES",
      values: [
        {
          imageSrc: studyProgrammes4,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "1 Year | Part Time",
          captionButton: "Apply Now",
        },
        {
          imageSrc: studyProgrammes1,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "1 Year | Part Time",
          captionButton: "Apply Now",
        },
        {
          imageSrc: studyProgrammes2,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "1 Year | Part Time",
          captionButton: "Apply Now",
        },
      ],
    },
  ];

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
                        <FaChevronCircleDown size="30px" />
                      ) : (
                        <FaChevronCircleUp size="30px" />
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
                            sm: "300px",
                            md: "600px",
                            lg: "900px",
                          }}
                        >
                          <Image
                            src={value.imageSrc}
                            alt="coffee"
                            mx="auto"
                            position="absolute"
                            objectFit="cover"
                            h="274px"
                            w={{
                              sm: "300px",
                              md: "600px",
                              lg: "900px",
                            }}
                            borderRadius="3px"
                          />

                          <Box
                            bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
                            textAlign="center"
                            position="relative"
                            py="40px"
                            bottom={{
                              sm: "-62px",
                              md: "-90px",
                              lg: "-85px",
                            }}
                          >
                            <Heading
                              color="#fff"
                              fontWeight="700"
                              fontSize="20px"
                              fontFamily="Manrope"
                            >
                              {value.captionHeading}
                            </Heading>

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

                            <Link
                              href="/admission/applyOnline"
                              borderRadius="5px"
                              fontFamily="Manrope"
                              fontWeight="700"
                              h="52px"
                              bg="none"
                              color="#FFF"
                              w={{
                                sm: "110px",
                                md: "110px",
                                lg: "150px",
                              }}
                              p="10px 25px"
                              border="2px solid #FFF"
                              fontSize={{
                                sm: "16px",
                                md: "16px",
                                lg: "20px",
                              }}
                              _hover={{
                                textDecoration: "none",
                                bg: "#EBEDEF",
                              }}
                            >
                              {value.captionButton}
                            </Link>
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
