import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from "components/Navbar";
import { useParams } from "react-router-dom";
import about from "assets/Images/About.png";
import PostJobVacancies from "./postJobVacancies";
import ViewJobVacancies from "./viewJobVacancies";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const Career = () => {
  const { id } = useParams();

  const [currentId, setCurrentId] = useState(id);

  const menuLinks = [
    {
      id: "postJobVacancies",
      linkTitle: "POST JOB VACANCIES",
      content: <PostJobVacancies />,
    },
    {
      id: "viewJobVacancies",
      linkTitle: "VIEW JOB VACANCIES",
      content: <ViewJobVacancies />,
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
    <Box>
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
              CAREER
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
                  p="15px 30px"
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

          <Box>{activeLink.content}</Box>
        </Box>
      </Box>
      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default Career;
