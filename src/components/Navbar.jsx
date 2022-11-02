import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  useOutsideClick,
  useBoolean,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
      to: "https://wa.me/+2349096856606",
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

  const ref = React.useRef();

  const [showNestedLinks, setShowNestedLinks] = useBoolean();
  const [currentLink, setCurrentLink] = useState(0);

  useOutsideClick({
    ref: ref,
    handler: () => setShowNestedLinks.off(),
  });

  const navigate = useNavigate();

  const redirect = (e) => {
    navigate("/home", { replace: true });
  };

  return (
    <Fragment>
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
          <Image w="238px" h="52px" src={Logo} />
        </Box>

        <Stack direction="row" alignItems="center">
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
                  navigate(sideLink.href, { replace: true });
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
    </Fragment>
  );
};

export default Navbar;
