import { Box, Text, Image, Flex, Heading, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import studyProgrammes1 from "assets/Images/studyprogrammes1.png";
import studyProgrammes2 from "assets/Images/studyprogrammes2.png";
import studyProgrammes3 from "assets/Images/studyprogrammes3.png";
import studyProgrammes4 from "assets/Images/studyprogrammes4.png";

const StudyProgrammes = () => {
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

    {
      linkContent: "SHORT COURSES",
      values: [
        {
          imageSrc: studyProgrammes4,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "2 Years | Part Time",
          captionButton: "Apply Now",
        },
        {
          imageSrc: studyProgrammes1,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "2 Years | Part Time",
          captionButton: "Apply Now",
        },
        {
          imageSrc: studyProgrammes2,
          current: false,
          captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
          captionTime: "2 Years | Part Time",
          captionButton: "Apply Now",
        },
      ],
    },
  ];

  const [currentprogram, setCurrentProgram] = useState(objArr[2]);

  return (
    <Box
      px={{
        sm: "20px",
        md: "20px",
        lg: "20px",
      }}
    >
      <Text
        color="#021D37"
        m="50px 0"
        fontFamily="Playfair Display"
        fontSize={{
          sm: "30px",
          md: "30px",
          lg: "30px",
          xl: "40px",
          "2xl": "40px",
        }}
        textAlign={{
          sm: "left",
          md: "left",
          lg: "left",
          xl: "center",
          "2xl": "center",
        }}
      >
        <Box
          bg="#021D37"
          h="3px"
          w="88px"
          mt="20px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>
        Study Programmes
      </Text>

      <Flex
        h="91px"
        w="1247px"
        m="0 auto"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        {objArr.map((programm, i) => {
          const isCurrent = currentprogram.linkContent === programm.linkContent;

          return (
            <Box
              cursor="pointer"
              fontWeight="600"
              p="10px"
              w="315px"
              h="100%"
              border="3px solid #021D37"
              borderBottom="7px solid #021D37"
              fontFamily="Manrope"
              fontSize="20px"
              textAlign="center"
              textDecoration="none"
              bg={isCurrent ? "#021d37" : "#fff"}
              color={isCurrent ? "#EBEDEF" : "#021d37"}
              key={i}
              onClick={() => setCurrentProgram(programm)}
              _hover={{
                textDecoration: "none",
                bg: isCurrent ? "#021d37" : "#F5F5F5",
              }}
            >
              {programm.linkContent}
            </Box>
          );
        })}
      </Flex>

      <Box
        mb="50px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        {currentprogram.values.map((value, index) => (
          <Box key={index} w="1247px" h="400px" mb="70px" m="0 auto">
            <Image
              src={value.imageSrc}
              alt="coffee"
              h="394px"
              w="1247px"
              m="0 auto"
              position="absolute"
            />

            <Box
              bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
              textAlign="center"
              position="relative"
              bottom="-175px"
              py="40px"
            >
              <Heading
                color="#fff"
                fontWeight="700"
                fontSize="40px"
                fontFamily="Playfair Display"
              >
                {value.captionHeading}
              </Heading>

              <Text
                fontSize="20px"
                lineHeight="27px"
                color="#EBEDEF"
                mb="28px"
                fontFamily="Manrope"
              >
                {value.captionTime}
              </Text>

              <Link
                href="/admission/applyOnline"
                bg="#fff"
                color="#021d37"
                h="52px"
                w="208px"
                p="10px 25px"
                border="none"
                borderRadius="3px"
                fontFamily="Manrope"
                fontSize="24px"
                fontWeight="700"
                _hover={{ textDecoration: "none", bg: "#EBEDEF" }}
              >
                {value.captionButton}
              </Link>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        {objArr.map((program, index) => {
          return (
            <Box key={index}>
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
          );
        })}
      </Box>
    </Box>
  );
};

export default StudyProgrammes;
