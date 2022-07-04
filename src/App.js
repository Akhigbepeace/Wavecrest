import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About";
import Admission from "components/Pages/Admission";
import Academics from "components/Pages/Academics"
import Alumni from "components/Pages/Alumni";
import Blog from "components/Pages/Blog";
import Contact from "./components/Pages/Contact";

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
            <Route exact path="/about" element={<About />} />
            <Route exact path="/admission" element={<Admission />} />
            <Route exact path="/academics" element={<Academics />} />
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
