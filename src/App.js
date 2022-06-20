import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/layouts/Navbar";
import About from "./components/Pages/About";
import Showcase from "./components/Showcase";
import DiscoverHospitality from "./components/DiscoverHospitality";
import Blog from "./components/Blog";
import StudyProgrammes from "./components/StudyProgrammes";
import OurStories from "./components/OurStories";
import Partners from "./components/Partners";
import Carousel from "./components/TestCar";
import Footer from "./components/Footer";
import FooterCopywright from "./components/FooterCopywright";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/about" component={<About />} />
          </Routes>

          <Navbar />
          <Showcase />
          <DiscoverHospitality />
          <Blog />
          <StudyProgrammes />
          <OurStories />
          <Partners />
          <Carousel />

          <Footer />
          <FooterCopywright />
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
