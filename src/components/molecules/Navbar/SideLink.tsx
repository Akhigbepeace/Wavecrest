import React from "react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const variants = {
  outlined: {
    bg: "transparent",
    color: "#FFF",
    border: "2px solid #fff",
    hoverBg: "#020E1B",
    hoverBorder: "2px solid #EBEDEF",
    hoverColor: "#FFF",
  },
  filled: {
    bg: "#FFF",
    border: "2px solid #fff",
    color: "#021D37",
    hoverBg: "#EBEDEF",
    hoverBorder: "2px solid #EBEDEF",
    hoverColor: "#021d37",
  },
};

type SideLinkProps = {
  href: string;
  children: string;
  variant: "filled" | "outlined";
};

const SideLink = (props: SideLinkProps) => {
  const { href, children, variant } = props;

  const args = variants[variant];

  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link
        bg={args.bg}
        p="7px"
        w="100%"
        color={args.color}
        border="2px solid #fff"
        borderRadius="3px"
        fontFamily="Open Sans"
        fontWeight="700"
        fontSize="17px"
        textAlign="center"
        cursor="pointer"
        _hover={{
          textDecoration: "none",
          bg: args.hoverBg,
          border: args.hoverBorder,
          color: args.hoverColor,
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default SideLink;
