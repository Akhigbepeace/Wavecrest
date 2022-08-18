import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import award1 from "assets/Images/award1.png";
import award2 from "assets/Images/award2.png";
import award3 from "assets/Images/award3.png";
import recog1 from "assets/Images/recog1.png";

const OurClout = () => {
  const awards = [
    {
      awardImg: award1,
      awardDesc:
        "3-Time Platinum Winner for Best Educational Institute West Africa Tourism & Hospitality Awards (WATHA 2010-2012)",
    },
    {
      awardImg: award2,
      awardDesc:
        "The Pyne Awards Winner BEST INSTITUTION FOR THE DEVELOPMENT OF WOMEN IN NIGERIA 2018",
    },
    {
      awardImg: award3,
      awardDesc:
        "The African Travel Times Magazine Award for Best Hospitality College for Women (West Africa) 2018",
    },
  ];

  const recognitions = [
    {
      recogImg: recog1,
      recogDesc:
        "Vocational Training Centre in Hospitality for Lagos State Employment Trust Fund (LSETF) through the Lagos State Employability Support Project 2018",
    },
    {
      recogImg: recog1,
      recogDesc:
        "Vocational Training Centre in Hospitality for Lagos State Employment Trust Fund (LSETF) through the Lagos State Employability Support Project 2018",
    },
  ];

  return (
    <Box
      p={{
        sm: "31px 20px",
        md: "31px 40px",
        lg: "31px",
        xl: "31px 91px",
        "2xl": "31px 91px",
      }}
    >
      <Box>
        <Text
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="24px"
          color="rgba(2, 29, 55, 0.63)"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          Our Clout
        </Text>

        <Box>
          <Box
            w="88px"
            h="3px"
            bg="#021D37"
            mb="5px"
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
              sm: "28px",
              md: "28px",
              lg: "0",
              xl: "32px",
              "2xl": "32px",
            }}
            lineHeight="43px"
            color="#021D37"
          >
            Awards and Recognition
          </Heading>
        </Box>
      </Box>

      <Box>
        <Flex flexDirection="row" alignItems="center">
          <Text
            fontFamily="Manrope"
            fontSize="40px"
            fontWeight="400"
            color="rgba(2, 29, 55, 0.3)"
            transform="rotate(-90deg)"
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            AWARDS
          </Text>

          <Flex
            flexDirection="column"
            borderBottom={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "2px solid rgba(2, 29, 55, 0.17)",
              "2xl": "2px solid rgba(2, 29, 55, 0.17)",
            }}
            py={{
              xl: "43px",
              "2xl": "43px",
            }}
            mt={{
              sm: "20px",
              md: "20px",
              lg: "20px",
            }}
          >
            {awards.map((award, index) => {
              return (
                <Flex
                  key={index}
                  alignItems="center"
                  justifyContent="center"
                  mb={{
                    sm: "25px",
                    md: "25px",
                    lg: "25px",
                  }}
                >
                  <Image
                    src={award.awardImg}
                    objectFit="cover"
                    w={{
                      sm: "60px",
                      md: "70px",
                      lg: "75px",
                    }}
                  />

                  <Text
                    fontFamily="Manrope"
                    fontWeight="600"
                    fontSize={{
                      sm: "16px",
                      md: "16px",
                      lg: "20px",
                      xl: "28px",
                      "2xl": "28px",
                    }}
                    lineHeight="30px"
                    alignItems="center"
                    ml={{
                      sm: "30px",
                      md: "35px",
                      lg: "60px",
                      xl: "43px",
                      "2xl": "43px",
                    }}
                  >
                    {award.awardDesc}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        <Flex
          flexDirection="row"
          alignItems="center"
          h={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "248px",
            "2xl": "248px",
          }}
          my={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "50px",
            "2xl": "50px",
          }}
        >
          <Box
            w="300px"
            ml={{
              sm: "-20px",
              md: "-20px",
              lg: "-50px",
              xl: "-70px",
              "2xl": "-70px",
            }}
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            <Text
              fontFamily="Manrope"
              fontSize="40px"
              fontWeight="400"
              color="rgba(2, 29, 55, 0.3)"
              transform="rotate(-90deg)"
            >
              RECOGNITIONS
            </Text>
          </Box>

          <Flex
            flexDirection="column"
            alignItems="center"
            ml={{
              sm: "0",
              md: "0",
              lg: "0",
              xl: "-80px",
              "2xl": "-80px",
            }}
            justifyContent="center"
          >
            {recognitions.map((recognition, index) => {
              return (
                <Flex
                  key={index}
                  alignItems="center"
                  justifyContent="center"
                  pt="20px"
                >
                  <Image
                    src={recognition.recogImg}
                    objectFit="cover"
                    w={{
                      sm: "85px",
                      md: "100px",
                      lg: "105px",
                    }}
                  />

                  <Text
                    fontFamily="Manrope"
                    fontWeight="600"
                    fontSize={{
                      sm: "16px",
                      md: "16px",
                      lg: "20px",
                      xl: "28px",
                      "2xl": "28px",
                    }}
                    lineHeight={{
                      sm: "30px",
                      md: "30px",
                      lg: "34px",
                      xl: "38px",
                      "2xl": "38px",
                    }}
                    alignItems="center"
                    ml={{
                      sm: "10px",
                      md: "10px",
                      lg: "34px",
                      xl: "43px",
                      "2xl": "43px",
                    }}
                  >
                    {recognition.recogDesc}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default OurClout;
