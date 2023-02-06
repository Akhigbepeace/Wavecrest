import Contact from "components/organisms/Contact/Contact";
import React from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import PagesBanner from "components/molecules/PagesBanner";
import Footer from "components/organisms/Footer/Footer";
import MobilePageBanner from "components/molecules/MobilePageBanner";

const ContactpageLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MobileSideBar />

      <PagesBanner
        imageURL="/assets/imgs/aboutDesktopBanner.jpg"
        pageName="CONTACT"
      />
      <MobilePageBanner
        imageURL="/assets/imgs/aboutDesktopBanner.jpg"
        title="CONTACT"
      />

      <Contact />

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
        copyright={"Wavecrest College 2022. All Rights Reserved"}
      />
    </div>
  );
};

export default ContactpageLayout;
