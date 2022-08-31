import { Box, Image, Text, Link, Heading } from "@chakra-ui/react";
import React from "react";
import studyProgrammes1 from "assets/Images/studyprogrammes1.png";
import studyProgrammes2 from "assets/Images/studyprogrammes2.png";
import studyProgrammes3 from "assets/Images/studyprogrammes3.png";

const Courses = () => {
  const objArr = [
    {
      linkContent: "HND IN HOSPITALITY MANAGEMENT",
      values: [
        {
          imageSrc: studyProgrammes1,
          current: false,
          captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
          captionTime: "2 Years | Full Time",
          captionButton: "Apply Now",
        },
      ],
    },

    {
      linkContent: "ND IN HOTEL AND CATERING MANAGEMENT",
      values: [
        {
          imageSrc: studyProgrammes2,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "2 Years | Full Time",
          captionButton: "Apply Now",
        },
      ],
    },

    {
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      values: [
        {
          imageSrc: studyProgrammes3,
          current: true,
          captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
          captionTime: "1 Year | Full Time",
          captionButton: "Apply Now",
        },
      ],
    },
  ];

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
                      h={{
                        sm: "274px",
                        md: "274px",
                        lg: "274px",
                      }}
                      w={{
                        sm: "300px",
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
                        sm: "-62px",
                        md: "-90px",
                        lg: "-85px",
                        xl: "-175px",
                        "2xl": "-175px",
                      }}
                    >
                      <Heading
                        color="#fff"
                        fontWeight="700"
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
                        h="52px"
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
                        w={{
                          sm: "110px",
                          md: "110px",
                          lg: "150px",
                          xl: "208px",
                          "2xl": "208px",
                        }}
                        p="10px 25px"
                        border={{
                          sm: "2px solid #FFF",
                          md: "2px solid #FFF",
                          lg: "2px solid #FFF",
                          xl: "none",
                          "2xl": "none",
                        }}
                        fontSize={{
                          sm: "16px",
                          md: "16px",
                          lg: "20px",
                          xl: "24px",
                          "2xl": "24px",
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
