import { List, ListItem, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { pages } from "./constant";

const Pages = () => {
  return (
    <List
      display="grid"
      gridTemplateColumns={{
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
        "2xl": "repeat(3, 1fr)",
      }}
      h="220px"
      lineHeight="35px"
      textAlign={{
        sm: "left",
        md: "left",
        lg: "left",
      }}
    >
      {pages.map((page, index) => {
        return (
          <ListItem key={index}>
            <NextLink href={page.to} legacyBehavior passHref>
              <Link
                fontFamily="Manrope"
                fontWeight="700"
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "16px",
                }}
                mb="-90px"
                ml={{
                  sm: "14px",
                  md: "14px",
                }}
                color="#021D37"
                _hover={{ textDecoration: "none", color: "#020E1B" }}
                target={page.target}
              >
                {page.name}
              </Link>
            </NextLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Pages;
