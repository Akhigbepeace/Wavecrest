import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import LinkTabs from "../LinkTabs";
import PagesBanner from "components/molecules/PagesBanner";
import Footer from "../Footer/Footer";

const About = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentId = id || "profile";
  const activeLink = menuLinks.find(
    (link) => link.id === currentId
  ) as MenuLink;

  return (
    <Fragment>
      <Navbar />

      <Box>
        <Box
          h="441px"
          w="100%"
          position="relative"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          <PagesBanner
            imageURL="/assets/imgs/aboutDesktopBanner.jpg"
            pageName="ABOUT"
          />
        </Box>

        {router.isReady && (
          <LinkTabs menuLinks={menuLinks} activeItem={activeLink.linkTitle}>
            {activeLink.content}
          </LinkTabs>
        )}

        <Footer />
      </Box>
    </Fragment>
  );
};

export default About;
