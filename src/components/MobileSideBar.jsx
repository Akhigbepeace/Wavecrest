import {
  Box,
  Flex,
  Image,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Logo = "/assets/imgs/logo_wavecrest.svg";
const Menu = "/assets/imgs/Menu.png";

const MobileSideBar = () => {
  const mobileNavLinks = [
    {
      name: "ABOUT",
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

  const [activeModalMenu, setActiveModalMenu] = useState(mobileNavLinks);
  const [showBackButton, setShowBackButton] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
      <Link to="/">
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
            h="100%"
            margin="auto"
            borderRadius="0"
            w={{
              sm: "235px",
              md: "345px",
              lg: "355px",
            }}
            mr="0"
          >
            <Box
              p="10px"
              onClick={() => {
                setActiveModalMenu(mobileNavLinks);
                setShowBackButton(false);
              }}
              display={showBackButton ? "block" : "none"}
            >
              <FaChevronLeft color="#FFF" size="20px" />
            </Box>

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
                {activeModalMenu.map((navLink, index) => {
                  return (
                    <Fragment key={index}>
                      {navLink.to ? (
                        <Link
                          key={index}
                          to={navLink.to}
                          color="#FFF"
                          fontFamily="Open Sans"
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="30px"
                          mt="10px"
                          transition="all ease 0.5s"
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
                      ) : (
                        <Box>
                          <Box
                            key={index}
                            display="flex"
                            color="#FFF"
                            fontFamily="Open Sans"
                            fontWeight="700"
                            fontSize="16px"
                            lineHeight="30px"
                            mt="10px"
                            transition="all ease 0.5s"
                            onClick={() => {
                              if (navLink.NestedLinks.length) {
                                setActiveModalMenu(navLink.NestedLinks);
                                setShowBackButton(true);
                              }
                            }}
                            _hover={{
                              color: "brown",
                              textDecoration: "none",
                            }}
                          >
                            <Flex>
                              <Text>{navLink.name}</Text>

                              <Box color="white" mt="7px" ml="10px">
                                {navLink.icon}
                              </Box>
                            </Flex>
                          </Box>
                        </Box>
                      )}
                    </Fragment>
                  );
                })}
              </Flex>

              <Flex flexDirection="column" mt="80px" w="160px">
                {sideLinks.map((sideLink, index) => {
                  return (
                    <Link
                      key={index}
                      href={sideLink.href}
                      bg={sideLink.bg}
                      p="7px"
                      color={sideLink.color}
                      mb="20px"
                      border="2px solid #fff"
                      borderRadius="3px"
                      fontFamily="Open Sans"
                      fontWeight="700"
                      fontSize="17px"
                      textAlign="center"
                      _hover={{
                        textDecoration: "none",
                        bg: sideLink.hoverBg,
                        border: sideLink.hoverBorder,
                        color: sideLink.hoverColor,
                      }}
                    >
                      {sideLink.name}
                    </Link>
                  );
                })}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default MobileSideBar;
