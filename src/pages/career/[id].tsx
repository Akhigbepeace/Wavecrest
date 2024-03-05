import Career from "components/layouts/Career";
import React from "react";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "CAREER",
      },
    },
  };
};

const CareerPage = () => {
  return <Career />;
};

export default CareerPage;
