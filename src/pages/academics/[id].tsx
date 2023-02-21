import React from "react";
import Academics from "components/layouts/Academics/index";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "ACADEMICS",
      },
    },
  };
};

const AcademicsPage = () => {
  return <Academics />;
};

export default AcademicsPage;
