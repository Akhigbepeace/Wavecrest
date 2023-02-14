import React from "react";
import NextLink from "next/link";

import PeaceImage from "./PeaceImage";

const src = "/assets/imgs/WC-LOGO-july.png";

const Logo = () => {
  return (
    <NextLink href="/home">
      <PeaceImage
        w={{
          sm: "143px",
          md: "143px",
          lg: "160px",
          xl: "238px",
          "2xl": "238px",
        }}
        h={{
          sm: "37px",
          md: "37px",
          lg: "37px",
          xl: "52px",
          "2xl": "52px",
        }}
        src={src}
        alt="logo"
      />
    </NextLink>
  );
};

export default Logo;
