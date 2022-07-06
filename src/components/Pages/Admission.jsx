import { Box, Image, Text, Flex, Link } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import Navbar from "components/layouts/Navbar";
import admission from "assets/Images/Admission.png";
import AdmissionRequirements from "components/Pages/Admission/AdmissionRequirements";
import TuitionAndScholarship from "components/Pages/Admission/TuitionAndScholarship";
import ApplyOnline from "components/Pages/Admission/ApplyOnline";
import Hostel from "components/Pages/Admission/Hostel";
import FAQs from "components/Pages/Admission/FAQs";
import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";

const Admission = () => {
  const menuLinks = [
    {
      linkTitle: "ADMISSION REQUIREMENTS",
      content: <AdmissionRequirements />,
    },
    {
      linkTitle: "TUITION AND SCHOLARSHIP",
      content: <TuitionAndScholarship />,
    },
    {
      linkTitle: "APPLY ONLINE",
      content: <ApplyOnline />,
    },
    {
      linkTitle: "HOSTEL",
      content: <Hostel />,
    },
    {
      linkTitle: "FAQs",
      content: <FAQs />,
    },
  ];

  const [activeLink, setActiveLink] = useState(menuLinks[0]);

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={admission} h="100%" w="100%" />

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

      <Box>
        <Flex alignItems="center" justifyContent="center">
          {menuLinks.map((menuLink, index) => {
            const isActive = activeLink.linkTitle === menuLink.linkTitle;
            return (
              <Flex key={index}>
                <Link
                  m="15px 0"
                  fontFamily="Manrope"
                  bg={isActive ? "#021d37" : "#fff"}
                  color={isActive ? "#EBEDEF" : "#021d37"}
                  fontWeight="700"
                  fontSize="20px"
                  textAlign="center"
                  alignItems="center"
                  border="3px solid #021d37"
                  w="242px"
                  h="74px"
                  onClick={() => setActiveLink(menuLink)}
                  _hover={{
                    textDecoration: "none",
                    bg: isActive ? "#021d37" : "#F5F5F5",
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
