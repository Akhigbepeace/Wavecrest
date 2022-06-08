import { Box, Image, Stack, Avatar, Flex, Container } from "@chakra-ui/react";
import React from "react";
import Linked from "../../assets/linked.png";
import Whatapps from "../../assets/whatsapp.png";
const Navbar = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" p="29px 91px">
        <Image w="238px" h="52px" src="/assets/Images/WC-LOGO-july.png" />
        <Stack direction="row">
          <Image src={Linked} w="34px" h="34px" />
          <Image src={Whatapps} w="34px" h="34px" />
          <Image src={Whatapps} w="34px" h="34px" />
          <Image src={Whatapps} w="34px" h="34px" />
          <Image src={Whatapps} w="34px" h="34px" />
        </Stack>
      </Flex>
      <Box h="92px" bg="orange" />
    </>
  );
};

export default Navbar;
