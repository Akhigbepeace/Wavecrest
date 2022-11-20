import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "components/Navbar";
import Profile from "./Profile/Index";
import Milestone from "./Milestone/Milestone";
import OurTeam from "./Our Team";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import { useRouter } from "next/router";

const About = () => {
  const about =
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667289604/wavecrest/aboutDesktopBanner_tsljsb.png";

  const router = useRouter();
  const { id } = router.query;

  const [currentId, setCurrentId] = useState("profile");

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
    function selectInitialOption() {
      const profile = menuLinks.find(
        (menu) => menu.id.toLowerCase() === currentId.toLowerCase()
      );

      setActiveLink(profile);
    }

    if (router.isReady) {
      selectInitialOption();
    }
  }, [currentId, menuLinks, router]);

  console.log(router.query, "<---query");
  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  return (
    <Fragment>
      <Navbar />

      <Box>
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
          <Image src={about} h="100%" w="100%" objectFit="cover" />

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
          <Flex
            alignItems="center"
            justifyContent="center"
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            {menuLinks.map((menuLink, index) => {
              const isActive = activeLink.linkTitle === menuLink.linkTitle;

              return (
                <Button
                  key={index}
                  m="15px 0"
                  fontFamily="Manrope"
                  bg={isActive ? "#021d37" : "#fff"}
                  color={isActive ? "#EBEDEF" : "#021d37"}
                  fontWeight="700"
                  fontSize="24px"
                  textAlign="center"
                  border="2px solid #021d37"
                  lineHeight="40px"
                  p="10px 50px"
                  onClick={() => setCurrentId(menuLink.id)}
                  _hover={{
                    textDecoration: "none",
                    bg: isActive ? "#021d37" : "#F5F5F5",
                  }}
                >
                  {menuLink.linkTitle}
                </Button>
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
