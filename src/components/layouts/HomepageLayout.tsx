import MobileSideBar from "../organisms/MobileSideBar";
import Header from "components/organisms/Header/Header";
import Navbar from "components/organisms/Navbar/Navbar";
import React from "react";
import Showcase from "components/organisms/Showcase/Showcase";
import Statistics from "components/molecules/Statistics";

const HomepageLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MobileSideBar />

      <Showcase />
      <Statistics />
    </div>
  );
};

export default HomepageLayout;
