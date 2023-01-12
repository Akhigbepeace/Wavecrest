import Header from "components/organisms/Home/Header/Header";
import Navbar from "components/organisms/Home/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Home/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import Blog from "components/organisms/Home/Blog/Blog";
import DiscoverHospitality from "pageLayouts/Home/DiscoverHospitality";
import EditItem from "components/organisms/Home/Edit/EditItem";
import StudyProgrammes from "components/organisms/Home/StudyProgram/StudyProgrammes";
import OurStories from "components/organisms/Home/OurStory/OurStories";
import Partners from "components/organisms/Home/Partners";
import Footer from "components/organisms/Home/Footer/Footer";
import MobileSideBar from "components/organisms/Home/Header/MobileSideBar";

const editables = {
  header: [{ name: "logo", label: "Logo", placeholder: "Enter logo URL" }],
  showCase: [{ name: "video", label: "Video", placeholder: "Enter video URL" }],
};

const HomepageLayout = () => {
  return (
    <>
      <EditItem fields={editables.header}>
        <Header />
        <Navbar />

        <MobileSideBar />
      </EditItem>

      <EditItem fields={editables.showCase}>
        <Showcase />
      </EditItem>
      <Statistics />

      <DiscoverHospitality />
      {/* <Blog /> */}
      {/* <StudyProgrammes /> */}
      <OurStories />
      <Partners />
      <Footer />
    </>
  );
};

export default HomepageLayout;
