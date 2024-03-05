import React from "react";
import Admission from "components/layouts/Admission";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "ADMISSION",
      }
    }
  }
}

const AdmissionPage = () => {
  return <Admission />;
};

export default AdmissionPage;
