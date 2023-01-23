import Image from "next/legacy/image";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Courses from "./Courses";
import ShortCourses from "./ShortCourses";

const StudyProgrammes = () => {
  const studyProgrammes1 = "/assets/imgs/studyprogrammes 2.png";
  const studyProgrammes2 = "/assets/imgs/study-programme3.jpg";
  const studyProgrammes3 = "/assets/imgs/studyprogramme.jpg";
  const studyProgrammes4 = "/assets/imgs/training1.png";
  const training1 = "/assets/imgs/trainingImages/training1.jpg";
  const training2 = "/assets/imgs/trainingImages/training2.jpg";
  const training3 = "/assets/imgs/trainingImages/training3.jpg";
  const objArr = [
    {
      linkContent: "HND IN HOSPITALITY MANAGEMENT",
      values: [
        {
          imageSrc: studyProgrammes1,
          redirect: (e) => {
            e.preventDefault();

            router.push("/HNDProgramme");
          },
          current: false,
          captionHeading:
            "A Programme for ND Hospitality Graduates in preparation for NYSC",
          captionTime: "2 Years | Full Time",
          captionButton: "APPLY NOW",
        },
      ],
    },

    {
      linkContent: "ND IN HOSPITALITY MANAGEMENT",
      values: [
        {
          imageSrc: studyProgrammes3,
          redirect: (e) => {
            e.preventDefault();

            router.push("/NDProgramme");
          },
          current: false,
          captionHeading: "A programme for Hospitality Career aspirants",
          captionTime: "2 Years | Full Time",
          captionButton: "APPLY NOW",
        },
      ],
    },

    {
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      values: [
        {
          imageSrc: studyProgrammes2,
          redirect: (e) => {
            e.preventDefault();

            router.push("/CertificateCourses");
          },
          current: true,
          captionHeading:
            "AN ACCELERATED CERTIFICATE PROGRAMME FOR YOUNG SCHOOL LEAVERS",
          captionTime: "1 Year | Full Time",
          captionButton: "APPLY NOW",
        },
      ],
    },

    {
      linkContent: "TRAININGS",
      values: [
        {
          imageSrc: training1,
          current: false,
          redirect: (e) => {
            e.preventDefault();

            router.push("/academics/training");
          },
          captionHeading: "CONFEDERATION OF TOURISM AND HOSPITALITY",
          captionTime: "Duration: Flexible",
          captionButton: "APPLY NOW",
        },
        {
          imageSrc: training2,
          current: false,
          redirect: (e) => {
            e.preventDefault();

            router.push("/academics/training");
          },
          captionHeading: "HOSPITALITY TRAINING PROGRAMMES",
          captionTime: "Duration: Flexible",
          captionButton: "APPLY NOW",
        },
        {
          imageSrc: studyProgrammes4,
          current: false,
          redirect: (e) => {
            e.preventDefault();

            router.push("/academics/training");
          },
          captionHeading: "CULINARY COURSES",
          captionTime: "5 Weeks - 3 Months",
          captionButton: "APPLY NOW",
        },
        {
          imageSrc: training3,
          current: false,
          redirect: (e) => {
            e.preventDefault();

            router.push("/academics/training");
          },
          captionHeading: "PROFESSISONAL CERTIFICATE IN HOSPITALITY",
          captionTime: "10 weeks",
          captionButton: "APPLY NOW",
        },
      ],
    },
  ];

  const [currentprogram, setCurrentProgram] = useState(objArr[2]);

  const router = useRouter();

  const redirect = (e) => {
    e.preventDefault();

    router.push("/admission/applyOnline");
  };
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
        w="1100px"
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
            <Flex
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
              alignItems="center"
              justifyContent="center"
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
            </Flex>
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
          <Box key={index} mb="10px">
            <Box
              key={index}
              w="1100px"
              h="400px"
              m="0 auto"
              position="relative"
            >
              <Box m="0 auto" w="1100px" h="394px">
                <Image
                  src={value.imageSrc}
                  objectFit="cover"
                  alt="coffee"
                  layout="fill"
                />
              </Box>

              <Box
                bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
                textAlign="center"
                position="absolute"
                bottom="0"
                h="280px"
                w="1100px"
                pt="40px"
                pb="20px"
              >
                <Heading
                  color="#fff"
                  fontWeight="700"
                  fontSize="40px"
                  w="900px"
                  mx="auto"
                  fontFamily="Playfair Display"
                  cursor="pointer"
                  textTransform="uppercase"
                  onClick={value.redirect}
                >
                  {value.captionHeading}
                </Heading>

                <Text
                  fontSize="20px"
                  lineHeight="27px"
                  color="#EBEDEF"
                  my="15px"
                  fontFamily="Manrope"
                >
                  {value.captionTime}
                </Text>

                <Text
                  bg="#fff"
                  color="#021d37"
                  w="208px"
                  mx="auto"
                  p="10px 25px"
                  border="none"
                  borderRadius="3px"
                  fontFamily="Manrope"
                  fontSize="24px"
                  fontWeight="700"
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ textDecoration: "none", bg: "#EBEDEF" }}
                  onClick={(e) => redirect(e)}
                >
                  {value.captionButton}
                </Text>
              </Box>
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
        <Courses />
        <ShortCourses />
      </Box>
    </Box>
  );
};

export default StudyProgrammes;
