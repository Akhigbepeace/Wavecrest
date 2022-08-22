import {
  Box,
  Flex,
  Image,
  Link,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  useDisclosure,
  Stack,
  useOutsideClick,
  useBoolean,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "assets/Images/logo_wavecrest.svg";
import Linked from "assets/Images/linked.png";
import Whatapps from "assets/Images/whatsapp.png";
import Facebook from "assets/Images/facebook.svg";
import Twitter from "assets/Images/Twitter.svg";
import Instagram from "assets/Images/ig.svg";
import Search from "./Search";
import Menu from "assets/Images/Menu.png";

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

  const ref = React.useRef();
  const [showNestedLinks, setShowNestedLinks] = useBoolean();
  const [currentLink, setCurrentLink] = useState(0);

  useOutsideClick({
    ref: ref,
    handler: () => setShowNestedLinks.off(),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Link to="/" as={NavLink}>
          <Image w="238px" h="52px" src={Logo} />
        </Link>

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

      <Flex
        bg="#FFF"
        justifyContent="space-between"
        p="29px 20px"
        position="sticky"
        top="0"
        zIndex="4"
        display={{
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Link to="/" as={NavLink}>
          <Image
            w={{
              sm: "143px",
              md: "143px",
              lg: "160px",
              xl: "238px",
              "2xl": "238px",
            }}
            h={{
              sm: "37px",
              md: "37px",
              lg: "37px",
              xl: "52px",
              "2xl": "52px",
            }}
            src={Logo}
          />
        </Link>

        <Box cursor="pointer">
          <Image
            src={Menu}
            w="37px"
            h="37px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
            onClick={onOpen}
          />

          <Modal
            isCentered
            isOpen={isOpen}
            motionPreset="slideInRight"
            onClose={onClose}
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          >
            <ModalOverlay bg="none" />

            <ModalContent
              bg="#021D37"
              p="0"
              margin="auto"
              borderRadius="0"
              h="100%"
              w={{
                sm: "235px",
                md: "345px",
                lg: "355px",
              }}
              ml="0"
            >
              <ModalCloseButton
                bg="#021D37"
                color="#FFF"
                cursor="pointer"
                _hover={{
                  bg: "#020E1B",
                }}
              />

              <ModalBody
                w={{
                  sm: "235px",
                  md: "345px",
                  lg: "355px",
                }}
              >
                <Flex flexDirection="column">
                  {navLinks.map((navLink, index) => {
                    return (
                      <Link
                        key={index}
                        display="flex"
                        color="#FFF"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="30px"
                        mt="20px"
                        transition="all ease 0.5s"
                        to={navLink.to}
                        as={NavLink}
                        _hover={{
                          color: "brown",
                          textDecoration: "none",
                        }}
                      >
                        <Text>{navLink.name}</Text>

                        <Box color="white" mt="7px" ml="10px">
                          {navLink.icon}
                        </Box>
                      </Link>
                    );
                  })}
                </Flex>

                <Flex flexDirection="column" mt="80px" w="160px">
                  <Link
                    href="/support"
                    bg="transparent"
                    p="7px"
                    color="#FFF"
                    mb="20px"
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
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
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
      </Box>
    </Fragment>
  );
};

export default Navbar;