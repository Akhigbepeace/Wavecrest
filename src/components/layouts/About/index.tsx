import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import Footer from "components/organisms/Footer";
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import LinkTabs from "../../organisms/LinkTabs";
import PagesBanner from "components/molecules/PagesBanner";

const About = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentId = id || "profile";
  const activeLink = menuLinks.find(
    (link) => link.id === currentId
  ) as MenuLink;

  const prefix = router.pathname.startsWith("/admin") ? "/admin" : "";

  return (
    <Fragment>
      <Header />
      <Navbar />

      <Box>
        <PagesBanner
          imageURL="/assets/imgs/aboutDesktopBanner.jpg"
          pageName="ABOUT"
        />

        {router.isReady && (
          <LinkTabs
            hrefPrefix={prefix}
            menuLinks={menuLinks}
            activeItem={activeLink.linkTitle}
          >
            {activeLink.content}
          </LinkTabs>
        )}

        <Footer />
      </Box>
    </Fragment>
  );
};

export default About;
