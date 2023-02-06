import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import PostJobVacancies from "./postJob/postJobVacancies";
import ViewJobVacancies from "./viewJob/viewJobVacancies";
import Footer from "components/organisms/Footer/Footer";
import { useRouter } from "next/router";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import PagesBanner from "components/molecules/PagesBanner";
import LinkTabs from "components/organisms/LinkTabs";

type menuLinksProps = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

const menuLinks: menuLinksProps[] = [
  {
    id: "postJobVacancies",
    href: "/career/postJobVacancies",
    linkTitle: "POST JOB VACANCIES",
    content: <PostJobVacancies />,
  },
  {
    id: "viewJobVacancies",
    linkTitle: "VIEW JOB VACANCIES",
    href: "/career/viewJobVacancies",
    content: <ViewJobVacancies />,
  },
];

const Career = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentId = id || "postJobVacancies";
  const activeLink = menuLinks.find(
    (link) => link.id === currentId
  ) as menuLinksProps;

  return (
    <Box>
      <Header />
      <Navbar />

      <Box>
        <PagesBanner imageURL="/assets/imgs/About.png" pageName={"CAREER"} />

        {router.isReady && (
          <LinkTabs menuLinks={menuLinks} activeItem={activeLink.linkTitle}>
            {activeLink.content}
          </LinkTabs>
        )}
      </Box>

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
        copyright={"Wavecrest College 2022. All Rights Reserved"}
      />
    </Box>
  );
};

export default Career;
