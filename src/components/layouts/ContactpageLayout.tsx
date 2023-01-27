import Contact from "components/organisms/Contact/Contact";
import React from "react";
import Navbar from "components/Navbar";
import MobileSideBar from "components/MobileSideBar";
import PagesBanner from "components/molecules/PagesBanner";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const ContactpageLayout = () => {
  return (
    <div>
      <Navbar />
      <MobileSideBar />
      <PagesBanner
        imageURL="/assets/imgs/aboutDesktopBanner.jpg"
        pageName="CONTACT"
      />
      <Contact />
      <Footer />
      <FooterCopywright />
    </div>
  );
};

export default ContactpageLayout;
