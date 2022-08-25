import { Flex, Link, Image, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import about from "assets/Images/About.png";
import { FaChevronRight } from "react-icons/fa";
import Management from "./Management";
import Board from "./Board";
import Staff from "./Staff";

const OurTeam = () => {
  const menuLinks = [
    {
      id: "board",
      linkTitle: "Board",
      content: <Board />,
    },
    {
      id: "management",
      linkTitle: "Management",
      content: <Management />,
    },
    {
      id: "staff",
      linkTitle: "Staff",
      content: <Staff />,
    },
  ];

  const { id } = useParams();

  const profile = menuLinks.find(
    (menu) => menu.id.toLowerCase() === id.toLowerCase()
  );

  const [activeLink, setActiveLink] = useState(profile || menuLinks[1]);

  return (
    <Box>
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
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
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            OUR TEAM
          </Text>
        </Box>
      </Box>

      <Flex m="0 auto" mt="100px">
        <Flex
          flexDirection="column"
          mt="50px"
          pl="51px"
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
              <Flex
                alignItems="center"
                borderBottom="1px solid rgba(2, 29, 55, 0.63)"
                mr="60px"
              >
                <FaChevronRight
                  size="15px"
                  color={isActive ? "#021D37" : "rgba(2, 29, 55, 0.63)"}
                />

                <Link
                  key={index}
                  fontFamily="Manrope"
                  color={isActive ? "#021D37" : "rgba(2, 29, 55, 0.63)"}
                  fontWeight={isActive ? "700" : "400"}
                  fontSize="24px"
                  textAlign="center"
                  pl="10px"
                  py="15px"
                  mr="20px"
                  onClick={() => setActiveLink(menuLink)}
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

        <Box>{activeLink.content}</Box>
      </Flex>
    </Box>
  );
};

export default OurTeam;
