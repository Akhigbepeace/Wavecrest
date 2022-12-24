import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import MobileSideBar from "components/MobileSideBar";
import Showcase from "./Showcase";
import Statistics from "components/Statistics";
import DiscoverHospitality from "./DiscoverHospitality";
import Blog from "./Blog";
import OurStories from "./OurStories";
import Partners from "./Partners";
import Footer from "../../components/Footer";
import FooterCopywright from "../../components/FooterCopywright";
import { axiosInstance } from "API/axiosInstance";
import dynamic from "next/dynamic";

const StudyProgrammes = dynamic(
  () => import("./StudyProgram/StudyProgrammes"),
  {
    ssr: false,
  }
);
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
        <Showcase caption={homeData?.BANNER_VIDEO_CAPTION || ""} />
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
