import { Box, Image, Text, Link, Heading } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { paths } from "config/constants/pages";
import PeaceImage from "components/atoms/PeaceImage";

const studyProgrammes1 = "/assets/imgs/studyprogrammes 2.png";
const studyProgrammes2 = "/assets/imgs/study-programme3.jpg";
const studyProgrammes3 = "/assets/imgs/studyprogramme.jpg";

const objArr = [
  {
    linkContent: "HND IN HOSPITALITY MANAGEMENT",
    values: [
      {
        imageSrc: studyProgrammes1,
        current: false,
        captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
        href: paths.hndProgrammes,
        captionTime: "2 Years | Full Time",
        captionButton: "Apply Now",
      },
    ],
  },

  {
    linkContent: "ND IN HOTEL AND CATERING MANAGEMENT",
    values: [
      {
        imageSrc: studyProgrammes3,
        current: false,
        captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
        href: paths.ndProgramme,
        captionTime: "2 Years | Full Time",
        captionButton: "Apply Now",
      },
    ],
  },

  {
    linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
    values: [
      {
        imageSrc: studyProgrammes2,
        current: true,
        captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
        href: paths.certificateCourses,
        captionTime: "1 Year | Full Time",
        captionButton: "Apply Now",
      },
    ],
  },
];

const Courses = () => {
  return (
    <Box>
      {objArr.map((program, index) => {
        return (
          <Box key={index}>
            <Box>
              {program.values.map((value, index) => {
                return (
                  <Box
                    key={index}
                    mx="auto"
                    h={{
                      sm: "300px",
                      md: "300px",
                      lg: "350px",
                    }}
                    w={{
                      sm: "100%",
                      md: "600px",
                      lg: "600px",
                    }}
                  >
                    <PeaceImage
                      src={value.imageSrc}
                      alt="coffee"
                      mx="auto"
                      h={{
                        sm: "274px",
                        md: "274px",
                        lg: "274px",
                      }}
                      w={{
                        sm: "100%",
                        md: "600px",
                        lg: "900px",
                      }}
                      borderRadius={{
                        sm: "3px",
                        md: "3px",
                        lg: "3px",
                      }}
                    />

                    <Box
                      bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
                      textAlign="center"
                      position="relative"
                      py="40px"
                      bottom={{
                        sm: "212px",
                        md: "182px",
                        lg: "184px",
                      }}
                    >
                      <NextLink href={value.href} legacyBehavior passHref>
                        <Link>
                          <Heading
                            color="#fff"
                            fontWeight="700"
                            px={{
                              sm: "20px",
                              md: "20px",
                              lg: "20px",
                            }}
                            fontSize={{
                              sm: "20px",
                              md: "20px",
                              lg: "20px",
                            }}
                            fontFamily={{
                              sm: "Manrope",
                              md: "Manrope",
                              lg: "Playfair Display",
                              xl: "Playfair Display",
                              "2xl": "Playfair Display",
                            }}
                          >
                            {value.captionHeading}
                          </Heading>
                        </Link>
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
                          xl: "20px",
                          "2xl": "20px",
                        }}
                      >
                        {value.captionTime}
                      </Text>

                      <Link
                        href="/admission/applyOnline"
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
                        _hover={{ textDecoration: "none", bg: "#EBEDEF" }}
                      >
                        {value.captionButton}
                      </Link>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Courses;
