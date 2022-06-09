import { Image, Stack, Flex, Link, Box } from "@chakra-ui/react";
import React from "react";
import { Fragment } from "react";
import Linked from "../../assets/linked.png";
import Whatapps from "../../assets/whatsapp.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/Twitter.png";
import Instagram from "../../assets/Instagram.png";

const Navbar = () => {
  return (
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between" p="29px 91px">
        <Image w="238px" h="52px" src="/assets/Images/WC-LOGO-july.png" />
        <Stack direction="row">
          <Image src={Linked} w="34px" h="34px" />
          <Image src={Facebook} w="34px" h="34px" />
          <Image src={Twitter} w="34px" h="34px" />
          <Image src={Whatapps} w="34px" h="34px" />
          <Image src={Instagram} w="34px" h="34px" />
        </Stack>
      </Flex>
      <Flex h="92px" bg="#021D37">
        <Box>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            HOME
          </Link>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            ABOUT
          </Link>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            ADMISSION
          </Link>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            ACADEMICS
          </Link>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            ALUMNI
          </Link>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            BLOG
          </Link>
          <Link
            href="#"
            color="#fff"
            fontSize="18px"
            textAlign="center"
            paddingRight="59px"
            textDecoration="none"
          >
            CONTACT
          </Link>
        </Box>
        <Box></Box>
      </Flex>
    </Fragment>
  );
};

export default Navbar;
