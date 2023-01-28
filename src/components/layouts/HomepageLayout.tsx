import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Home/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import DiscoverHospitality from "pageLayouts/Home/DiscoverHospitality";
import Editable from "components/organisms/Home/Edit/Editable";
import OurStories from "components/organisms/Home/OurStory/OurStories";
import Partners from "components/organisms/Home/Partners";
import Footer from "components/organisms/Footer/Footer";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import Blog from "components/organisms/Home/Blog/Blog";
import StudyProgrammes from "components/organisms/Home/StudyProgram/StudyProgrammes";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConfig } from "config/constants/editable-copy/combined";

const { homeConfig, sharedConfig } = combinedConfig;
const HomepageLayout = () => {
  const { data } = useCopyData();

  const { showCase: showCaseData, statistics: statsData } = data.home;
  const { footer: footerData } = data.shared;

  const footerConfig = sharedConfig.footer;

  const { showCase: showCaseConfig, statistics: statsConfig } = homeConfig;

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

      <DiscoverHospitality />
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
