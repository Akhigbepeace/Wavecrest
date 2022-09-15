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
  Box,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
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
      target: "_blank",
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
      to: "https://womensboard.org.ng/",
      target: "_blank",
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

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [inputField, setInputField] = useState(initialValues);

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_igsv77r",
      form.current,
      "JPAG_ZJVlAcuO_5D-"
    );

    if (res.status === 200 || res.text === "OK") {
      setInputField(initialValues);
    }
  };

  return (
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
        <Link to="/" as={NavLink}>
          <Image src={logo} alt="logo" w="270px" height="54px" mb="15px" />
        </Link>

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
          75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos State,
          Nigeria.
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
            +234 909 685 6606 &nbsp; | &nbsp; +234 808 396 4840
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
            <Text>+234 909 685 6606</Text>
            <Text>+234 808 396 4840</Text>
          </Box>
          <Text fontFamily="Manrope"> info@wavecrest.edu.ng</Text>
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
                  mr={{
                    sm: "15px",
                    md: "15px",
                    lg: "15px",
                    xl: "0",
                    "2xl": "0",
                  }}
                  ml={{
                    sm: "0",
                    md: "0",
                    lg: "0",
                    xl: "15px",
                    "2xl": "15px",
                  }}
                />
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <List
        display="grid"
        gridTemplateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        h="220px"
        lineHeight="35px"
        textAlign={{
          sm: "left",
          md: "left",
          lg: "left",
        }}
      >
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
                mb="-90px"
                ml={{
                  sm: "14px",
                  md: "14px",
                }}
                color="#021D37"
                _hover={{ textDecoration: "none", color: "#020E1B" }}
                target={page.target}
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

        <form ref={form} onSubmit={sendEmail}>
          <Stack>
            <Input
              name="user_name"
              placeholder="Name"
              bg="#fff"
              h="51px"
              mt="15px"
              p="15px 20px"
              borderRadius="3px"
              onChange={inputValues}
              border="none"
              _placeholder={{
                color: "#021D37",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
              }}
            />

            <Input
              name="user_email"
              placeholder="Email"
              bg="#fff"
              h="51px"
              mt="10px"
              borderRadius="3px"
              border="none"
              p="15px 20px"
              onChange={inputValues}
              _placeholder={{
                color: "#021D37",
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: "400",
              }}
            />
          </Stack>

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
            SUBSCRIBE
          </Button>
        </form>
      </Flex>

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
                mr={{
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "0",
                  "2xl": "0",
                }}
                ml={{
                  sm: "0",
                  md: "0",
                  lg: "0",
                  xl: "15px",
                  "2xl": "15px",
                }}
              />
            </Link>
          );
        })}
      </Flex>
    </Grid>
  );
};

export default Footer;
