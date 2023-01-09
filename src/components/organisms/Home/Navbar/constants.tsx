import React from "react";
import { FaChevronRight } from "react-icons/fa";

export const socials = [
  {
    icon: "/assets/imgs/linkedin.svg",
    to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/facebook.svg",
    to: "https://web.facebook.com/WavecrestCollegeLagos/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/Twitter.svg",
    to: "https://twitter.com/WaveColl",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/whatsapp.png",
    to: "https://wa.me/+2349096856606",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: "/assets/imgs/ig.svg",
    to: "http://instagram.com/wavecrestcollege",
    target: "_blank",
    rel: "noreferrer",
  },
];
export const navLinks = [
  {
    name: "ABOUT",
    to: "/about/profile",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "PROFILE",
        to: "/about/profile",
      },
      {
        name: "MILESTONE",
        to: "/about/milestone",
      },
      {
        name: "OUR TEAM",
        to: "/about/ourTeam",
      },
    ],
  },

  {
    name: "ACADEMICS",
    to: "/academics/programmes",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "PROGRAMMES",
        to: "/academics/programmes",
      },
      {
        name: "TRAINING",
        to: "/academics/training",
      },

      {
        name: "INTERNSHIP",
        to: "/academics/internship",
      },
      {
        name: "NYSC",
        to: "/academics/nysc",
      },
    ],
  },

  {
    name: "ADMISSION",
    to: "/admission/admissionRequirements",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "ADMISSION REQUIREMENTS",
        to: "/admission/admissionRequirements",
      },
      {
        name: "TUITION AND SCHOLARSHIPS",
        to: "/admission/tuitionAndScholarship",
      },
      {
        name: "APPLY ONLINE",
        to: "/admission/applyOnline",
      },
      {
        name: "HOSTEL",
        to: "/admission/hostel",
      },

      {
        name: "FAQs",
        to: "/admission/faqs",
      },
    ],
  },
  // TODO: Add alumni link
  {
    name: "BLOG",
    to: "/blog",
    NestedLinks: [],
  },

  {
    name: "CAREER",
    to: "/career/postJobVacancies",
    icon: <FaChevronRight size="15px" />,
    NestedLinks: [
      {
        name: "POST JOB VACANCIES",
        to: "/career/postJobVacancies",
      },
      {
        name: "VIEW JOB VACANCIES",
        to: "/career/viewJobVacancies",
      },
    ],
  },

  {
    name: "CONTACT",
    to: "/contact",
    NestedLinks: [],
  },
];
export const sideLinks = [
  {
    name: "SUPPORT US",
    href: "/support",
    variant: "outlined" as const,
  },
  {
    name: "APPLY NOW",
    href: "/admission/applyOnline",
    variant: "filled" as const,
  },
];
