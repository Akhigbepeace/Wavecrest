import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import about from "assets/Images/About.png";
import Profile from "components/Pages/About/Profile";
import Milestone from "components/Pages/About/Milestone";
import OurTeam from "components/Pages/About/OurTeam";
import Navbar from "components/layouts/Navbar";
import Footer from "components/Pages/Home/Footer";
import FooterCopywright from "components/Pages/Home/FooterCopywright";

const About = () => {
  const menuLinks = [
    {
      linkTitle: "PROFILE",
      content: <Profile />,
    },
    {
      linkTitle: "MILESTONE",
      content: <Milestone />,
    },
    {
      linkTitle: "OUR TEAM",
      content: <OurTeam />,
    },
  ];

  const [activeLink, setActiveLink] = useState(menuLinks[0]);
  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={about} h="100%" w="100%" />

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
            ABOUT US
          </Text>
        </Box>
      </Box>

      <Box>
        <Flex alignItems="center" justifyContent="center">
          {menuLinks.map((menuLink, index) => {
            const isActive = activeLink.linkTitle === menuLink.linkTitle;
            return (
              <Link
                key={index}
                m="15px 0"
                fontFamily="Manrope"
                bg={isActive ? "#021d37" : "#fff"}
                color={isActive ? "#EBEDEF" : "#021d37"}
                fontWeight="700"
                fontSize="30px"
                textAlign="center"
                border="3px solid #021d37"
                lineHeight="40px"
                p="28px 97px"
                onClick={() => setActiveLink(menuLink)}
                _hover={{
                  textDecoration: "none",
                  bg: isActive ? "#021d37" : "#F5F5F5",
                }}
              >
                {menuLink.linkTitle}
              </Link>
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

export default About;
