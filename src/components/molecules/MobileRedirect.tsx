import { Box, Button } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

type MobileRedirectProps = {
  pageURL: string;
  pageName: string;
};

const MobileRedirect = ({ pageURL, pageName }: MobileRedirectProps) => (
  <Box
    flexDirection="column"
    display={{
      sm: "inline-flex",
      md: "inline-flex",
      lg: "inline-flex",
      xl: "none",
      "2xl": "none",
    }}
  >
    <NextLink href={pageURL} passHref legacyBehavior>
      <Button
        fontFamily="Manrope"
        fontSize="18px"
        py="25px"
        mb="15px"
        mr="15px"
        w="160px"
        textAlign="center"
        fontWeight="700"
        bg="#EEE"
      >
        {pageName}
      </Button>
    </NextLink>
  </Box>
);

export default MobileRedirect;
