import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const LinkTabs = (props) => {
  const { menuLinks, activeItem, children, onLinkChange } = props;
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
              onClick={() => onLinkChange(menuLink.id)}
              cursor="pointer"
              _hover={{
                bg: isActive ? "#021d37" : "#F5F5F5",
              }}
            >
              <Link
                fontFamily="Manrope"
                color={isActive ? "#EBEDEF" : "#021d37"}
                fontWeight="700"
                fontSize="20px"
                _hover={{
                  textDecoration: "none",
                }}
              >
                {menuLink.linkTitle}
              </Link>
            </Flex>
          );
        })}
      </Flex>

      {children}
    </Box>
  );
};

export default LinkTabs;
