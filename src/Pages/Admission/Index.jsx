import { Box, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import admission from "assets/Images/Admission.png";
import AdmissionRequirements from "Pages/Admission/AdmissionRequirements";
import TuitionAndScholarship from "Pages/Admission/Tuition And Scholarship/TuitionAndScholarship";
import ApplyOnline from "Pages/Admission/ApplyOnline";
import Hostel from "Pages/Admission/Hostel";
import FAQs from "Pages/Admission/FAQs";
import LinkTabs from "components/LinkTabs";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const Admission = () => {
  const { id } = useParams();

  const [currentId, setCurrentId] = useState(id);

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
        <Image src={admission} h="100%" w="100%" objectFit="cover" />

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
