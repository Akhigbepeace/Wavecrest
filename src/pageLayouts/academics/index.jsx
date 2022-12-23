import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import { menuLinks } from "./constants";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import LinkTabs from "components/LinkTabs";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";

const academics = "/assets/imgs/academics.png";

const Admission = () => {
  const router = useRouter();
  const { id } = router.query;

  const [currentId, setCurrentId] = useState(id);

  const [activeLink, setActiveLink] = useState(menuLinks[0]);

  useEffect(() => {
    if (currentId) {
      const profile = menuLinks.find(
        (menu) => menu.id.toLowerCase() === currentId.toLowerCase()
      );

      setActiveLink(profile);
    }
  }, [currentId]);

  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  const handleLinkChange = (menuId) => {
    setCurrentId(menuId);
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
          src={academics}
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
            fontSize={{
              sm: "30px",
              md: "20px",
              lg: "20px",
              xl: "60px",
              "2xl": "60px",
            }}
            textAlign="center"
            mt="140px"
          >
            ACADEMICS
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
