import React from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import MobileSideBar from "components/molecules/Header/MobileSideBar";

import Footer from "components/organisms/Footer";

import Contact from "./Contact";
import { useCopyData } from "contexts/EditableCopyContext";
import {
  combinedConfig,
  combinedConstant,
} from "config/constants/editable-copy/combined";
import Editable from "components/organisms/Editable/Editable";
import Banner from "./Banner";

const ContactpageLayout = () => {
  const { data } = useCopyData();
  const contactData = { ...combinedConstant.contact, ...data.contact };

  const { contactConfig } = combinedConfig;

  return (
    <div>
      <Header />
      <Navbar />
      <MobileSideBar />
      <Editable
        page="contact"
        config={contactConfig.banner}
        defaultValues={contactData.banner}
      >
        <Banner {...contactData.banner} />
      </Editable>

      <Contact />

      <Footer />
    </div>
  );
};

export default ContactpageLayout;
