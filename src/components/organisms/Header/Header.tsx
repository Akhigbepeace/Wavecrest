import { Flex, Image, Link, Stack } from "@chakra-ui/react";

import NextLink from "next/link";
import React from "react";
import Search from "./Search";
import { socials } from "../Navbar/constants";
import Logo from "components/atoms/Logo";

const Header = () => {
  return (
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
      <Logo />

      <Stack direction="row" alignItems="center">
        <Search />

        {socials.map((social, index) => {
          return (
            <NextLink key={index} href={social.to} passHref legacyBehavior>
              <Link key={index} target={social.target} rel={social.rel}>
                <Image
                  alt="icon"
                  src={social.icon}
                  w="34px"
                  h="34px"
                  ml="15px"
                />
              </Link>
            </NextLink>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default Header;
