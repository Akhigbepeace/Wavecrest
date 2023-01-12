import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { ReactNode } from "react";

type MenuLink = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

type LinkTabsProps = {
  menuLinks: MenuLink[];
  activeItem: string;
  children: ReactNode;
};

const LinkTabs = (props: LinkTabsProps) => {
  const { menuLinks, activeItem, children } = props;
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        {menuLinks.map((menuLink, index) => {
          const isActive = menuLink.linkTitle === activeItem;

          return (
            <NextLink href={menuLink.href} passHref legacyBehavior>
              <Link
                fontFamily="Manrope"
                color={isActive ? "#EBEDEF" : "#021d37"}
                fontWeight="700"
                fontSize="20px"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Flex
                  key={index}
                  bg={isActive ? "#021d37" : "#fff"}
                  border="3px solid #021d37"
                  w="242px"
                  h="74px"
                  m="15px 0"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  _hover={{
                    bg: isActive ? "#021d37" : "#F5F5F5",
                  }}
                >
                  {menuLink.linkTitle}
                </Flex>
              </Link>
            </NextLink>
          );
        })}
      </Flex>

      {children}
    </Box>
  );
};

export default LinkTabs;
