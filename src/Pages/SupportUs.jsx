import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Select,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/layout/Navbar";
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

  const programmes = [
    {
      course: "HND in Hospitality Management",
    },
    {
      course: "ND in Hospitality Management",
    },
    {
      course: "Certificate in Hospitality Operations",
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

      <Box px="91px">
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

        <Select
          placeholder="Programme"
          w="526px"
          h="67px"
          bg="#EBEDEF"
          textAlign="left"
          fontFamily="Manrope, sans-serif"
          border="none"
          color="#021D37"
          fontSize="18px"
          lineHeight="25px"
          fontWeight="400"
          mb="10px"
        >
          {programmes.map((programme, index) => {
            return (
              <option
                value={programme.course}
                key={index}
                borderBottom={
                  programme.length - 1 === index ? "none" : "1px solid #EBEDEF"
                }
              >
                {programme.course}
              </option>
            );
          })}
        </Select>

        <Box
          my="20px"
          ml="25px"
          fontFamily="Manrope"
          fontSize="18px"
          fontWeight="400"
          lineHeight="33px"
        >
          <Text color="#021D37">
            Fee for the programme appears here (e.g Subsidized fee for the
            programme is #189,000)
          </Text>

          <Link color="#CD2026" textDecoration="underline">
            would you like to pay for the whole fee of #464,000 instead ?
          </Link>
        </Box>

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

          <Button
            fontFamily="Manrope"
            fontSize="16px"
            fontWeight="700"
            m=" 30px 0"
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
        </Box>

        <Text fontFamily="Manrope" fontSize="24px" fontWeight="400" my="45px">
          NB: After payment, a google link would be sent to your mail to
          complete the registration
        </Text>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default SupportUs;
