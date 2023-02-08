import React from "react";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import MobileSideBar from "components/molecules/Header/MobileSideBar";

import Footer from "components/organisms/Footer";

import Contact from "./Contact";
import { useCopyData } from "contexts/EditableCopyContext";
import { combinedConfig } from "config/constants/editable-copy/combined";
import Editable from "components/organisms/Editable/Editable";
import Banner from "./Banner";

type ContactpageLayoutProps = {
  isAdmin?: boolean;
};
const ContactpageLayout = (props: ContactpageLayoutProps) => {
  const { data } = useCopyData();

  const { contactConfig } = combinedConfig;
  const prefix = props.isAdmin ? "/admin" : "";

  return (
    <div>
      <Header />
      <Navbar hrefPrefix={prefix} />
      <MobileSideBar />
      <Editable
        page="contact"
        config={contactConfig.banner}
        defaultValues={data.contact.banner}
      >
        <Banner {...data.contact.banner} />
      </Editable>

      <Contact />

      <Footer />
    </div>
  );
};

export default ContactpageLayout;
