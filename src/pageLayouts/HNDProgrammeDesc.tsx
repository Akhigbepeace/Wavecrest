import React from "react";
import ProgrammeDesc from "components/organisms/ProgrammeDesc";

const HNDProgrammeDesc = () => {
  const aboutgallery1 = "/assets/imgs/study-programme3.jpg";
  const aboutgallery4 = "/assets/imgs/studyprogramme.jpg";
  const quickLinks = [
    {
      image: aboutgallery4,
      text: "National Diploma (ND) in Hospitality Management",
      href: "/NDProgramme",
    },
    {
      image: aboutgallery1,
      text: "Certificate Course In Hospitality Operations",
      href: "/CertificateCourses",
    },
  ];

  return (
    <ProgrammeDesc
      bannerImg={"/assets/imgs/studyprogrammes 2.png"}
      programmeTitle={"Higher National Diploma (HND) in Hospitality Management"}
      programmeDesc={
        "A two-year programme for ND hospitality graduates in preparation for NYSC."
      }
      brochureUrl={"/documents/HIGHER NATIONAL DIPLOMA (HND) IN HOSP (1).pdf"}
      quickLinks={quickLinks}
    />
  );
};

export default HNDProgrammeDesc;
