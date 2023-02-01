import React, { Fragment } from "react";
import { MenuLink, menuLinks } from "./constants";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import LinkTabs from "../LinkTabs";
import Navbar from "components/Navbar";
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
      <Navbar />

      <PagesBanner imageURL="/assets/imgs/academics.png" pageName="ACADEMICS" />

      <LinkTabs menuLinks={menuLinks} activeItem={activeLink?.linkTitle}>
        {activeLink?.content}
      </LinkTabs>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Academics;
