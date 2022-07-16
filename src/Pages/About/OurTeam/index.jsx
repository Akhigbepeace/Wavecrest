import { Box, Text, Flex, Heading, Image, Grid } from "@chakra-ui/react";
import React from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";
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

 const profile = menuLinks.find(
   (menu) => menu.id.toLowerCase() === id.toLowerCase()
 );


const managements = [
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: provost,
    name: "Veronica Esode",
    post: "Registrar",
  },
  {
    image: bursar,
    name: "Edith Chukwu",
    post: "Bursar",
  },
];




const OurTeam = () => {
  const [activeLink, setActiveLink] = useState(profile || menuLinks[0]);

  return (
    <Box w="1167px" m="0 auto" px="91px">
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
    </Box>
  );
};

export default OurTeam;
