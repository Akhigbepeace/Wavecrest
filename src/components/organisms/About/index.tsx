import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import Footer from "components/organisms/Footer/Footer";
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
      <Header />
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

        <Footer
          address={
            "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
          }
          phone1={"+234 909 685 6606"}
          phone2={"+234 808 396 4840"}
          email={"info@wavecrest.edu.ng"}
          copyright={"Wavecrest College 2022. All Rights Reserved"}
        />
      </Box>
    </Fragment>
  );
};

export default About;
