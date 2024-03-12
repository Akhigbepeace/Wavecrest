import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import { FaChevronLeft } from "react-icons/fa";
import ReactPlayer from "react-player";
import JsFileDownloader from "js-file-downloader";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import NextLink from "next/link";
import Footer from "./Footer/Footer";

type ProgrammeDescProps = {
  bannerImg: string;
  programmeTitle: string;
  programmeDesc: string;
  brochureUrl: string;
  // quickLinks: Array<{ linkTo: string; image: string; text: string }>;
  quickLinks: {
    href: string;
    image: string;
    text: string;
  }[];
};

const ProgrammeDesc = (props: ProgrammeDescProps) => {
  const { bannerImg, programmeTitle, programmeDesc, brochureUrl, quickLinks } =
    props;

  const waveVid = "/assets/imgs/wavevid.mp4";

  const fileUrl = brochureUrl;

  return (
    <>
      <Header />
      <Navbar />

      <MobileSideBar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image
          alt="About"
          src={bannerImg}
          h="100%"
          w="100%"
          objectFit="cover"
        />

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
            w="700px"
            mx="auto"
            mt="200px"
            textAlign="center"
            textTransform="uppercase"
          >
            {programmeTitle}
          </Text>
        </Box>
      </Box>

      <NextLink href="/academics/programmes" legacyBehavior passHref>
        <Button
          fontFamily="Manrope"
          fontSize="18px"
          py="25px"
          mt="20px"
          ml="20px"
          fontWeight="700"
          bg="#EEE"
        >
          <FaChevronLeft size="20px" />
          Back To Programmes
        </Button>
      </NextLink>

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
            md: "block",
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
            >
              {programmeTitle}
            </Heading>

            <Text
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
              mt="30px"
            >
              {programmeDesc}
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
            mb="100px"
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
                <NextLink key={index} href={quickLink.href}>
                  <Box
                    w={{
                      sm: "100%",
                      md: "294px",
                      lg: "294px",
                      xl: "294px",
                      "2xl": "294px",
                    }}
                    h="241px"
                    mr="30px"
                    mb={{
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                      xl: "0",
                      "2xl": "0",
                    }}
                    transition="all ease 0.8s"
                    _hover={{
                      transform: "scale(1.2)",
                    }}
                  >
                    <Image
                      src={quickLink.image}
                      alt="quicklink-image"
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
                  </Box>
                </NextLink>
              );
            })}
          </Flex>
        </Box>
      </Box>

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
      />
    </>
  );
};

export default ProgrammeDesc;
