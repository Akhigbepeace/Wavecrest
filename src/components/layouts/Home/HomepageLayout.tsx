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

type HomepageLayoutProps = {
  isAdmin?: boolean;
};

const { homeConfig } = combinedConfig;
const HomepageLayout = (props: HomepageLayoutProps) => {
  const { data } = useCopyData();

  const {
    showCase: showCaseData,
    statistics: statsData,
    discoverHospitality,
    announcements,
  } = { ...combinedConstant.home, ...data.home };

  const {
    showCase: showCaseConfig,
    statistics: statsConfig,
    discoverHospitality: discoverConfig,
    announcements: announcementsConfig,
  } = homeConfig;
  const prefix = props.isAdmin ? "/admin" : "";

  return (
    <>
      <Header />
      <Navbar hrefPrefix={prefix} />

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
      <OurStories />
      <Partners />

      <Footer />
    </>
  );
};

export default HomepageLayout;
