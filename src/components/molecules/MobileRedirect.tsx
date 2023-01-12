import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

type MobileRedirectProps = {
  pageURL: string;
  pageName: string;
};

const MobileRedirect = ({ pageURL, pageName }: MobileRedirectProps) => (
  <Flex justifyContent="space-evenly">
    <NextLink href={pageURL} legacyBehavior passHref>
      <Link
        fontFamily="Manrope"
        fontSize="18px"
        py="25px"
        mb="52px"
        textAlign="center"
        fontWeight="700"
        bg="#EEE"
      >
        {pageName}
      </Link>
    </NextLink>
  </Flex>
);

export default MobileRedirect;
