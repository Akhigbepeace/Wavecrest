import {
  Box,
  Link,
  Button,
  Heading,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { ProgrammesProps } from "../constants";
import PeaceImage from "components/atoms/PeaceImage";

const Program = (programme: ProgrammesProps) => {
  const fileDownload = "/assets/imgs/fileDownload.png";

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

        <NextLink href={programme.href} legacyBehavior passHref>
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
            m="0 auto"
            w={{
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "1000px",
              "2xl": "1147px",
            }}
          >
            {programme.programmeTitle}
          </Heading>
        </NextLink>
      </Box>

      <Flex
        flexDirection="column"
        position="relative"
        m="0 auto"
        w={{
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1000px",
          "2xl": "1147px",
        }}
        transition="all ease 0.7s"
      >
        <PeaceImage
          src={programme.imageSrc}
          alt="programme-image"
          h={programme.height || "394px"}
          w="100%"
          m="0 auto"
          mt="25px"
          objectPosition={programme.objectPosition}
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

          <NextLink href="/admission/applyOnline" legacyBehavior passHref>
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
          </NextLink>

          <NextLink href={programme.fileUrl} passHref legacyBehavior>
            <Link
              href={programme.fileUrl}
              target="_blank"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                fontFamily="Manrope"
                fontSize="24px"
                fontWeight="800"
                color="#FFF"
                my="20px"
              >
                <Image src={fileDownload} alt="download-icon" mr="13px" />
                <Text>Download Programme Brochure</Text>
              </Flex>
            </Link>
          </NextLink>
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

          <NextLink href="/admission/applyOnline" legacyBehavior passHref>
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
              _hover={{
                bg: "#020E1B",
                transition: "all ease 0.4s",
              }}
            >
              APPLY NOW
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Program;
