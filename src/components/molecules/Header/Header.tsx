import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Search from "../Search";
import Logo from "components/atoms/Logo";
import SocialMediaLinks from "components/molecules/SocialMediaLinks";

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
        {/* <Search /> */}

        <SocialMediaLinks />
      </Stack>
    </Flex>
  );
};

export default Header;
