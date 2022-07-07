import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Grid,
  Image,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import aboutUs from "assets/Images/aboutus.png";
import aboutGallery1 from "assets/Images/aboutgallery1.png";
import aboutGallery2 from "assets/Images/aboutgallery2.png";
import aboutGallery3 from "assets/Images/aboutgallery3.png";
import aboutGallery4 from "assets/Images/aboutgallery4.png";
import aboutGallery5 from "assets/Images/aboutgallery5.png";
import award1 from "assets/Images/award1.png";
import award2 from "assets/Images/award2.png";
import award3 from "assets/Images/award3.png";
import recog1 from "assets/Images/recog1.png";

const ourStands = [
  {
    heading: "Mission",
    text: "To train women to be competent professionals able to meet the challenges of the fast developing world of Hospitality; and to create awareness of the impact of Hospitality service on the quality of life of the individual, the family and ultimately on the development of society.",
  },
  {
    heading: "Vision",
    text: "To ensure In-depth Hospitality and Life Skills Training that guarantees the Girl Child 3Es (Education, Employment and Economic independence) by providing both technical competence and ethical integrity for the students.",
  },
  {
    heading: "Core Values",
    text: [
      "S - Spirit of Service",
      "P - Personal Responsibility",
      "I - Integrity",
      "R - Respect",
      "I - Industrious",
      "T - Teamwork",
    ],
  },
];

const aboutGalleries = [
  {
    image: aboutGallery1,
  },
  {
    image: aboutGallery2,
  },
  {
    image: aboutGallery3,
  },
  {
    image: aboutGallery4,
  },
  {
    image: aboutGallery5,
  },
];

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
      "Appointed Training Provider for the National Vocational Qualification (NVQ) Recently Approved by the Federal Government 2015",
  },
];

const Profile = () => {
  return (
    <Fragment>
      <Flex
        bg="#FFF"
        p="50px 0"
        alignItems="center"
        px="91px"
        justifyContent="center"
      >
        <Box w="65%" mr="60px">
          <Text
            fontFamily="Manrope"
            fontSize="24px"
            fontWeight="400"
            lineHeight="33px"
            color="rgba(2, 29, 55, 0.63)"
          >
            Our Story
          </Text>

          <Heading
            fontFamily="Playfair Display"
            fontSize="32px"
            fontWeight="400"
            color="#021D37"
            lineHeight="43px"
          >
            Who We Are
          </Heading>

          <Text
            fontFamily="Manrope"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
            color="#021D37"
            mt="7px"
          >
            Wavecrest College of Hospitality is a private Monotechnic located in
            Lagos, Nigeria. The Institution has been involved with the
            development of Hospitality Education since 1974. It is a project of
            Women’s Board – Education Co-operation Society, a Nigerian, Not-for
            profit organization for the development of the Girl Child.
            <br></br>
            <br></br>
            The focus of the College is targeted towards capable young women
            interested in making a career in the Hospitality Industry. The
            students pay a subsidized tuition fee which covers only about 25%
            <br></br>
            <br></br>
            of the operation costs of the College. For more than 40 years, over
            2,500 graduates have successfully benefitted from the all-round
            education received from the College. Our graduates are guaranteed
            quality Education, Employment and Economic Independence.
          </Text>
        </Box>

        <Box w="35%">
          <Image src={aboutUs} w="436px" h="323px" />
        </Box>
      </Flex>

      <Box bg="#EBEDEF" p="50px 118px" w="100%" mb="50px">
        <Text
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="24px"
          color="rgba(2, 29, 55, 0.63)"
        >
          Our Philosophy
        </Text>
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          lineHeight="43px"
          color="#021D37"
        >
          What We Stand For
        </Heading>

        <Grid gridTemplateColumns="1fr 1fr 1fr" mt="30px" gridGap="70px">
          {ourStands.map((ourStand, index) => {
            const textToShow = Array.isArray(ourStand.text)
              ? ourStand.text.map((values, i) => <Box key={i}>{values}</Box>)
              : ourStand.text;

            return (
              <Box key={index}>
                <Heading
                  fontFamily="Dancing Script"
                  color="#021d37"
                  fontSize="55px"
                  fontWeight="400"
                >
                  {ourStand.heading}
                </Heading>
                <Text
                  color="#021d37"
                  fontFamily="Manrope"
                  fontSize="18px"
                  lineHeight="25px"
                  fontWeight="400"
                >
                  {textToShow}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Box>

      <Box p="31px 91px">
        <Box>
          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="24px"
            color="rgba(2, 29, 55, 0.63)"
          >
            Our Clout
          </Text>

          <Heading
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            lineHeight="43px"
            color="#021D37"
          >
            Awards and Recognition
          </Heading>
        </Box>

        <Box>
          <Flex flexDirection="row" alignItems="center">
            <Text
              fontFamily="Manrope"
              fontSize="40px"
              fontWeight="400"
              color="rgba(2, 29, 55, 0.3)"
              transform="rotate(-90deg)"
            >
              AWARDS
            </Text>

            <Flex
              flexDirection="column"
              borderBottom="2px solid rgba(2, 29, 55, 0.17)"
              py="43px"
            >
              {awards.map((award, index) => {
                return (
                  <Flex key={index} alignItems="center">
                    <Image src={award.awardImg} objectFit="cover" />

                    <Text
                      fontFamily="Manrope"
                      fontWeight="600"
                      fontSize="28px"
                      lineHeight="38px"
                      alignItems="center"
                      ml="43px"
                    >
                      {award.awardDesc}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          <Flex flexDirection="row" alignItems="center" h="248px" my="50px">
            <Box w="300px" ml="-70px">
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
              ml="-80px"
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
                    <Image src={recognition.recogImg} objectFit="cover" />

                    <Text
                      fontFamily="Manrope"
                      fontWeight="600"
                      fontSize="28px"
                      lineHeight="38px"
                      alignItems="center"
                      ml="43px"
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

      <Box bg="#EBEDEF" p="50px 90px">
        <Box>
          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="24px"
            color="rgba(2, 29, 55, 0.63)"
          >
            Our Swags
          </Text>

          <Heading
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
            mb="24px"
          >
            Gallery
          </Heading>
        </Box>
        <Grid gridTemplateColumns="repeat(5, 1fr)" gridGap="10px">
          {aboutGalleries.map((gallery) => {
            return (
              <Image
                src={gallery.image}
                w="272px"
                h="291px"
                borderRadius="3px"
                mr="10px"
              />
            );
          })}
        </Grid>
      </Box>

      <Box textAlign="center" my="55px">
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
          mb="22px"
        >
          Want to get a copy of our e-profile
        </Heading>
        <Button
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="20px"
          textAlign="center"
          p="10px 30px"
          bg="#021D37"
          borderRadius="3px"
          color="#fff"
          _hover={{
            bg: " #020E1B",
          }}
        >
          Download Here
        </Button>
      </Box>
    </Fragment>
  );
};

export default Profile;
