import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import { useRouter } from "next/router";
import { menuLinks } from "./constants";
import LinkTabs from "components/LinkTabs";
import PagesBanner from "components/molecules/PagesBanner";

const About = () => {
  const about = "/assets/imgs/aboutDesktopBanner.jpg";

  const router = useRouter();
  const { id } = router.query;

  const [currentId, setCurrentId] = useState(id || "profile");

  const [activeLink, setActiveLink] = useState(menuLinks[0]);

  useEffect(() => {
    function selectInitialOption() {
      if (!id && !router.isReady) return;
      const profile = menuLinks.find(
        (menu) => menu.id.toLowerCase() === currentId.toLowerCase()
      );
      setActiveLink(profile);
    }

    selectInitialOption();
  }, [currentId, id, router]);

  useEffect(() => {
    if (id) setCurrentId(id);
  }, [id]);

  const handleLinkChange = (menuId) => {
    setCurrentId(menuId);
  };
  return (
    <Fragment>
      <Head>
        <title>WAVECREST COLLEGE OF HOSPITALITY | About</title>
      </Head>

      <Navbar />

      <Box>
        <PagesBanner
          imageURL="/assets/imgs/aboutDesktopBanner.jpg"
          pageName="ABOUT"
        />

        {router.isReady && (
          <LinkTabs
            menuLinks={menuLinks}
            activeItem={activeLink.linkTitle}
            onLinkChange={handleLinkChange}
          >
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
