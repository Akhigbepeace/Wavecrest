import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Link,
  Button,
  Grid,
  Textarea,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/Navbar";
import MobileSideBar from "components/MobileSideBar";
import admission from "assets/Images/Admission.png";
import visa from "assets/Images/visa.png";
import paypal from "assets/Images/paypal.png";
import mastercard from "assets/Images/mastercard.png";
import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";

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
      <MobileSideBar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={admission} h="100%" w="100%" objectFit="cover" />

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
              sm: "34px",
              md: "50px",
              lg: "50px",
              xl: "60px",
              "2xl": "60px",
            }}
            textAlign="center"
            mt="140px"
          >
            SUPPORT US
          </Text>
        </Box>
      </Box>

      <Box>
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
          my="40px"
          w={{
            sm: "290px",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          mx="auto"
        >
          Support Us
        </Heading>

        <Flex
          flexDirection="column"
          w={{
            sm: "290px",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          mx="auto"
        >
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                h="67px"
                mb="10px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            );
          })}

          <Textarea
            placeholder="Comments"
            h="67px"
            bg="#EBEDEF"
            _placeholder={{
              fontFamily: "Manrope",
              color: "#021D37",
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: "400",
            }}
          />
        </Flex>

        <Box
          w={{
            sm: "290px",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          mx="auto"
        >
          <Grid
            mt="50px"
            alignItems="center"
            gridTemplateColumns={{
              sm: "repeat(2, auto)",
              md: "repeat(3, auto)",
              lg: "repeat(3, auto)",
              xl: "repeat(3, auto)",
              "2xl": "repeat(3, auto)",
            }}
          >
            {payNow.map((pay, index) => {
              return (
                <Image
                  key={index}
                  src={pay.image}
                  w={pay.width}
                  mr="10px"
                  h={pay.height}
                />
              );
            })}
          </Grid>

          <Link
            href="https://paystack.com/pay/wchdonate"
            target="_blank"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              type="submit"
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
              mt="8px"
              mb="70px"
              _hover={{
                bg: "#020E1B",
                transition: "all ease 0.4s",
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
