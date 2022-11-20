import { Box } from "@chakra-ui/react";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import MobileSideBar from "components/MobileSideBar";
import Showcase from "./Showcase";
import Statistics from "components/Statistics";
import DiscoverHospitality from "./DiscoverHospitality";
import Blog from "./Blog";
import StudyProgrammes from "./StudyProgram/StudyProgrammes";
import OurStories from "./OurStories";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import FooterCopywright from "../../components/FooterCopywright";
import { axiosInstance } from "API/axiosInstance";

const Home = () => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    const fectchHomeData = async () => {
      const res = await axiosInstance.get("/home");

      setHomeData(res.data?.data);
    };
    fectchHomeData();
  }, []);

  return (
    <>
      <Navbar />
      <MobileSideBar />
      <Box>
        <Showcase caption={homeData?.BANNER_VIDEO_CAPTION} />
        <Statistics />
      </Box>
      <DiscoverHospitality />
      <Blog />
      <StudyProgrammes />
      <OurStories />
      <Partners />
      <Footer />
      <FooterCopywright />
    </>
  );
};

export default Home;
