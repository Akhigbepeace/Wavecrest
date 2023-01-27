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
import { editables } from "config/constants/editables/shared";

const { showCase, statistics, footer } = editables;
const HomepageLayout = () => {
  return (
    <>
      <Header />
      <Navbar />

      <MobileSideBar />

      <EditItem
        formTitle={showCase.title}
        fields={showCase.fields}
        defaultValues={showCase.defaults}
      >
        <Showcase {...showCase.defaults} />
      </EditItem>

      <EditItem
        formTitle={statistics.title}
        fields={statistics.fields}
        defaultValues={statistics.defaults}
      >
        <Statistics {...statistics.defaults} />
      </EditItem>

      <DiscoverHospitality />
      <Blog />
      <StudyProgrammes />
      <OurStories />
      <Partners />

      <EditItem
        formTitle={footer.title}
        fields={footer.fields}
        defaultValues={footer.defaults}
      >
        <Footer {...footer.defaults} />
      </EditItem>
    </>
  );
};

export default HomepageLayout;
