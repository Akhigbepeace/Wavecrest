import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import LinkTabs from "components/LinkTabs";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import Navbar from "components/Navbar";

import { useRouter } from "next/router";
import { menuLinks } from "./constants";

const admission = "/assets/imgs/Admission.png";

const Admission = () => {
  const router = useRouter();
  const { id } = router.query;

  const [activeLink, setActiveLink] = useState(menuLinks[0]);

  useEffect(() => {
    if (id) {
      const profile = menuLinks.find(
        (menu) => menu.id.toLowerCase() === id.toLowerCase()
      );

      if (profile) setActiveLink(profile);
    }
  }, [id]);

  const handleLinkChange = (menuId) => {
    router.push(`/admission/${menuId}`);
  };

  return (
    <Fragment>
      <Navbar />
      <Box
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
        <Image
          src={admission}
          alt="banner"
          h="100%"
          w="100%"
          objectFit="cover"
        />

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
            ADMISSION
          </Text>
        </Box>
      </Box>

      <LinkTabs
        menuLinks={menuLinks}
        activeItem={activeLink.linkTitle}
        onLinkChange={handleLinkChange}
      >
        {activeLink.content}
      </LinkTabs>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Admission;
