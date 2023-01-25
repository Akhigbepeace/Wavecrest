import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Home/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import DiscoverHospitality from "pageLayouts/Home/DiscoverHospitality";
import EditItem from "components/organisms/Home/Edit/EditItem";
import OurStories from "components/organisms/Home/OurStory/OurStories";
import Partners from "components/organisms/Home/Partners";
import Footer from "components/organisms/Footer/Footer";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import Blog from "components/organisms/Home/Blog/Blog";
import StudyProgrammes from "components/organisms/Home/StudyProgram/StudyProgrammes";

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
      <Blog />
      <StudyProgrammes />
      <OurStories />
      <Partners />
      <Footer />
    </>
  );
};

export default HomepageLayout;
