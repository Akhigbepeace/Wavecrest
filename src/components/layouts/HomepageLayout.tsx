import MobileSideBar from "../organisms/MobileSideBar";
import Header from "components/organisms/Header/Header";
import Navbar from "components/organisms/Navbar/Navbar";
import React from "react";

const HomepageLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MobileSideBar />
    </div>
  );
};

export default HomepageLayout;
