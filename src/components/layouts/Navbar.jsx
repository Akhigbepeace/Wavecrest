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

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      href: "#",
      subMenu: [
        {
          name: "profile",
          href: "#",
        },
        {
          name: "milestone",
          href: "#",
        },
        {
          name: "our team",
          href: "#",
        },
      ],
    },
    {
      name: "about",
      href: "#",
      subMenu: [
        {
          name: "apply",
          href: "#",
        },
        {
          name: "admission requiremtes",
          href: "#",
        },
        {
          name: "tuition and scholarship",
          href: "#",
        },
      ],
    },
    {
      name: "admission",
      href: "#",
      subMenu: [],
    },
    {
      name: "academics",
      subMenu: [],
      href: "#",
    },
    {
      name: "about",
      subMenu: [],
      href: "#",
    },
    {
      name: "admission",
      subMenu: [],
      href: "#",
    },
    {
      name: "academics",
      subMenu: [],
      href: "#",
    },
  ];
  const ref = React.useRef();
  const [showSubMenu, setShowMenu] = useBoolean();
  const [currentLink, setCurrentLink] = useState(0);

  useOutsideClick({
    ref: ref,
    handler: () => setShowMenu.off(),
  });

  return (
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between" p="29px 91px">
        <Image w="238px" h="52px" src={Logo} />

        <Stack direction="row" alignItems="center">
          <Link href="#!" target="_blank" rel="noreferrer">
            <Image src={Search} w="20px" h="20px" mr="18px" />
          </Link>

          <Link
            href="https://www.linkedin.com/company/wavecrest-college-of-hospitality/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Linked} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="https://web.facebook.com/WavecrestCollegeLagos/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Facebook} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="https://twitter.com/WaveColl"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Twitter} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=09096856606 &text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Whatapps} w="34px" h="34px" ml="15px" />
          </Link>

          <Link
            href="http://instagram.com/wavecrestcollege"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Instagram} w="34px" h="34px" ml="15px" />
          </Link>
        </Stack>
      </Flex>

      <Flex
        p="0 91px"
        pt="29px"
        bg="#021D37"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          mr="8"
        >
          {navItems.map((navItem, index) => (
            <Box
              ref={ref}
              pb="29px"
              borderBottom="6px solid transparent"
              borderColor={
                currentLink === index && showSubMenu ? "#fff" : "transparent"
              }
              position="relative"
            >
              <Link
                onMouseEnter={() => {
                  setCurrentLink(index);
                  setShowMenu.on();
                }}
                // onMouseLeave={setShowMenu.off}
                href="#"
                color="#fff"
                fontSize="16px"
                textAlign="center"
                textTransform="uppercase"
                _hover={{
                  color: "brown",
                  textDecoration: "none",
                }}
              >
                {navItem.name}
              </Link>
              <Box
                color="#fff"
                position="absolute"
                bg="#021d37"
                w="max-content"
                zIndex="3"
                top="59px"
                display={
                  currentLink === index && showSubMenu ? "block" : "none"
                }
              >
                {navItem.subMenu.map((subItem) => (
                  <Link
                    href={subItem.href}
                    display="block"
                    p="1"
                    borderBottom="1px solid red"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Flex>

        {/* <Flex>
          <Link
            href="#!"
            color="white"
            p="7px"
            w="133px"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans, sans-serif"
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
            href="#!"
            bg="#fff"
            color="#021d37"
            p="7px"
            w="133px"
            ml="27px"
            border="2px solid #fff"
            borderRadius="3px"
            fontFamily="Open Sans, sans-serif"
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
        </Flex> */}
        <Box color="#fff" h="50px">
          buttons
        </Box>
      </Flex>
    </Fragment>
  );
};

export default Navbar;
