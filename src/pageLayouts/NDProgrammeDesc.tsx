import React from "react";
import ProgrammeDesc from "components/organisms/ProgrammeDesc";

const NDProgrammeDesc = () => {
  const aboutgallery3 = "/assets/imgs/studyprogrammes 2.png";
  const aboutgallery4 = "/assets/imgs/study-programme3.jpg";

  const quickLinks = [
    {
      image: aboutgallery3,
      text: "Higher National Diploma (HND) in Hospitality Management",
      href: "/HNDProgramme",
    },
    {
      image: aboutgallery4,
      text: "Certificate Course In Hospitality Operations",
      href: "/CertificateCourses",
    },
  ];

  return (
    <ProgrammeDesc
      bannerImg={"/assets/imgs/studyprogramme.jpg"}
      programmeTitle={"National Diploma (ND) in Hospitality Management"}
      programmeDesc={"A two-year programme for hospitality career aspirants."}
      brochureUrl={"/documents/NATIONAL DIPLOMA (ND) IN HOSP (2).pdf"}
      quickLinks={quickLinks}
    />
  );
};

export default NDProgrammeDesc;
