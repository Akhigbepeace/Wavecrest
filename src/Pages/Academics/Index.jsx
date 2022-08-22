import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/Navbar";
import academics from "assets/Images/academics.png";
import Programmes from "Pages/Academics/Programmes";
import Training from "Pages/Academics/Training";
import Intership from "Pages/Academics/Internship";
import NYSC from "Pages/Academics/NYSC";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import LinkTabs from "components/LinkTabs";

const Admission = () => {
  const { id } = useParams();

  const [currentId, setCurrentId] = useState(id);

  const menuLinks = [
    {
      id: "programmes",
      linkTitle: "PROGRAMMES",
      content: <Programmes />,
    },
    {
      id: "training",
      linkTitle: "TRAINING",
      content: <Training />,
    },
    {
      id: "internship",
      linkTitle: "INTERNSHIP",
      content: <Intership />,
    },
    {
      id: "nysc",
      linkTitle: "NYSC",
      content: <NYSC />,
    },
  ];

  const [activeLink, setActiveLink] = useState(menuLinks[0]);

  useEffect(() => {
    const profile = menuLinks.find(
      (menu) => menu.id.toLowerCase() === currentId.toLowerCase()
    );

    setActiveLink(profile);
  }, [currentId, menuLinks]);

  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  const handleLinkChange = (menuId) => {
    setCurrentId(menuId);
  };

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={academics} h="100%" w="100%" objectFit="cover" />

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
