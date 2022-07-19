import React from "react";
import Navbar from "components/layouts/Navbar";
import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";
import { Box } from "@chakra-ui/react";

const ApplyNow = () => {
  return (
    <Box>
      <Navbar />
      Apply Now
      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default ApplyNow;
