import MobileSideBar from "../organisms/Header/MobileSideBar";
import Header from "components/organisms/Header/Header";
import Navbar from "components/organisms/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import Blog from "components/organisms/Blog/Blog";
import DiscoverHospitality from "components/organisms/DiscoverHospitality";
import EditItem from "components/organisms/Edit/EditItem";
import StudyProgrammes from "components/organisms/StudyProgram/StudyProgrammes";
import OurStories from "components/organisms/OurStory/OurStories";
import Partners from "components/organisms/Partners";
import Footer from "components/organisms/Footer/Footer";

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
