import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React, { Fragment } from "react";
import OurStory from "./OurStory";
import Gallery from "./Gallery";
import OurPhilosophy from "./OurPhilosophy";
import OurClout from "./OurClout";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobileRedirect from "components/molecules/MobileRedirect";
import SectionTitle from "./SectionTitle";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import Editable from "components/organisms/Editable/Editable";
import {
  combinedConfig,
  combinedConstant,
} from "config/constants/editable-copy/combined";
import { useCopyData } from "contexts/EditableCopyContext";

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

  const { data } = useCopyData();

  const { ourStory, philosophy } = {
    ...combinedConstant.aboutProfile,
    ...data.aboutProfile,
  };

  const { aboutConfig } = combinedConfig;
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/aboutDesktopBanner.jpg"
        title="PROFILE"
      />

      <Editable
        page="aboutProfile"
        config={aboutConfig.profile.ourStory}
        defaultValues={ourStory}
      >
        <OurStory {...ourStory} />
      </Editable>

      <Editable
        page="aboutProfile"
        config={aboutConfig.profile.philosophy}
        defaultValues={philosophy}
      >
        <OurPhilosophy {...philosophy} />
      </Editable>

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
        textAlign="center"
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

      <Flex
        justifyContent="center"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
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
      </Flex>
    </Fragment>
  );
};

export default Profile;
