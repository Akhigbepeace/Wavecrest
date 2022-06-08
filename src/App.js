import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import "./main.scss";
// import "./App.css";
import Showcase from "./components/Showcase";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Fragment>
          {/* <div id="container"> */}
          <Navbar />
          <Routes>
            <Route exact path="/home" component={<Home />} />
            <Route exact path="/about" component={<About />} />
          </Routes>
          {/* <Home /> */}
          {/* </div> */}
          <Showcase />
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
