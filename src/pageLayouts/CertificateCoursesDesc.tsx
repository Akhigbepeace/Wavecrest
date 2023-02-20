import {
  about,
  aboutgallery2,
  aboutgallery4,
  fileUrl,
} from "config/copy/certificateCourses";
import React from "react";
import ProgrammeDesc from "components/organisms/ProgrammeDesc";

const CertificateCoursesDesc = () => {
  const quickLinks = [
    {
      image: aboutgallery2,
      text: "Higher National Diploma (HND) in Hospitality Management",
      href: "/HNDProgramme",
    },

    {
      image: aboutgallery4,
      text: "National Diploma (ND) in Hospitality Management",
      href: "/NDProgramme",
    },
  ];

  return (
    <ProgrammeDesc
      bannerImg={about}
      programmeTitle={"Certificate Course In Hospitality Operations"}
      programmeDesc={
        " A one-year acceleretated certificate programme for young school leavers designed to develop knowledge and skills in food and beverage, housekeeping and reception operations."
      }
      brochureUrl={fileUrl}
      quickLinks={quickLinks}
    />
  );
};

export default CertificateCoursesDesc;
