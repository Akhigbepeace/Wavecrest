import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const PopupModal = dynamic(() => import("../components/PopupModal"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };

  const breakpoints = {
    sm: "320px",
    md: "500px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px",
  };

  const fonts = {
    heading: "Open Sans",
    body: "Open Sans",
  };

  const theme = extendTheme({ colors, fonts, breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <PopupModal />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
