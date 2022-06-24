import {
  Box,
  Image,
  Link,
  Text,
  Flex,
  Heading,
  Button,
  Grid,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import about from "assets/Images/About.png";
import aboutUs from "assets/Images/aboutus.png";
import Navbar from "components/layouts/Navbar";
import Footer from "components/Home/Footer";
import FooterCopywright from "components/Home/FooterCopywright";

const About = () => {
  const menuLinks = [
    {
      linkTitle: "PROFILE",
    },
    {
      linkTitle: "MILESTONE",
    },
    {
      linkTitle: "OUR TEAM",
    },
  ];

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

  const ourOffers = [
    {
      programmeType: "FULL TIME",
      hndImg: { aboutUs },
      hndImgCaption: "HND IN HOSPITALITY MANAGEMENT",
      ndImg: { aboutUs },
      ndImgCaption: "ND IN HOSPITALITY MANAGEMENT",
      certificateOperation: { aboutUs },
      certificateOperationCaption: "CERTIFICATE IN HOSPITALITY OPERATIONS",
    },
  ];

  const [activeLink, setActiveLink] = useState(menuLinks[0]);
  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={about} h="100%" w="100%" />

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
            fontSize="60px"
            textAlign="center"
            mt="140px"
          >
            ABOUT US
          </Text>
        </Box>
      </Box>

      <Box>
        <Flex alignItems="center" justifyContent="center">
          {menuLinks.map((menuLink, index) => {
            const isActive = activeLink.linkTitle === menuLink.linkTitle;
            return (
              <Link
                key={index}
                m="15px 0"
                fontFamily="Manrope"
                bg={isActive ? "#021d37" : "#fff"}
                color={isActive ? "#EBEDEF" : "#021d37"}
                fontWeight="700"
                fontSize="30px"
                textAlign="center"
                border="3px solid #021d37"
                lineHeight="40px"
                p="28px 97px"
                onClick={() => setActiveLink(menuLink)}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {menuLink.linkTitle}
              </Link>
            );
          })}
        </Flex>

        <Flex m="50px 0" alignItems="center" px="91px" justifyContent="center">
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
              Wavecrest College of Hospitality is a private Monotechnic located
              in Lagos, Nigeria. The Institution has been involved with the
              development of Hospitality Education since 1974. It is a project
              of Women’s Board – Education Co-operation Society, a Nigerian,
              Not-for profit organization for the development of the Girl Child.
              <br></br>
              <br></br>
              The focus of the College is targeted towards capable young women
              interested in making a career in the Hospitality Industry. The
              students pay a subsidized tuition fee which covers only about 25%
              <br></br>
              <br></br>
              of the operation costs of the College. For more than 40 years,
              over 2,500 graduates have successfully benefitted from the
              all-round education received from the College. Our graduates are
              guaranteed quality Education, Employment and Economic
              Independence.
            </Text>
          </Box>

          <Box w="35%">
            <Image src={aboutUs} w="436px" h="323px" />
          </Box>
        </Flex>

        <Box bg="#EBEDEF" p="43px 118px" w="100%" mb="50px">
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

        <Box>
          <Box ml="30px" px="90px">
            <Text
              fontFamily="Manrope"
              fontWeight="400"
              fontSize="24px"
              color="rgba(2, 29, 55, 0.63)"
            >
              Our Programmes
            </Text>

            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              lineHeight="43px"
              color="#021D37"
            >
              What We Offer
            </Heading>
          </Box>

          {ourOffers.map((ourOffer, index) => {
            return (
              <Fragment>
                <Flex alignItems="center" justifyContent="center" key={index}>
                  <Box
                    fontFamily="Manrope"
                    fontSize="40px"
                    fontWeight="400"
                    color="rgba(2, 29, 55, 0.3)"
                    transform="rotate(-90deg)"
                    mr="-53px"
                  >
                    <Text w="200px">{ourOffer.programmeType}</Text>
                  </Box>

                  <Grid
                    gridTemplateColumns="repeat(3, auto)"
                    gridGap="13px"
                    mt="37px"
                  >
                    <Box
                      w="366px"
                      h="359px"
                      bg="#EBEDEF"
                      borderRadius="3px"
                      p="7px"
                    >
                      <Image
                        src="https://res.cloudinary.com/wavecrest1/image/upload/v1656001784/wavecrest/About_yixq3y.png"
                        w="100%"
                        h="245px"
                        borderRadius="3px"
                        objectFit="cover"
                      />
                      <Text
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        p="20px 0"
                      >
                        {ourOffer.hndImgCaption}
                      </Text>
                    </Box>

                    <Box
                      w="366px"
                      h="359px"
                      bg="#EBEDEF"
                      borderRadius="3px"
                      p="7px"
                    >
                      <Image
                        src="https://res.cloudinary.com/wavecrest1/image/upload/v1656001784/wavecrest/About_yixq3y.png"
                        w="100%"
                        h="245px"
                        borderRadius="3px"
                        objectFit="cover"
                      />
                      <Text
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        p="20px 0"
                      >
                        {ourOffer.ndImgCaption}
                      </Text>
                    </Box>

                    <Box
                      w="366px"
                      h="359px"
                      bg="#EBEDEF"
                      borderRadius="3px"
                      p="7px"
                    >
                      <Image
                        src="https://res.cloudinary.com/wavecrest1/image/upload/v1656001784/wavecrest/About_yixq3y.png"
                        w="100%"
                        h="245px"
                        borderRadius="3px"
                        objectFit="cover"
                      />
                      <Text
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        p="20px 0"
                      >
                        {ourOffer.certificateOperationCaption}
                      </Text>
                    </Box>
                  </Grid>
                </Flex>

                <Flex
                  alignItems="center"
                  justifyContent="center"
                  key={index}
                  px="91px"
                >
                  <Box
                    fontFamily="Manrope"
                    fontSize="40px"
                    fontWeight="400"
                    color="rgba(2, 29, 55, 0.3)"
                    mr="-53px"
                    transform="rotate(-90deg)"
                  >
                    <Text w="200px">PART TIME</Text>
                  </Box>

                  <Grid
                    gridTemplateColumns="repeat(3, auto)"
                    gridGap="13px"
                    mt="37px"
                  >
                    <Box
                      w="366px"
                      h="359px"
                      bg="#EBEDEF"
                      borderRadius="3px"
                      p="7px"
                    >
                      <Image
                        src="https://res.cloudinary.com/wavecrest1/image/upload/v1656001784/wavecrest/About_yixq3y.png"
                        w="100%"
                        h="245px"
                        borderRadius="3px"
                        objectFit="cover"
                      />
                      <Text
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        p="20px 0"
                      >
                        {ourOffer.hndImgCaption}
                      </Text>
                    </Box>

                    <Box
                      w="366px"
                      h="359px"
                      bg="#EBEDEF"
                      borderRadius="3px"
                      p="7px"
                    >
                      <Image
                        src="https://res.cloudinary.com/wavecrest1/image/upload/v1656001784/wavecrest/About_yixq3y.png"
                        w="100%"
                        h="245px"
                        borderRadius="3px"
                        objectFit="cover"
                      />
                      <Text
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        p="20px 0"
                      >
                        {ourOffer.ndImgCaption}
                      </Text>
                    </Box>

                    <Box
                      w="366px"
                      h="359px"
                      bg="#EBEDEF"
                      borderRadius="3px"
                      p="7px"
                    >
                      <Image
                        src="https://res.cloudinary.com/wavecrest1/image/upload/v1656001784/wavecrest/About_yixq3y.png"
                        w="100%"
                        h="245px"
                        borderRadius="3px"
                        objectFit="cover"
                      />
                      <Text
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        p="20px 0"
                      >
                        {ourOffer.certificateOperationCaption}
                      </Text>
                    </Box>
                  </Grid>
                </Flex>
              </Fragment>
            );
          })}
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
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default About;
