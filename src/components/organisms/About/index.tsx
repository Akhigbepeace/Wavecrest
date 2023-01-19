import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "components/Navbar";
<<<<<<< HEAD
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
=======
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import LinkTabs from "../LinkTabs";
import PagesBanner from "components/molecules/PagesBanner";
<<<<<<< HEAD
=======
import Footer from "../Footer/Footer";
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e

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
<<<<<<< HEAD
        <PagesBanner
          imageURL="/assets/imgs/aboutDesktopBanner.jpg"
          pageName="ABOUT"
        />
=======
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
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e

        {router.isReady && (
          <LinkTabs menuLinks={menuLinks} activeItem={activeLink.linkTitle}>
            {activeLink.content}
          </LinkTabs>
        )}

        <Footer />
<<<<<<< HEAD
        <FooterCopywright />
=======
>>>>>>> d9421196557f605d1b64e0a75a30455c7ce83a8e
      </Box>
    </Fragment>
  );
};

export default About;
