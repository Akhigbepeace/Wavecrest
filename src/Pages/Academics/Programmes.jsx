import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
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
      programmeDuration: "FULLTIME  |  2YEARS",
      imageSrc: studyProgrammes1,
      current: false,
      captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
      responsiveDesc:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
      navigateTo: function ShowProgramme(e) {
        e.preventDefault();

        navigate("/HNDProgramme", { replace: true });
      },
    },
    {
      programmeTitle: "National Diploma (ND) in Hospitality Management",
      background: "#EBEDEF",
      linkContent: "SHORT COURSES",
      programmeDuration: "FULLTIME  |  2YEARS",
      imageSrc: studyProgrammes4,
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Part Time",
      captionButton: "Apply Now",
      responsiveDesc:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
      navigateTo: function ShowProgramme(e) {
        e.preventDefault();

        navigate("/NDProgramme", { replace: true });
      },
    },
    {
      programmeTitle: "Certificate Course In Hospitality Operations",
      background: "#FFF",
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      programmeDuration: "FULLTIME  |  2YEARS",
      imageSrc: studyProgrammes3,
      current: true,
      captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
      captionTime: "1 Year | Full Time",
      captionButton: "Apply Now",
      responsiveDesc:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
      navigateTo: function ShowProgramme(e) {
        e.preventDefault();

        navigate("/CertificateCourses", { replace: true });
      },
    },
  ];
  const navigate = useNavigate();

  const ApplyNow = (e) => {
    e.preventDefault();
    navigate("/admission/applyOnline", { replace: true });
  };

  return (
    <Box>
      {programmes.map((programme) => {
        return (
          <Box
            bg={programme.background}
            py="75px"
            px={{
              sm: "20px",
              md: "20px",
              lg: "91px",
              xl: "none",
              "2xl": "none",
            }}
          >
            <Box>
              <Box
                w="88px"
                h="3px"
                bg="#021D37"
                mb="10px"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                  "2xl": "none",
                }}
              ></Box>
              <Heading
                fontFamily="Playfair Display"
                fontWeight="700"
                fontSize={{
                  sm: "22px",
                  md: "27px",
                  lg: "30px",
                  xl: "32px",
                  "2xl": "32px",
                }}
                textAlign="left"
                cursor="pointer"
                onClick={programme.navigateTo}
                m="0 auto"
                w={{
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "1147px",
                  "2xl": "1147px",
                }}
              >
                {programme.programmeTitle}
              </Heading>
            </Box>

            <Flex
              flexDirection="column"
              position="relative"
              cursor="pointer"
              onClick={(e) => ApplyNow(e)}
              m="0 auto"
              w={{
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "1147px",
                "2xl": "1147px",
              }}
              transition="all ease 0.7s"
            >
              <Image
                src={programme.imageSrc}
                alt="coffee"
                h="394px"
                w="100%"
                m="0 auto"
                mt="25px"
                objectFit="cover"
              />

              <Box
                bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(1, 15, 29, 0.52) 46.35%, rgba(2, 29, 55, 0.87) 100%)"
                textAlign="center"
                position="absolute"
                bottom="0px"
                display={{
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "block",
                  "2xl": "block",
                }}
                w="100%"
                pt="30px"
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
                  fontFamily="Manrope"
                  mb="15px"
                >
                  {programme.captionTime}
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
                  _hover={{
                    textDecoration: "none",
                    bg: "#EBEDEF",
                  }}
                >
                  {programme.captionButton}
                </Link>

                <Link
                  display="flex"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="Manrope"
                  fontSize="24px"
                  fontWeight="800"
                  color="#FFF"
                  my="20px"
                >
                  <Image src={fileDownload} mr="13px" />
                  <Text>Download Programme Brochure</Text>
                </Link>
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
                <Heading
                  fontFamily="Manrope"
                  fontWeight="700"
                  fontSize={{
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                  }}
                  my="20px"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                >
                  {programme.programmeDuration}
                </Heading>

                <Text
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight="33px"
                >
                  {programme.responsiveDesc}
                </Text>

                <Button
                  href="/admission/applyOnline"
                  bg="#021D37"
                  display="block"
                  color="#FFF"
                  borderRadius="3px"
                  mt="30px"
                  w="208px"
                  h="52px"
                  _hover={{
                    bg: "#020E1B",
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Programmes;
