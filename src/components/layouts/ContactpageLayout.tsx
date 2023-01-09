import Contact from "components/organisms/Contact/Contact";
import React from "react";
import Navbar from "components/Navbar";
import MobileSideBar from "components/MobileSideBar";
import Banner from "components/organisms/Contact/Banner";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const ContactpageLayout = () => {
  return (
    <div>
      <Navbar />
      <MobileSideBar />

      <Banner />

      <Contact />

      <Footer />
      <FooterCopywright />
    </div>
  );
};

export default ContactpageLayout;
