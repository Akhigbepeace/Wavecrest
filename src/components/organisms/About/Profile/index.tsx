import { Box, Text, Heading, Image, Flex, Link } from "@chakra-ui/react";
import React, { Fragment } from "react";
import OurStory from "./OurStory";
import Gallery from "pageLayouts/about/Profile/Gallery";
import OurPhilosophy from "./OurPhilosophy";
import OurClout from "./OurClout";
import MobileSideBar from "components/MobileSideBar";
import PagesBanner from "components/molecules/PagesBanner";
import MobileRedirect from "components/molecules/MobileRedirect";
import SectionTitle from "./SectionTitle";

const Profile = () => {
  const redirects = [
    {
      name: "MILESTONE",
      url: "/about/milestone",
    },
    {
      name: "OUR TEAM",
      url: "/about/ourTeam",
    },
  ];
  return (
    <Fragment>
      <MobileSideBar />
      <Box
        h="441px"
        w="100%"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none",
          "2xl": "none",
        }}
      >
        <PagesBanner
          pageName="PROFILE"
          imageURL="/assets/imgs/aboutDesktopBanner.jpg"
        />
      </Box>

      <OurStory />

      <OurPhilosophy />

      <OurClout />

      <Box
        bg="#EBEDEF"
        p={{
          sm: "50px 20px",
          md: "50px 40px",
          lg: "50px",
          xl: "50px 91px",
          "2xl": "50px 90px",
        }}
      >
        <SectionTitle heading="Our Swags" subHeading="Gallery" />

        <Gallery />
      </Box>

      <Box
        textAlign={{
          sm: "left",
          md: "left",
          lg: "left",
          xl: "center",
          "2xl": "center",
        }}
        my="55px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "20px",
        }}
      >
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize="32px"
          color="#021D37"
          mb="22px"
        >
          Want to get a copy of our e-profile
        </Heading>

        <Link
          href="/documents/SCHOOL PROFILE.pdf"
          target="_blank"
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="20px"
          textAlign="center"
          p="10px 30px"
          bg="#021D37"
          borderRadius="3px"
          color="#fff"
          _hover={{
            bg: " #020E1B",
          }}
        >
          Download Here
        </Link>
      </Box>

      <Box
        mt="100px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        {redirects.map((redirect, index) => {
          return (
            <MobileRedirect
              key={index}
              pageName={redirect.name}
              pageURL={redirect.url}
            />
          );
        })}
      </Box>
    </Fragment>
  );
};

export default Profile;
