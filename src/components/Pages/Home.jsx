import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import Showcase from "./Home/Showcase";
import DiscoverHospitality from "./Home/DiscoverHospitality";
import Blog from "./Home/Blog";
import StudyProgrammes from "./Home/StudyProgrammes";
import OurStories from "./Home/OurStories";
import Partners from "./Home/Partners";
import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Showcase />
      <DiscoverHospitality />
      <Blog />
      <StudyProgrammes />
      <OurStories />
      <Partners />
      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Home;
