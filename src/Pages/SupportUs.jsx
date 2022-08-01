import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/layouts/Navbar";
import admission from "assets/Images/Admission.png";
import visa from "assets/Images/visa.png";
import paypal from "assets/Images/paypal.png";
import mastercard from "assets/Images/mastercard.png";
import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";

const SupportUs = () => {
  const forms = [
    {
      fieldType: "name",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "number",
      placeHolder: "Phone Number",
      variant: "filled",
    },
    {
      fieldType: "email",
      placeHolder: "Email",
      variant: "filled",
    },
  ];

  const payNow = [
    {
      image: paypal,
      width: "152px",
      height: "38px",
    },
    {
      image: mastercard,

      width: "92px",
      height: "55px",
    },
    {
      image: visa,
      width: "112px",
      height: "35px",
    },
  ];

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={admission} h="100%" w="100%" />

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
            SUPPORT US
          </Text>
        </Box>
      </Box>

      <Box w="1200px" mx="auto">
        <Heading
          my="40px"
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
        >
          Support Us
        </Heading>

        <Flex flexDirection="column">
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                w="526px"
                h="67px"
                mb="10px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            );
          })}
        </Flex>

        <Box>
          <Flex mt="50px" alignItems="center">
            {payNow.map((pay, index) => {
              return (
                <Image
                  key={index}
                  src={pay.image}
                  w={pay.width}
                  mx="10px"
                  h={pay.height}
                />
              );
            })}
          </Flex>
          <Link
            href="https://paystack.com/pay/wchdonate"
            target="_blank"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              fontFamily="Manrope"
              fontSize="16px"
              fontWeight="700"
              mt="30px"
              mb="100px"
              w="423px"
              bg="#021D37"
              py="7px"
              textAlign="center"
              color="#FFF"
              _hover={{
                bg: "#020E1B",
              }}
            >
              PAY NOW
            </Button>
          </Link>
        </Box>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default SupportUs;
