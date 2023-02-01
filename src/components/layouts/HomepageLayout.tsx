import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Home/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import Editable from "components/organisms/Home/Edit/Editable";
import OurStories from "components/organisms/Home/OurStory/OurStories";
import Partners from "components/organisms/Home/Partners";
import Footer from "components/organisms/Footer/Footer";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import Blog from "components/organisms/Home/Blog/Blog";
import StudyProgrammes from "components/organisms/Home/StudyProgram/StudyProgrammes";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConfig } from "config/constants/editable-copy/combined";
import DiscoverHospitality from "components/organisms/Home/DiscoverHospitality";

const { homeConfig, sharedConfig } = combinedConfig;
const HomepageLayout = () => {
  const { data } = useCopyData();

  const {
    showCase: showCaseData,
    statistics: statsData,
    discoverHospitality,
  } = data.home;
  const { footer: footerData } = data.shared;

  const footerConfig = sharedConfig.footer;

  const {
    showCase: showCaseConfig,
    statistics: statsConfig,
    discoverHospitality: discoverConfig,
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
      <Blog />
      <StudyProgrammes />
      <OurStories />
      <Partners />

      <Editable page="shared" config={footerConfig} defaultValues={footerData}>
        <Footer {...footerData} />
      </Editable>
    </>
  );
};

export default HomepageLayout;
