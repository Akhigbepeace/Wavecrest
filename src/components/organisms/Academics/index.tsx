import React, { Fragment } from "react";
import { MenuLink, menuLinks } from "./constants";
import Footer from "components/organisms/Footer/Footer";
import LinkTabs from "../LinkTabs";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import { useRouter } from "next/router";
import PagesBanner from "components/molecules/PagesBanner";

const Academics = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentId = id || "programme";

  const activeLink = menuLinks.find(
    (link) => link.id === currentId
  ) as MenuLink;

  return (
    <Fragment>
      <Header />
      <Navbar />

      <PagesBanner imageURL="/assets/imgs/academics.png" pageName="ACADEMICS" />

      <LinkTabs menuLinks={menuLinks} activeItem={activeLink?.linkTitle}>
        {activeLink?.content}
      </LinkTabs>

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
        copyright={"Wavecrest College 2022. All Rights Reserved"}
      />
    </Fragment>
  );
};

export default Academics;
