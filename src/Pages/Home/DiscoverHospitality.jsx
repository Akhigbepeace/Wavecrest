import { Box, Grid, Link, Text, Image, Heading } from "@chakra-ui/react";
import React from "react";
import discoverpic1 from "assets/Images/discoverpic 1.png";
import discoverpic2 from "assets/Images/discoverpic 2.png";
import training3 from "assets/Images/training3.png";

const DiscoverHospitality = () => {
  return (
    <Box
      display={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "flex",
        "2xl": "flex",
      }}
      alignItems="center"
      justifyContent="center"
      h="421px"
      my="50px"
      px="91px"
    >
      <Box mr="28px" w="500px">
        <Heading fontSize="32px" fontWeight="700" fontFamily="Playfair Display">
          WAVECREST <br /> COLLEGE OF HOSPITALITY
        </Heading>
        <Text
          m="22px 0"
          fontSize="18px"
          lineHeight="25px"
          fontFamily="Manrope"
          textAlign="left"
        >
          In the last 40 years we have consistently trained individuals and
          produced graduates who are in very high demand in the Industry. 100%
          of our graduates are decently employed within 3 months after
          graduation. About 40% become entrepreneurs while working and even
          employers of labour soon after graduation. Presently, Hospitality
          Education is a guarantee of employment in Nigeria.
        </Text>
        <Link
          href="/about/profile"
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
    </Box>
  );
};

export default DiscoverHospitality;
