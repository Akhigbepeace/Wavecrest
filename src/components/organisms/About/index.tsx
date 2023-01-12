import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import LinkTabs from "../LinkTabs";
import PagesBanner from "components/molecules/PagesBanner";

const About = () => {
  const about = "/assets/imgs/aboutDesktopBanner.jpg";

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
        {/* <Box
          h="441px"
          w="100%"
          gridGap="68px"
          position="relative"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          <Image src={about} h="100%" w="100%" objectFit="cover" alt="About" />

          <Box
            bg="rgba(0, 24, 71, 0.5)"
            h="100%"
            w="100%"
            position="absolute"
            bottom="0"
          >
            <Text
              color="white"
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="60px"
              textAlign="center"
              mt="140px"
            >
              ABOUT
            </Text>
          </Box>
        </Box> */}

        <PagesBanner
          imageURL="/assets/imgs/aboutDesktopBanner.jpg"
          pageName="ABOUT"
        />

        {router.isReady && (
          <LinkTabs menuLinks={menuLinks} activeItem={activeLink.linkTitle}>
            {activeLink.content}
          </LinkTabs>
        )}

        <Footer />
        <FooterCopywright />
      </Box>
    </Fragment>
  );
};

export default About;