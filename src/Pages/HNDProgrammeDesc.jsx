import {
  Box,
  Image,
  Flex,
  Heading,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import JsFileDownloader from "js-file-downloader";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/Navbar";
import ReactPlayer from "react-player";
import about from "assets/Images/About.png";
import waveVid from "assets/Images/wavevid.mp4";
import aboutgallery1 from "assets/Images/aboutgallery1.png";
import aboutgallery4 from "assets/Images/aboutgallery4.png";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const HNDProgrammeDesc = () => {
  const quickLinks = [
    {
      image: aboutgallery4,

      text: "National Diploma (ND) in Hospitality Management",
      linkTo: "/NDProgramme",
    },
    {
      image: aboutgallery1,
      text: "Certificate Course In Hospitality Operations",
      linkTo: "/CertificateCourses",
    },
  ];

  const navigate = useNavigate();

  const BackToProgrammes = (e) => {
    e.preventDefault();
    navigate("/academics/programmes", { replace: true });
  };

  const fileUrl = "/documents/Ojumo House.pdf";

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={about} h="100%" w="100%" objectFit="cover" />

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
            fontSize={{
              sm: "25px",
              md: "35px",
              lg: "40px",
              xl: "40px",
              "2xl": "40px",
            }}
            textAlign="center"
            mt="140px"
            textTransform="uppercase"
          >
            Higher National Diploma (HND) <br /> in Hospitality Management
          </Text>
        </Box>
      </Box>

      <Button
        fontFamily="Manrope"
        fontSize="18px"
        py="25px"
        mt="20px"
        ml="20px"
        fontWeight="700"
        bg="#EEE"
        onClick={(e) => BackToProgrammes(e)}
      >
        <FaChevronLeft size="20px" />
        Back To Programmes
      </Button>

      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Flex
          bg="#FFF"
          p="50px 0"
          alignItems="center"
          justifyContent="center"
          display={{
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <Box
            w={{
              sm: "100%",
              md: "100%",
              lg: "55%",
              xl: "55%",
              "2xl": "55%",
            }}
            mr="60px"
          >
            <Heading
              fontFamily="Playfair Display"
              fontSize={{
                sm: "25px",
                md: "25px",
                lg: "30px",
                xl: "30px",
                "2xl": "30px",
              }}
              fontWeight="400"
              color="#021D37"
              lineHeight={{
                sm: "30px",
                md: "30 px",
                lg: "30px",
                xl: "30px",
                "2xl": "43px",
              }}
            >
              Higher National Diploma (HND) <br /> in Hospitality Management
            </Heading>

            <Text
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
              mt="30px"
            >
              Wavecrest College of Hospitality is a private Monotechnic located
              in Lagos, Nigeria. The Institution has been involved with the
              development of Hospitality Education since 1974. It is a project
              of Women’s Board – Education Co-operation Society, a Nigerian,
              Not-for profit organization for the development of the Girl Child.{" "}
              <br></br>
              <br></br>
              The focus of the College is targeted towards capable young women
              interested in making a career in the Hospitality Industry. The
              students pay a subsidized tuition fee which covers only about 25%
              of the operation costs of the College. <br></br> <br></br>For more
              than 40 years, over 2,500 graduates have successfully benefitted
              from the all-round education received from the College. Our
              graduates are guaranteed quality Education, Employment and
              Economic Independence.
            </Text>
          </Box>

          <Box
            h="10%"
            mt={{
              sm: "25px",
              md: "25px",
              lg: "25px",
              xl: "none",
              "2xl": "none",
            }}
            w={{
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "50%",
              "2xl": "50%",
            }}
          >
            <ReactPlayer
              url={waveVid}
              playing
              loop
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>

        <Flex
          textAlign="center"
          mb="50px"
          display={{
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <Link
            href="/admission/applyOnline"
            bg="#021D37"
            color="#FFF"
            h="52px"
            w="208px"
            p="10px 25px"
            mr={{
              sm: "0",
              md: "20px",
              lg: "20px",
              xl: "20px",
              "2xl": "20px",
            }}
            border="none"
            borderRadius="3px"
            fontFamily="Manrope"
            fontSize="24px"
            fontWeight="700"
            _hover={{
              textDecoration: "none",
              bg: "#020E1B",
            }}
          >
            APPLY NOW
          </Link>

          <Button
            h="52px"
            mt={{
              sm: "20px",
              md: "0px",
              lg: "0px",
              xl: "0px",
              "2xl": "0px",
            }}
            fontFamily="Manrope"
            fontSize="24px"
            fontWeight="700"
            bg="#EEE"
            onClick={() => new JsFileDownloader({ url: fileUrl })}
            _hover={{
              bg: "#DDD",
            }}
          >
            Download Brochure
          </Button>
        </Flex>

        <Box mt="90px">
          <Heading
            fontFamily="Playfair Display"
            fontSize="25px"
            fontWeight="700"
          >
            Other Programmes Include:
          </Heading>

          <Flex
            justifyContent="center"
            mt="30px"
            display={{
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            {quickLinks.map((quickLink, index) => {
              return (
                <Link
                  key={index}
                  href={quickLink.linkTo}
                  w="294px"
                  h="241px"
                  mr="30px"
                  mb="100px"
                  transition="all ease 0.8s"
                  _hover={{
                    transform: "scale(1.2)",
                  }}
                >
                  <Image
                    src={quickLink.image}
                    w="100%"
                    h="100%"
                    borderRadius="3px"
                    objectFit="cover"
                  />

                  <Flex
                    bg="linear-gradient(180deg, rgba(2, 29, 55, 0) 0%, rgba(2, 29, 55, 0.7) 100%);"
                    position="relative"
                    h="100%"
                    top="-241px"
                    borderRadius="3px"
                  >
                    <Text
                      color="#FFF"
                      fontFamily="Playfair Display"
                      fontSize="22px"
                      lineHeight="27px"
                      mt="auto"
                      mx="auto"
                      mb="20px"
                      textAlign="center"
                    >
                      {quickLink.text}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </Flex>
        </Box>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default HNDProgrammeDesc;
