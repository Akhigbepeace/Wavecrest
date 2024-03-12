import React from "react";
import About from "components/layouts/About";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "ABOUT",
        description:
          "Wavecrest College of Hospitality is a private Monotechnic located in Lagos, Nigeria. The Institution has been involved with the development of Hospitality Education since 1974.",
      },
    },
  };
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
