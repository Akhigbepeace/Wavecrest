import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  Grid,
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
      programmeDurationTime: "FULLTIME",
      programmeDurationYear: "2YEARS",
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
      programmeDurationTime: "FULLTIME",
      programmeDurationYear: "2YEARS",
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
      programmeDurationTime: "FULLTIME",
      programmeDurationYear: "2YEARS",
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

  const navigateTo = [
    {
      name: "TRAINING",
      redirect: () => {
        navigate("/academics/training", { replace: true });
      },
    },
    {
      name: "INTERNSHIP",
      redirect: () => {
        navigate("/academics/internship", { replace: true });
      },
    },
    {
      name: "NYSC",
      redirect: () => {
        navigate("/academics/nysc", { replace: true });
      },
    },
  ];

  return (
    <Box>
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={studyProgrammes3} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            PROGRAMMES
          </Text>
        </Box>
      </Box>

      <Box>
        {programmes.map((programme, index) => {
          return (
            <Box
              key={index}
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
                  <Flex alignItems="center">
                    <Heading
                      fontFamily="Manrope"
                      fontWeight="700"
                      fontSize="20px"
                      my="20px"
                    >
                      {programme.programmeDurationTime}
                    </Heading>

                    <Box bg="#021D37" w="2px" h="20px" m="auto 8px"></Box>

                    <Heading
                      fontFamily="Manrope"
                      fontWeight="700"
                      fontSize="20px"
                      my="20px"
                    >
                      {programme.programmeDurationYear}
                    </Heading>
                  </Flex>

                  <Text
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="33px"
                  >
                    {programme.responsiveDesc}
                  </Text>

                  <Button
                    w="142px"
                    height="46.89px"
                    bg="#021D37"
                    border="none"
                    color="#fff"
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="22px"
                    textAlign="center"
                    borderRadius="3px"
                    mt="30px"
                    onClick={(e) => ApplyNow(e)}
                    _hover={{
                      bg: "#020E1B",
                      transition: "all ease 0.4s",
                    }}
                  >
                    APPLY NOW
                  </Button>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Box>

      <Box
        mt="70px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
          textAlign="center"
          mb="22px"
        >
          Navigate To:
        </Heading>
        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
          }}
          mb="50px"
        >
          {navigateTo.map((items, index) => {
            return (
              <Button
                key={index}
                fontFamily="Manrope"
                fontSize="18px"
                py="25px"
                mb="15px"
                mr="15px"
                textAlign="center"
                fontWeight="700"
                bg="#EEE"
                onClick={items.redirect}
              >
                {items.name}
              </Button>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Programmes;
