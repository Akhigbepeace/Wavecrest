import MobileSideBar from "../organisms/Header/MobileSideBar";
import Header from "components/organisms/Header/Header";
import Navbar from "components/organisms/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import Blog from "components/organisms/Blog";
import DiscoverHospitality from "components/organisms/DiscoverHospitality";
import EditItem from "components/organisms/Edit/EditItem";

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
    </>
  );
};

export default HomepageLayout;
