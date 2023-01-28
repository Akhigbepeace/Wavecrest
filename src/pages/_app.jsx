import Head from "next/head";
import dynamic from "next/dynamic";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { EditableCopyProvider } from "contexts/EditableCopyContext";

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
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <EditableCopyProvider>
          <PopupModal />
          <Component {...pageProps} />
        </EditableCopyProvider>
      </ChakraProvider>
    </>
  );
}
