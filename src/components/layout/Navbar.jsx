import {
  Image,
  Stack,
  Flex,
  Link,
  Box,
  Input,
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
import searchIcon from "assets/Images/search.svg";
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
          name: "HOSTEL",
          to: "/admission/hostel",
        },
        {
          name: "APPLY ONLINE",
          to: "/admission/applyOnline",
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
          name: "JOB PLACEMENT",
          to: "/academics/jobPlacement",
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
      name: "CONTACT US",
      to: "/contact",
      NestedLinks: [],
    },
  ];

  const sideLinks = [
    {
      name: "SUPPORT US",
      to: "/support",
      bg: "#021D37",
      color: "white",
      hoverBackground: "white",
      hoverColor: "#021d37",
      textDecoration: "none",
    },

    {
      name: "APPLY NOW",
      to: "apply",
      ml: "27px",
      bg: "#FFF",
      color: "#021D37",
      hoverBackground: "#EBEDEF",
      hoverColor: "#021d37",
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
    <Box zIndex="3" w="100%" mt="0" position="sticky" top="0">
      <Flex
        alignItems="center"
        bg="#FFF"
        justifyContent="space-between"
        p="29px 91px"
      >
        <Link to="/" as={NavLink}>
          <Image w="238px" h="52px" src={Logo} />
        </Link>

        <Stack direction="row" alignItems="center">
          <Link
            href={Search}
            rel="noreferrer"
            onClick={() => {
              <Box>
                <Input variant="filled" type="name" w="278px" h="47px" />
                <Image src={searchIcon} w="20px" h="20px" />
              </Box>;
            }}
          >
            <Image src={searchIcon} w="20px" h="20px" mr="18px" />
          </Link>

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
          {sideLinks.map((sideLink) => {
            return (
              <Link
                href={sideLink.to}
                color={sideLink.color}
                p="7px"
                w="133px"
                ml={sideLink.ml}
                bg={sideLink.bg}
                border="2px solid #fff"
                borderRadius="3px"
                fontFamily="Open Sans"
                fontWeight="700"
                fontSize="17px"
                textAlign="center"
                _hover={{
                  textDecoration: "none",
                }}
              >
                {sideLink.name}
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
