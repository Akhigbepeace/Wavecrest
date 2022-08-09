import {
  Grid,
  Link,
  Image,
  Text,
  Button,
  Flex,
  ListItem,
  Heading,
  Input,
  List,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/Images/WC-LOGO-july.png";
import linked from "assets/Images/linked.png";
import twitter from "assets/Images/Twitter.svg";
import facebook from "assets/Images/facebook.svg";
import whatsapp from "assets/Images/whatsapp.png";
import Instagram from "assets/Images/ig.svg";

const Footer = () => {
  const socials = [
    {
      icon: linked,
      to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: facebook,
      to: "https://web.facebook.com/WavecrestCollegeLagos/",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: twitter,
      to: "https://twitter.com/WaveColl",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: whatsapp,
      to: "https://api.whatsapp.com/send/?phone=09096856606 &text&app_absent=0",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: Instagram,
      to: "http://instagram.com/wavecrestcollege",
      target: "_blank",
      rel: "noreferrer",
    },
  ];

  const pages = [
    {
      name: "ABOUT US",
      to: "/about/profile",
    },
    {
      name: "ADMISSION",
      to: "/admission/admissionRequirements",
    },
    {
      name: "OPUS DEI",
      to: "https://opusdei.org/en-ng/",
    },
    {
      name: "CONTACT",
      to: "/contact",
    },
    {
      name: "ACADEMICS",
      to: "/academics/programmes",
    },
    {
      name: "WOMEN'S BOARD",
      to: "#!",
    },
    {
      name: "FAQs",
      to: "/admission/faqs",
    },
    {
      name: "ALUMNI",
      to: "/alumni",
    },
    {
      name: "CAREER",
      to: "/career/postJobVacancies",
    },
    {
      name: "BLOG",
      to: "/blog",
    },
    {
      name: "DOWNLOADS",
      to: "/downloads",
    },

    {
      name: "SUPPORT US",
      to: "/support",
    },
  ];

  return (
    <Grid
      background="#EBEDEF"
      gridTemplateColumns={{
        sm: "1fr",
        md: "1fr",
        lg: "1fr",
        xl: "repeat(3, auto)",
        "2xl": "repeat(3, auto)",
      }}
      gridGap="45px"
      pt="54px"
      px={{
        sm: "91px",
        md: "91px",
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
        <Link to="/" as={NavLink}>
          <Image
            src={logo}
            alt="logo"
            w="270px"
            height="54px"
            mb="10px"
            alignSelf="right"
          />
        </Link>

        <Text
          w="274px"
          color="#021D37"
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="18px"
          lineHeight="25px"
          textAlign="right"
        >
          75 Adisa Bashua Street,Off Adelabu Street, Surulere,Lagos State,
          Nigeria.
        </Text>

        <Flex
          flexDirection="column"
          fontFamily="Manrope"
          fontSize="18px"
          fontWeight="700"
          lineHeight="25px"
          color="#021D37"
          textAlign="right"
          mt="10px"
        >
          <Text fontFamily="Manrope">+234 909 685 6606</Text>
          <Text fontFamily="Manrope">+234 808 396 4840</Text>
          <Text fontFamily="Manrope">info@wavecrest.edu.ng</Text>
        </Flex>

        <Flex justifyContent="space-between">
          {socials.map((social, index) => {
            return (
              <Link
                key={index}
                href={social.to}
                target={social.target}
                rel={social.rel}
              >
                <Image
                  src={social.icon}
                  alt="linkedin"
                  w="40px"
                  h="40px"
                  mt="10px"
                  ml="15px"
                />
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <List display="grid" gridTemplateColumns="repeat(3, 1fr)">
        {pages.map((page, index) => {
          return (
            <ListItem key={index}>
              <Link
                href={page.to}
                fontFamily="Manrope"
                fontWeight="700"
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "16px",
                }}
                color="#021D37"
                _hover={{ textDecoration: "none", color: "#020E1B" }}
              >
                {page.name}
              </Link>
            </ListItem>
          );
        })}
      </List>

      <Flex flexDirection="column">
        <Heading
          color="#021D37"
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="22px"
          lineHeight="29px"
        >
          Suscribe to our Newsletter
        </Heading>
        <Text
          color="#021d37"
          p="5px 0"
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="18px"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tenetur
          voluptate, similique earum obcaecati placeat.
        </Text>
        <Stack>
          <Input
            placeholder="Name"
            bg="#fff"
            h="51px"
            mt="15px"
            p="15px 20px"
            borderRadius="3px"
            border="none"
            _placeholder={{
              color: "#021D37",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: "400",
            }}
          />

          <Input
            placeholder="Email"
            bg="#fff"
            h="51px"
            mt="10px"
            borderRadius="3px"
            border="none"
            p="15px 20px"
            _placeholder={{
              color: "#021D37",
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: "400",
            }}
          />
        </Stack>

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
          mt="8px"
          mb="70px"
          _hover={{
            bg: "#020E1B",
            transition: "all ease 0.4s",
          }}
        >
          SUBSCRIBE
        </Button>
      </Flex>
    </Grid>
  );
};

export default Footer;
