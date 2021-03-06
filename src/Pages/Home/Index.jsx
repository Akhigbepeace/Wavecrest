import React, { Fragment } from "react";
import Navbar from "../../components/layouts/Navbar";
import Showcase from "./Showcase";
import DiscoverHospitality from "./DiscoverHospitality";
import Blog from "./Blog";
import StudyProgrammes from "./StudyProgrammes";
import OurStories from "./OurStories";
import Partners from "./Partners";
import Footer from "./Footer";
import FooterCopywright from "./FooterCopywright";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Showcase mt="180px" />
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
