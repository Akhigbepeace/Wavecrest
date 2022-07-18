import { Box, Image, Text, Flex, Link } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/layout/Navbar";
import admission from "assets/Images/Admission.png";
import AdmissionRequirements from "Pages/Admission/AdmissionRequirements";
import TuitionAndScholarship from "Pages/Admission/TuitionAndScholarship";
import ApplyOnline from "Pages/Admission/ApplyOnline";
import Hostel from "Pages/Admission/Hostel";
import FAQs from "Pages/Admission/FAQs";
import Footer from "../Home/Footer";
import FooterCopywright from "../Home/FooterCopywright";

const Admission = () => {
  const { id } = useParams();
  console.log("params", id);

  const menuLinks = [
    {
      id: "admissionRequirements",
      linkTitle: "ADMISSION REQUIREMENTS",
      content: <AdmissionRequirements />,
    },
    {
      id: "tuitionAndScholarship",
      linkTitle: "TUITION AND SCHOLARSHIP",
      content: <TuitionAndScholarship />,
    },
    {
      id: "applyOnline",
      linkTitle: "APPLY ONLINE",
      content: <ApplyOnline />,
    },
    {
      id: "hostel",
      linkTitle: "HOSTEL",
      content: <Hostel />,
    },
    {
      id: "faqs",
      linkTitle: "FAQs",
      content: <FAQs />,
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
