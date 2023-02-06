import React, { Fragment } from "react";
import Footer from "components/organisms/Footer/Footer";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import PagesBanner from "components/molecules/PagesBanner";
import LinkTabs from "components/organisms/LinkTabs";

const Admission = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentId = id || "admissionRequirements";

  const activeLink = menuLinks.find(
    (link) => link.id === currentId
  ) as MenuLink;

  return (
    <Fragment>
      <Header />
      <Navbar />

      <PagesBanner imageURL="/assets/imgs/Admission.png" pageName="ADMISSION" />

      {router.isReady && (
        <LinkTabs menuLinks={menuLinks} activeItem={activeLink?.linkTitle}>
          {activeLink?.content}
        </LinkTabs>
      )}

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

export default Admission;
