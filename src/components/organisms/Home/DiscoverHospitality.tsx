import React from "react";
import { Box, Grid, Link, Text, Image, Heading, Flex } from "@chakra-ui/react";
import { paths } from "config/constants/pages";
import landingPage from "config/copy/landingPage";

const discoverpic1 = "/assets/imgs/discoverpic 1.png";
const discoverpic2 = "/assets/imgs/discoverpic 2.png";
const training3 = "/assets/imgs/training3.png";

const DiscoverHospitality = () => {
  return (
    <Flex
      display={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "flex",
        "2xl": "flex",
      }}
      alignItems="center"
      justifyContent="space-between"
      h="421px"
      my="50px"
      w={{
        xl: "1100px",
        "2xl": "1300px",
      }}
      mx="auto"
    >
      <Box mr="20px">
        <Heading fontSize="28px" fontWeight="700" fontFamily="Playfair Display">
          WAVECREST <br /> COLLEGE OF HOSPITALITY
        </Heading>
        <Text
          m="22px 0"
          fontSize="18px"
          lineHeight="25px"
          fontFamily="Manrope"
          textAlign="justify"
        >
          {landingPage.discover}
        </Text>
        <Link
          href={paths.profile}
          background="#021d37"
          w="208px"
          p="10px 26px"
          color="#fff"
          fontSize="20px"
          textDecoration="none"
          borderRadius="3px"
          fontFamily="Manrope"
          h="52px"
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          READ MORE
        </Link>
      </Box>

      <Grid gridTemplateColumns="1fr 1fr" m="50px 0">
        <Box w="320px" height="214px">
          <Image
            src={discoverpic1}
            w="100%"
            h="100%"
            p="33px"
            alt="workbench"
            objectFit="cover"
          />
        </Box>

        <Box background="#021d37" w="320px" h="214px">
          <Text
            color="#fff"
            fontSize="40px"
            w="100%"
            h="100%"
            textAlign="center"
            fontFamily="Playfair Display"
            p="40px"
          >
            Discover Hospitality
          </Text>
        </Box>

        <Box w="320px" h="214px">
          <Image
            src={training3}
            w="100%"
            h="100%"
            alt="img_ny"
            objectFit="cover"
          />
        </Box>

        <Box w="320px" h="214px">
          <Image
            src={discoverpic2}
            w="100%"
            h="100%"
            p="33px"
            alt="coffee"
            objectFit="cover"
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default DiscoverHospitality;
