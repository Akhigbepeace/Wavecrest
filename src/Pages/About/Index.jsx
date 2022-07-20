import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/layouts/Navbar";
import about from "assets/Images/About.png";
import Profile from "./Profile/Index";
import Milestone from "./Milestone";
import OurTeam from "./Our Team";
import Footer from "Pages/Home/Footer";
import FooterCopywright from "Pages/Home/FooterCopywright";

const About = () => {
  const { id } = useParams();

  const [currentId, setCurrentId] = useState(id);

  const menuLinks = [
    {
      id: "profile",
      linkTitle: "PROFILE",
      content: <Profile />,
    },
    {
      id: "milestone",
      linkTitle: "MILESTONE",
      content: <Milestone />,
    },
    {
      id: "ourTeam",
      linkTitle: "OUR TEAM",
      content: <OurTeam />,
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

  return (
    <Fragment>
      <Navbar />

      <Box>
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
              ABOUT
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
                  p="20px 97px"
                  onClick={() => setCurrentId(menuLink.id)}
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
      </Box>
    </Fragment>
  );
};

export default About;
