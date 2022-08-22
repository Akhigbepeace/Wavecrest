import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Link,
  Select,
  Button,
  Grid,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import visa from "assets/Images/visa.png";
import paypal from "assets/Images/paypal.png";
import mastercard from "assets/Images/mastercard.png";

const ApplyOnline = () => {
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
      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box>
          <Box
            w="88px"
            h="3px"
            mb="10px"
            mt="40px"
            bg="#021D37"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>
          <Heading
            my={{
              xl: "30px",
              "2xl": "30px",
            }}
            mb={{
              sm: "30px",
              md: "30px",
              lg: "30px",
            }}
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize={{
              sm: "24px",
              md: "32px",
              lg: "32px",
              xl: "32px",
              "2xl": "32px",
            }}
            color="#021D37"
          >
            Pre-Registration Form
          </Heading>
        </Box>

        <Flex flexDirection="column">
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                w={{
                  sm: "100%",
                  md: "400px",
                  lg: "526px",
                  xl: "526px",
                  "2xl": "526px",
                }}
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

          <Select
            placeholder="Programme"
            w={{
              sm: "100%",
              md: "400px",
              lg: "526px",
              xl: "526px",
              "2xl": "526px",
            }}
            h="67px"
            bg="#EBEDEF"
            textAlign="left"
            fontFamily="Manrope, sans-serif"
            border="none"
            color="#021D37"
            fontSize="18px"
            lineHeight="25px"
            fontWeight="400"
          >
            {programmes.map((programme, index) => {
              return (
                <option
                  value={programme.course}
                  key={index}
                  borderBottom={
                    programme.length - 1 === index
                      ? "none"
                      : "1px solid #EBEDEF"
                  }
                >
                  {programme.course}
                </option>
              );
            })}
          </Select>
        </Flex>

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
          <Text color="#CD2026" textDecoration="underline">
            would you like to pay for the whole fee of #464,000 instead ?
          </Text>
        </Box>

        <Box>
          <Flex
            mt="50px"
            alignItems="center"
            gridTemplateColumns={{
              sm: "auto auto",
            }}
            display={{
              sm: "grid",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            {payNow.map((pay, index) => {
              return (
                <Image
                  key={index}
                  src={pay.image}
                  w={pay.width}
                  mx="10px"
                  mb="10px"
                  h={pay.height}
                />
              );
            })}
          </Flex>

          <Link
            href="https://paystack.com/pay/wchform1"
            target="_blank"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              fontFamily="Manrope"
              fontSize="16px"
              fontWeight="700"
              m=" 30px 0"
              w={{
                sm: "100%",
                md: "400px",
                lg: "526px",
                xl: "423px",
                "2xl": "423px",
              }}
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

        <Text fontFamily="Manrope" fontSize="24px" fontWeight="400" my="45px">
          NB: After payment, a google link would be sent to your mail to
          complete the registration
        </Text>
      </Box>
    </Fragment>
  );
};

export default ApplyOnline;
