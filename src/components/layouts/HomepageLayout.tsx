import MobileSideBar from "../organisms/Header/MobileSideBar";
import Header from "components/organisms/Header/Header";
import Navbar from "components/organisms/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";
import Blog from "components/organisms/Blog";
import DiscoverHospitality from "components/organisms/DiscoverHospitality";

const HomepageLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MobileSideBar />

      <Showcase />
      <Statistics />

      <DiscoverHospitality />
      <Blog />
    </div>
  );
};

export default HomepageLayout;
