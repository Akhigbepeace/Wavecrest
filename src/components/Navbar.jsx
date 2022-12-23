import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  useOutsideClick,
  useBoolean,
} from "@chakra-ui/react";

import NextLink from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Search from "./Search";
import { useRouter } from "next/router";

const Logo = "/assets/imgs/WC-LOGO-july.png";
const socials = [
  {
    icon: "/assets/imgs/linkedin.svg",
    to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/facebook.svg",
    to: "https://web.facebook.com/WavecrestCollegeLagos/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/Twitter.svg",
    to: "https://twitter.com/WaveColl",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/whatsapp.png",
    to: "https://wa.me/+2349096856606",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/ig.svg",
    to: "http://instagram.com/wavecrestcollege",
    target: "_blank",
    rel: "noreferrer",
  },
];

const navLinks = [
  {
    name: "ABOUT",
    to: "/about/profile",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "PROFILE",
        to: "/about/profile",
      },
      {
        name: "MILESTONE",
        to: "/about/milestone",
      },
      {
        name: "OUR TEAM",
        to: "/about/ourTeam",
      },
    ],
  },

  {
    name: "ACADEMICS",
    to: "/academics/programmes",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "PROGRAMMES",
        to: "/academics/programmes",
      },
      {
        name: "TRAINING",
        to: "/academics/training",
      },

      {
        name: "INTERNSHIP",
        to: "/academics/internship",
      },
      {
        name: "NYSC",
        to: "/academics/nysc",
      },
    ],
  },

  {
    name: "ADMISSION",
    to: "/admission/admissionRequirements",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "ADMISSION REQUIREMENTS",
        to: "/admission/admissionRequirements",
      },
      {
        name: "TUITION AND SCHOLARSHIPS",
        to: "/admission/tuitionAndScholarship",
      },
      {
        name: "APPLY ONLINE",
        to: "/admission/applyOnline",
      },
      {
        name: "HOSTEL",
        to: "/admission/hostel",
      },

      {
        name: "FAQs",
        to: "/admission/faqs",
      },
    ],
  },
  {
    name: "ALUMNI",
    NestedLinks: [],
    to: "#",
  },

  {
    name: "BLOG",
    to: "/blog",
    NestedLinks: [],
  },

  {
    name: "CAREER",
    to: "/career/postJobVacancies",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "POST JOB VACANCIES",
        to: "/career/postJobVacancies",
      },
      {
        name: "VIEW JOB VACANCIES",
        to: "/career/viewJobVacancies",
      },
    ],
  },

  {
    name: "CONTACT",
    to: "/contact",
    NestedLinks: [],
  },
];

const sideLinks = [
  {
    name: "SUPPORT US",
    href: "/support",
    bg: "transparent",
    color: "#FFF",
    border: "2px solid #fff",
    hoverBg: "#020E1B",
    hoverBorder: "2px solid #EBEDEF",
    hoverColor: "#FFF",
  },
  {
    name: "APPLY NOW",
    href: "/admission/applyOnline",
    bg: "#FFF",
    border: "2px solid #fff",
    color: "#021D37",
    hoverBg: "#EBEDEF",
    hoverBorder: "2px solid #EBEDEF",
    hoverColor: "#021d37",
  },
];

const Navbar = () => {
  const ref = React.useRef();
  const router = useRouter();

  useOutsideClick({
    ref: ref,
    handler: () => setShowNestedLinks.off(),
  });

  const [showNestedLinks, setShowNestedLinks] = useBoolean();
  const [currentLink, setCurrentLink] = useState(0);

  const redirect = () => {
    router.push("/home");
  };

  return (
    <>
      <Flex
        alignItems="center"
        bg="#FFF"
        justifyContent="space-between"
        p="29px 91px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Box onClick={() => redirect()} cursor="pointer">
          <Image alt="logo" w="238px" h="52px" src={Logo} />
        </Box>

        <Stack direction="row" alignItems="center">
          <Search />

          {socials.map((social, index) => {
            return (
              <NextLink key={index} href={social.to} passHref legacyBehavior>
                <Link key={index} target={social.target} rel={social.rel}>
                  <Image
                    alt="icon"
                    src={social.icon}
                    w="34px"
                    h="34px"
                    ml="15px"
                    layout="fixed"
                  />
                </Link>
              </NextLink>
            );
          })}
        </Stack>
      </Flex>

      <Box
        px="91px"
        pt="34px"
        justifyContent="space-between"
        h="91px"
        w="100%"
        bg="#021D37"
        alignItems="center"
        position="sticky"
        top="0"
        zIndex="4"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Flex alignItems="center">
          {navLinks.map((navLink, index) => {
            return (
              <Flex
                key={index}
                ref={ref}
                alignItems="center"
                pb="25px"
                mr="25px"
                onMouseLeave={() => setShowNestedLinks.off()}
                borderBottom="6px solid transparent"
                position="relative"
                borderColor={
                  router.pathname.includes(navLink.to) ||
                  (currentLink === index && showNestedLinks)
                    ? "#fff"
                    : "transparent"
                }
              >
                <NextLink href={navLink.to} passHref legacyBehavior>
                  <Link
                    onMouseEnter={() => {
                      setCurrentLink(index);
                      setShowNestedLinks.on();
                    }}
                    color="#fff"
                    fontSize="16px"
                    textAlign="center"
                    transition="all ease 0.5s"
                    _hover={{
                      color: "brown",
                      textDecoration: "none",
                    }}
                  >
                    {navLink.name}
                  </Link>
                </NextLink>

                <Box
                  color="#fff"
                  w="max-content"
                  position="absolute"
                  onMouseLeave={() => setShowNestedLinks.off()}
                  bg="#021d37"
                  zIndex="3"
                  top="55px"
                  display={
                    currentLink === index && showNestedLinks ? "block" : "none"
                  }
                >
                  {navLink.NestedLinks.map((nestedLink, index) => {
                    return (
                      <NextLink key={index} href={nestedLink.to} passHref>
                        <Link
                          display="block"
                          fontWeight="100"
                          key={index}
                          p="4px 20px"
                          borderBottom={
                            navLink.NestedLinks.length - 1 === index
                              ? "none"
                              : "1px solid white"
                          }
                          transition="all ease 0.5s"
                          zIndex="2"
                          _hover={{
                            textDecoration: "none",
                            color: "brown",
                          }}
                        >
                          {nestedLink.name}
                        </Link>
                      </NextLink>
                    );
                  })}
                </Box>
              </Flex>
            );
          })}
        </Flex>

        <Flex pb="29px">
          {sideLinks.map((sideLink, index) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  router.push(sideLink.href);
                }}
                bg={sideLink.bg}
                p="7px"
                w="133px"
                ml="27px"
                color={sideLink.color}
                border="2px solid #fff"
                borderRadius="3px"
                fontFamily="Open Sans"
                fontWeight="700"
                fontSize="17px"
                textAlign="center"
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: sideLink.hoverBg,
                  border: sideLink.hoverBorder,
                  color: sideLink.hoverColor,
                }}
              >
                {sideLink.name}
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
