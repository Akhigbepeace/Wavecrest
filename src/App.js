import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home";
import Contact from "./components/Pages/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
