import React, { Fragment } from "react";
import LinkTabs from "../LinkTabs";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { MenuLink, menuLinks } from "./constants";
import PagesBanner from "components/molecules/PagesBanner";

const Admission = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentId = id || "admissionRequirements";

  const activeLink = menuLinks.find(
    (link) => link.id === currentId
  ) as MenuLink;

  return (
    <Fragment>
      <Navbar />

      <PagesBanner imageURL="/assets/imgs/Admission.png" pageName="ADMISSION" />

      {router.isReady && (
        <LinkTabs menuLinks={menuLinks} activeItem={activeLink.linkTitle}>
          {activeLink.content}
        </LinkTabs>
      )}

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Admission;
