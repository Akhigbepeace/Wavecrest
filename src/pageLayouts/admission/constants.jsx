import React from "react";
import AdmissionRequirements from "pageLayouts/admission/AdmissionRequirements";
import TuitionAndScholarship from "pageLayouts/admission/Tuition And Scholarship/TuitionAndScholarship";
import ApplyOnline from "pageLayouts/admission/ApplyOnline";
import Hostel from "pageLayouts/admission/Hostel";
import FAQs from "pageLayouts/admission/FAQs";

export const menuLinks = [
  {
    id: "admissionRequirements",
    linkTitle: "ADMISSION REQUIREMENTS",
    content: <AdmissionRequirements />,
  },
  {
    id: "tuitionAndScholarship",
    linkTitle: "TUITION AND SCHOLARSHIP",
    content: <TuitionAndScholarship />,
  },
  {
    id: "applyOnline",
    linkTitle: "APPLY ONLINE",
    content: <ApplyOnline />,
  },
  {
    id: "hostel",
    linkTitle: "HOSTEL",
    content: <Hostel />,
  },
  {
    id: "faqs",
    linkTitle: "FAQs",
    content: <FAQs />,
  },
];
