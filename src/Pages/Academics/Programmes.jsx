import {
  Box,
  Text,
  Button,
  Image,
  Heading,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import studyProgrammes1 from "assets/Images/studyprogrammes1.png";
import studyProgrammes3 from "assets/Images/studyprogrammes3.png";
import studyProgrammes4 from "assets/Images/studyprogrammes4.png";
import fileDownload from "assets/Images/fileDownload.png";

const Programmes = () => {
  const programmes = [
    {
      programmeTitle: "Higher National Diploma (HND) in Hospitality Management",
      background: "#FFF",
      linkContent: "HND IN HOSPITALITY MANAGEMENT",
      imageSrc: studyProgrammes1,
      current: false,
      captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      programmeTitle: "Higher National Diploma (HND) in Hospitality Management",
      background: "#EBEDEF",
      linkContent: "SHORT COURSES",
      imageSrc: studyProgrammes4,
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Part Time",
      captionButton: "Apply Now",
    },
    {
      programmeTitle: "Higher National Diploma (HND) in Hospitality Management",
      background: "#FFF",
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      imageSrc: studyProgrammes3,
      current: true,
      captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
      captionTime: "1 Year | Full Time",
      captionButton: "Apply Now",
    },
  ];

  return (
    <Box>
      {programmes.map((programme) => {
        return (
          <Box bg={programme.background} p="75px 91px">
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              textAlign="left"
              m="0 auto"
              w="1247px"
            >
              {programme.programmeTitle}
            </Heading>

            <Flex
              flexDirection="column"
              position="relative"
              m="0 auto"
              w="1247px"
            >
              <Image
                src={programme.imageSrc}
                alt="coffee"
                h="394px"
                w="100%"
                m="0 auto"
                mt="25px"
              />
              <Box
                bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
                textAlign="center"
                position="absolute"
                bottom="0rem"
                w="100%"
              >
                <Heading
                  color="#fff"
                  fontWeight="700"
                  fontSize="40px"
                  fontFamily="Playfair Display"
                >
                  {programme.captionHeading}
                </Heading>

                <Text
                  fontSize="20px"
                  lineHeight="27px"
                  color="#EBEDEF"
                  fontFamily="Manrope, san"
                >
                  {programme.captionTime}
                </Text>

                <Button
                  bg="#fff"
                  color="#021d37"
                  h="52px"
                  w="208px"
                  mt="1rem"
                  p="10px 25px"
                  border="none"
                  borderRadius="3px"
                  fontFamily="Manrope"
                  fontSize="24px"
                  fontWeight="700"
                >
                  {programme.captionButton}
                </Button>
                <Link
                  display="flex"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="Manrope"
                  fontSize="24px"
                  fontWeight="800"
                  color="#FFF"
                  my="25px"
                >
                  <Image src={fileDownload} mr="13px" />{" "}
                  <Text>Download Programme Brochure</Text>
                </Link>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Programmes;
