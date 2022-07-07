import {
  Image,
  Stack,
  Flex,
  Link,
  Box,
  useOutsideClick,
  useBoolean,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import Logo from "assets/Images/WC-LOGO-july.png";
import Linked from "assets/Images/linked.png";
import Whatapps from "assets/Images/whatsapp.png";
import Facebook from "assets/Images/facebook.png";
import Twitter from "assets/Images/Twitter.png";
import Instagram from "assets/Images/Instagram.png";
import Search from "assets/Images/Search.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const socials = [
    {
      icon: Linked,
      to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
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
      name: "HOME",
      to: "/",
      NestedLinks: [],
    },
    {
      name: "ABOUT",
      to: "/about",
      NestedLinks: [
        {
          name: "PROFILE",
          to: "#",
        },
        {
          name: "MILESTONE",
          to: "#",
        },
        {
          name: "OUR TEAM",
          to: "#",
        },
      ],
    },
    {
      name: "ADMISSION",
      to: "/admission",
      NestedLinks: [
        {
          name: "APPLY ONLINE",
          to: "#",
        },
        {
          name: "ADMISSION REQUIREMENTS",
          to: "#",
        },
        {
          name: "TUITION AND SCHOLARSHIPS",
          to: "#",
        },
        {
          name: "HOSTEL",
          to: "#",
        },
        {
          name: "FAQs",
          to: "#",
        },
      ],
    },
    {
      name: "ACADEMICS",
      to: "/academics",
      NestedLinks: [
        {
          name: "PROGRAMMES",
          to: "#",
        },
        {
          name: "TRAINING",
          to: "#",
        },
        {
          name: "JOB PLACEMENT",
          to: "#",
        },
        {
          name: "INTERNSHIP",
          to: "#",
        },
        {
          name: "NYSC",
          to: "#",
        },
      ],
    },
    {
      name: "BLOG",
      to: "/blog",
      NestedLinks: [],
    },
    {
      name: "ALUMNI",
      NestedLinks: [],
      to: "/alumni",
    },
    {
      name: "CONTACT US",
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
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between" p="29px 91px">
        <Link to="/">
          <Image w="238px" h="52px" src={Logo} />
        </Link>

        <Stack direction="row" alignItems="center">
          <Link to="#!" target="_blank" rel="noreferrer">
            <Image src={Search} w="20px" h="20px" mr="18px" />
          </Link>

          {socials.map((social) => {
            return (
              <Link to={social.to} target={social.target} rel={social.rel}>
                <Image src={social.icon} w="34px" h="34px" ml="15px" />
              </Link>
            );
          })}
        </Stack>
      </Flex>

      <Flex px="91px" pt="34px" h="91px" bg="#021D37" alignItems="center">
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          {navLinks.map((navLink, index) => {
            return (
              <Flex
                alignItems="center"
                ref={ref}
                pb="25px"
                onMouseLeave={() => setShowNestedLinks.off()}
                key={index}
                borderBottom="6px solid transparent"
                position="relative"
                borderColor={
                  currentLink === index && showNestedLinks
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
            to="#!"
            color="white"
            p="7px"
            w="133px"
            ml="103px"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans"
            fontWeight="700"
            fontSize="17px"
            textAlign="center"
            _hover={{
              background: "white",
              color: "#021d37",
              textDecoration: "none",
            }}
          >
            SUPPORT US
          </Link>

          <Link
            to="#!"
            bg="#fff"
            color="#021d37"
            p="7px"
            w="133px"
            ml="27px"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans"
            fontWeight="700"
            fontSize="17px"
            textAlign="center"
            _hover={{
              background: "#021d37",
              color: "white",
              textDecoration: "none",
            }}
          >
            APPLY NOW
          </Link>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Navbar;
