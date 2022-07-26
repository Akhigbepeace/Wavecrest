import {
  Image,
  Stack,
  Flex,
  Link,
  Box,
  useOutsideClick,
  useBoolean,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "assets/Images/logo_wavecrest.svg";
import Linked from "assets/Images/linked.png";
import Whatapps from "assets/Images/whatsapp.png";
import Facebook from "assets/Images/facebook.svg";
import Twitter from "assets/Images/Twitter.svg";
import Instagram from "assets/Images/ig.svg";
import Search from "./Search";

const Navbar = () => {
  const loc = useLocation();
  const socials = [
    {
      icon: Linked,
      to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
      as: { NavLink },
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: Facebook,
      to: "https://web.facebook.com/WavecrestCollegeLagos/",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: Twitter,
      to: "https://twitter.com/WaveColl",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      icon: Whatapps,
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

  const navLinks = [
    {
      name: "ABOUT",
      to: "/about/profile",
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
      name: "ADMISSION",
      to: "/admission/admissionRequirements",
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
      name: "ACADEMICS",
      to: "/academics/programmes",
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
      name: "ALUMNI",
      NestedLinks: [],
      to: "/alumni",
    },

    {
      name: "BLOG",
      to: "/blog",
      NestedLinks: [],
    },

    {
      name: "CAREER",
      to: "/career/postJobVacancies",
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

  const ref = React.useRef();
  const [showNestedLinks, setShowNestedLinks] = useBoolean();
  const [currentLink, setCurrentLink] = useState(0);

  useOutsideClick({
    ref: ref,
    handler: () => setShowNestedLinks.off(),
  });

  return (
    <Box>
      <Flex
        alignItems="center"
        bg="#FFF"
        justifyContent="space-between"
        p="29px 91px"
      >
        <Link to="/" as={NavLink}>
          <Image w="238px" h="52px" src={Logo} />
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          w="100%"
          justifyContent="flex-end"
          transition="all 2s linear 1s"
        >
          <Search />

          {socials.map((social, index) => {
            return (
              <Link
                key={index}
                href={social.to}
                target={social.target}
                rel={social.rel}
              >
                <Image src={social.icon} w="34px" h="34px" ml="15px" />
              </Link>
            );
          })}
        </Stack>
      </Flex>

      <Flex
        px="91px"
        pt="34px"
        justifyContent="space-between"
        h="91px"
        w="100%"
        position="sticky"
        top="0"
        zIndex="4"
        bg="#021D37"
        alignItems="center"
      >
        <Flex alignItems="center">
          {navLinks.map((navLink, index) => {
            return (
              <Flex
                alignItems="center"
                ref={ref}
                pb="25px"
                mr="25px"
                onMouseLeave={() => setShowNestedLinks.off()}
                key={index}
                borderBottom="6px solid transparent"
                position="relative"
                borderColor={
                  loc.pathname.includes(navLink.to) ||
                  (currentLink === index && showNestedLinks)
                    ? "#fff"
                    : "transparent"
                }
              >
                <Link
                  onMouseEnter={() => {
                    setCurrentLink(index);
                    setShowNestedLinks.on();
                  }}
                  as={NavLink}
                  to={navLink.to}
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
                      <Link
                        to={nestedLink.to}
                        as={NavLink}
                        display="block"
                        fontWeight="100"
                        key={index}
                        p="5px 20px"
                        borderBottom={
                          navLink.NestedLinks.length - 1 === index
                            ? "none"
                            : "1px solid white"
                        }
                        transition="all ease 0.5s"
                        _hover={{
                          textDecoration: "none",
                          color: "brown",
                        }}
                      >
                        {nestedLink.name}
                      </Link>
                    );
                  })}
                </Box>
              </Flex>
            );
          })}
        </Flex>

        <Flex pb="29px">
          <Link
            href="/support"
            bg="#021D37"
            p="7px"
            w="133px"
            ml="27px"
            color="#FFF"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans"
            fontWeight="700"
            fontSize="17px"
            textAlign="center"
            _hover={{
              textDecoration: "none",
              bg: "#020E1B",
              border: "2px solid #EBEDEF",
              color: "#FFF",
            }}
          >
            SUPPORT US
          </Link>

          <Link
            href="/admission/applyOnline"
            color="#021D37"
            p="7px"
            w="133px"
            ml="27px"
            bg="#FFF"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans"
            fontWeight="700"
            fontSize="17px"
            textAlign="center"
            _hover={{
              textDecoration: "none",
              bg: "#EBEDEF",
              border: "2px solid #EBEDEF",
              color: "#021d37",
            }}
          >
            APPLY NOW
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
