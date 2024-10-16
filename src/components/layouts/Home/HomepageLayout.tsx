import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import React from "react";
import Showcase from "./Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import Editable from "components/organisms/Editable/Editable";
import OurStories from "./OurStories";
import Partners from "./Partners";
import Footer from "components/organisms/Footer";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import Announcements from "./Announcements/Announcements";
import StudyProgrammes from "./StudyProgram/StudyProgrammes";
import { useCopyData } from "contexts/EditableCopyContext";
import {
  combinedConfig,
  combinedConstant,
} from "config/constants/editable-copy/combined";
import DiscoverHospitality from "./DiscoverHospitality";

const { homeConfig } = combinedConfig;
const HomepageLayout = () => {
  const { data } = useCopyData();

  const {
    showCase: showCaseData,
    statistics: statsData,
    discoverHospitality,
    announcements,
    defaultStories,
    defaultPartnersLogos,
  } = { ...combinedConstant.home, ...data.home };

  const {
    showCase: showCaseConfig,
    statistics: statsConfig,
    discoverHospitality: discoverConfig,
    announcements: announcementsConfig,
    ourStories: ourStoriesConfig,
    partnersConfig,
  } = homeConfig;

  return (
    <>
      <Header />
      <Navbar />

      <MobileSideBar />

      <Editable
        page="home"
        config={showCaseConfig}
        defaultValues={showCaseData}
      >
        <Showcase {...showCaseData} />
      </Editable>

      <Editable page="home" config={statsConfig} defaultValues={statsData}>
        <Statistics {...statsData} />
      </Editable>

      <Editable
        page="home"
        config={discoverConfig}
        defaultValues={discoverHospitality}
      >
        <DiscoverHospitality
          subText={discoverHospitality.subText}
          bannerTitle={discoverHospitality.bannerTitle}
          btnLabel={discoverHospitality.btnLabel}
        />
      </Editable>

      <Editable
        page="home"
        config={announcementsConfig}
        defaultValues={announcements}
      >
        <Announcements announcements={announcements} />
      </Editable>

      <StudyProgrammes />

      <Editable
        defaultValues={defaultStories}
        config={ourStoriesConfig}
        page="home"
      >
        <OurStories stories={defaultStories} />
      </Editable>

      <Editable
        defaultValues={defaultPartnersLogos}
        config={partnersConfig}
        page="home"
      >
        <Partners defaultPartnersLogos={defaultPartnersLogos} />
      </Editable>

      <Footer />
    </>
  );
};

export default HomepageLayout;
