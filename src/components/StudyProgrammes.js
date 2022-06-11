import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const StudyProgrammes = () => {
  const objArr = [
    {
      linkContent: "HND IN HOSPITALITY MANAGEMENT",
      imageSrc: "/assets/Images/Wavecrest Images 1.jpeg",
      current: false,
      captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },

    {
      linkContent: "ND IN HOTEL AND CATERING MANAGEMENT",
      imageSrc: "/assets/Images/Wavecrest Images 2.jpeg",
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      imageSrc: "/assets/Images/Wavecrest Images 3.jpg",
      current: true,
      captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "SHORT COURSES",
      imageSrc: "/assets/Images/Wavecrest Images 4.jpg",
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Part Time",
      captionButton: "Apply Now",
    },
  ];

  const [currentprogram, setCurrentProgram] = useState(objArr[2]);
  return (
    <Box>
      <Box>
        <Text
          textAlign="center"
          m="50px 0"
          color="#021D37"
          fontSize="40px"
          fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        >
          Study Programmes
        </Text>
        <Flex h="91px" w="1247px" m="0 auto">
          {objArr.map((programm, i) => {
            const isCurrent =
              currentprogram.linkContent === programm.linkContent;
            return (
              <Text
                href="#!"
                fontWeight="600"
                p="10px"
                w="315px"
                h="100%"
                border="3px solid #021D37"
                fontSize="20px"
                textAlign="center"
                textDecoration="none"
                bg={isCurrent ? "#021d37" : "#fff"}
                color={isCurrent ? "#EBEDEF" : "#021d37"}
                key={i}
                onClick={() => setCurrentProgram(programm)}
              >
                {programm.linkContent}
              </Text>
            );
          })}
        </Flex>

        <Box w="1247px" h="504px" m="0 auto">
          <Image
            src={currentprogram.imageSrc}
            alt="coffee"
            w="92.45%"
            // w="100%"
            h="394px"
            m="0 auto"
            // objectFit="fill"
            borderTop="5px solid #021D37"
            position="absolute"
          />
          <Box
            bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
            position="relative"
            textAlign="center"
            top="14rem"
          >
            <Text color="#fff" pt="9rem" fontWeight="700" fontSize="40px">
              {currentprogram.captionHeading}
            </Text>
            <Text
              fontSize="20px"
              lineHeight="27px"
              color="#EBEDEF"
              fontFamily="Georgia, 'Times New Roman', Times, serif"
              m="1rem 0"
            >
              {currentprogram.captionTime}
            </Text>
            <Button
              bg="#fff"
              color="#021d37"
              w="122px"
              h="38px"
              margin="1rem 0"
              border="none"
              fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              fontSize="20px"
              fontWeight="600"
            >
              {currentprogram.captionButton}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudyProgrammes;
