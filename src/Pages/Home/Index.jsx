import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Showcase from "./Showcase";
import DiscoverHospitality from "./DiscoverHospitality";
import Blog from "./Blog";
import StudyProgrammes from "./StudyProgrammes";
import OurStories from "./OurStories";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import FooterCopywright from "../../components/FooterCopywright";

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
