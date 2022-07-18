import { Box, Image, Text, Flex, Link } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/layout/Navbar";
import academics from "assets/Images/academics.png";
import Programmes from "Pages/Academics/Programmes";
import Training from "Pages/Academics/Training";
import Intership from "Pages/Academics/Internship";
import NYSC from "Pages/Academics/NYSC";
import Footer from "../Home/Footer";
import FooterCopywright from "../Home/FooterCopywright";

const Admission = () => {
  const { id } = useParams();

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

  const profile = menuLinks.find(
    (menu) => menu.id.toLowerCase() === id.toLowerCase()
  );

  const [activeLink, setActiveLink] = useState(profile || menuLinks[0]);

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={academics} h="100%" w="100%" />

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
            ACADEMICS
          </Text>
        </Box>
      </Box>

      <Box>
        <Flex alignItems="center" justifyContent="center">
          {menuLinks.map((menuLink, index) => {
            const isActive = activeLink.linkTitle === menuLink.linkTitle;
            return (
              <Flex
                key={index}
                bg={isActive ? "#021d37" : "#fff"}
                border="3px solid #021d37"
                w="242px"
                h="74px"
                m="15px 0"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                onClick={() => setActiveLink(menuLink)}
                cursor="pointer"
                _hover={{
                  bg: isActive ? "#021d37" : "#F5F5F5",
                }}
              >
                <Link
                  fontFamily="Manrope"
                  color={isActive ? "#EBEDEF" : "#021d37"}
                  fontWeight="700"
                  fontSize="20px"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {menuLink.linkTitle}
                </Link>
              </Flex>
            );
          })}
        </Flex>

        {activeLink.content}
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Admission;
