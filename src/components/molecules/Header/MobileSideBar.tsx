import {
  Box,
  Flex,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  Text,
  Button,
} from "@chakra-ui/react";
import Logo from "components/atoms/Logo";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { navLinks, sideLinks } from "../Navbar/constants";
import SideLink from "../Navbar/SideLink";

const Menu = "/assets/imgs/Menu.png";

const MobileSideBar = () => {
  const router = useRouter();

  const [activeModalMenu, setActiveModalMenu] = useState(navLinks);
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
      <Logo />

      <Box cursor="pointer">
        <Image
          src={Menu}
          alt="menu"
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
                setActiveModalMenu(navLinks);
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
                      <Box>
                        <Button
                          key={index}
                          display="flex"
                          background="none"
                          padding="0"
                          color="#FFF"
                          fontFamily="Open Sans"
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="30px"
                          mt="10px"
                          transition="all ease 0.5s"
                          cursor="pointer"
                          onClick={() => {
                            if (
                              navLink.NestedLinks &&
                              navLink.NestedLinks.length
                            ) {
                              setActiveModalMenu(navLink.NestedLinks as any);
                              setShowBackButton(true);
                            } else {
                              router.push(navLink.to);
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
                        </Button>
                      </Box>
                    </Fragment>
                  );
                })}
              </Flex>

              <Flex flexDirection="column" mt="80px">
                {sideLinks.map((sideLink, index) => (
                  <Box display="inline-block" key={index} mb="30px">
                    <SideLink variant={sideLink.variant} href={sideLink.href}>
                      {sideLink.name}
                    </SideLink>
                  </Box>
                ))}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default MobileSideBar;
