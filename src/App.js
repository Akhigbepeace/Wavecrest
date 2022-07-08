import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "Pages/Home/Index";
import About from "Pages/About/Index";
import Admission from "Pages/Admission/Index";
import Academics from "Pages/Academics/Index";
import Alumni from "Pages/Alumni";
import Blog from "Pages/Blog";
import Contact from "Pages/Contact";

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
  const fonts = {
    heading: "Open Sans",
    body: "Open Sans",
  };
  const theme = extendTheme({ colors, fonts });
  
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about/:id" element={<About />} />
            <Route exact path="/admission/:id" element={<Admission />} />
            <Route exact path="/academics/:id" element={<Academics />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/alumni" element={<Alumni />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
