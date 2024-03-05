import { Grid, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import Logo from "components/atoms/Logo";
import Pages from "./Pages";
import Newsletter from "./Newsletter";
import SocialMediaLinks from "components/molecules/SocialMediaLinks";
import FooterCopywright from "./FooterCopywright";

export type FooterProps = {
  address: string;
  phone1: string;
  phone2: string;
  email: string;
};
const Footer = (props: FooterProps) => {
  const { address, phone1, phone2, email } = props;
  return (
    <>
      <Grid
        background="#EBEDEF"
        gridTemplateColumns={{
          sm: "1fr",
          md: "1fr",
          lg: "auto",
          xl: "repeat(3, auto)",
          "2xl": "repeat(3, 1fr)",
        }}
        gridGap="45px"
        pt="54px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Flex
          flexDirection="column"
          alignItems={{
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-end",
            "2xl": "flex-end",
          }}
        >
          <Box mb="10px">
            <Logo />
          </Box>

          <Text
            w="274px"
            color="#021D37"
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="18px"
            lineHeight="25px"
            textAlign={{
              sm: "left",
              md: "left",
              lg: "left",
              xl: "right",
              "2xl": "right",
            }}
          >
            {address}
          </Text>

          <Box
            fontFamily="Manrope"
            fontSize={{
              sm: "16px",
              md: "18px",
              lg: "18px",
              xl: "18px",
              "2xl": "18px",
            }}
            fontWeight="700"
            lineHeight="25px"
            color="#021D37"
            textAlign={{
              sm: "left",
              md: "left",
              lg: "left",
              xl: "right",
              "2xl": "right",
            }}
            mt="15px"
          >
            <Text
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
                "2xl": "none",
              }}
            >
              {phone1} &nbsp; | &nbsp; {phone2}
            </Text>

            <Box
              display={{
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
                "2xl": "block",
              }}
            >
              <Text>{phone1}</Text>
              <Text>{phone2}</Text>
            </Box>
            <Text fontFamily="Manrope"> {email}</Text>
          </Box>

          <Flex
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <SocialMediaLinks />
          </Flex>
        </Flex>

        <Pages />

        <Newsletter />

        <Flex
          display={{
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "none",
            "2xl": "none",
          }}
          mb="30px"
        >
          <SocialMediaLinks />
        </Flex>
      </Grid>

      <FooterCopywright />
    </>
  );
};

export default Footer;
