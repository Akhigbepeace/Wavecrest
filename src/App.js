import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "Pages/Home/Index";
import About from "Pages/About/Index";
import Admission from "Pages/Admission/Index";
import Academics from "Pages/Academics/Index";
import Alumni from "Pages/Alumni";
import Blog from "Pages/Blog";
import Career from "Pages/Career";
import Contact from "Pages/Contact";
import BlogPost from "Pages/BlogPost";
import SupportUs from "Pages/SupportUs";
import ViewVacancies from "Pages/ViewVacancies";
import Downloads from "Pages/Downloads";
import HostelApplication from "Pages/HostelApplication";
import HNDProgrammeDesc from "Pages/HNDProgrammeDesc";
import NDProgrammeDesc from "Pages/NDProgrammeDesc";
import CertificateCoursesDesc from "Pages/CertificateCoursesDesc";
import SearchResult from "Pages/SearchResult";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };

  const breakpoints = {
    sm: "320px",
    md: "500px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px",
  };

  const fonts = {
    heading: "Open Sans",
    body: "Open Sans",
  };

  const theme = extendTheme({ colors, fonts, breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about/:id" element={<About />} />
            <Route exact path="/admission/:id" element={<Admission />} />
            <Route exact path="/academics/:id" element={<Academics />} />
            <Route
              exact
              path="/admission/hostelApplication"
              element={<HostelApplication />}
            />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/alumni" element={<Alumni />} />
            <Route exact path="/career/:id" element={<Career />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/support" element={<SupportUs />} />
            <Route exact path="/searhResults" element={<SearchResult />} />
            <Route exact path="/posts" element={<BlogPost />} />
            <Route exact path="/viewVacancies" element={<ViewVacancies />} />
            <Route exact path="/downloads" element={<Downloads />} />
            <Route exact path="/HNDProgramme" element={<HNDProgrammeDesc />} />
            <Route exact path="/NDProgramme" element={<NDProgrammeDesc />} />
            <Route
              exact
              path="/CertificateCourses"
              element={<CertificateCoursesDesc />}
            />
          </Routes>
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
