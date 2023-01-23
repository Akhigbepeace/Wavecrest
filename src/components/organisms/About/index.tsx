import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import LinkTabs from "../LinkTabs";
import PagesBanner from "components/molecules/PagesBanner";

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
