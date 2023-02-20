import React, { ReactNode } from "react";
import Training from "./Trainings/Training";
import Intership from "./Internship";
import NYSC from "./NYSC";
import Programmes from "./Programmes/Programmes";
const studyProgrammes1 = "/assets/imgs/studyprogrammes 2.png";
const studyProgrammes2 = "/assets/imgs/study-programme3.jpg";
const studyProgrammes3 = "/assets/imgs/studyprogramme.jpg";
const cth = "/assets/imgs/cth.png";
const training1 = "/assets/imgs/training1.png";
const training2 = "/assets/imgs/training2.png";
const training3 = "/assets/imgs/training3.png";

export type MenuLink = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

export const menuLinks: MenuLink[] = [
  {
    id: "programmes",
    href: "/academics/programmes",
    linkTitle: "PROGRAMMES",
    content: <Programmes />,
  },
  {
    id: "training",
    href: "/academics/training",
    linkTitle: "TRAINING",
    content: <Training />,
  },
  {
    id: "internship",
    href: "/academics/internship",
    linkTitle: "INTERNSHIP",
    content: <Intership />,
  },
  {
    id: "nysc",
    href: "/academics/nysc",
    linkTitle: "NYSC",
    content: <NYSC />,
  },
];

export type ProgrammesProps = {
  programmeTitle: string;
  background: string;
  linkContent: string;
  programmeDurationTime: string;
  programmeDurationYear: string;
  imageSrc: string;
  current: boolean;
  captionHeading: string;
  captionTime: string;
  captionButton: string;
  responsiveDesc: string;
  fileUrl: string;
  href: string;
  height?: string;
  objectPosition?: string;
};

export const programmes: ProgrammesProps[] = [
  {
    programmeTitle: "Higher National Diploma (HND) in Hospitality Management",
    background: "#FFF",
    linkContent: "HND IN HOSPITALITY MANAGEMENT",
    programmeDurationTime: "FULLTIME",
    programmeDurationYear: "2YEARS",
    imageSrc: studyProgrammes1,
    current: false,
    captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
    captionTime: "2 Years | Full Time",
    captionButton: "Apply Now",
    responsiveDesc:
      "A two-year programme for ND hospitality graduates in preparation for NYSC.",
    fileUrl: "/documents/HIGHER NATIONAL DIPLOMA (HND) IN HOSP (1).pdf",
    href: "/HNDProgramme",
  },
  {
    programmeTitle: "National Diploma (ND) in Hospitality Management",
    background: "#EBEDEF",
    linkContent: "SHORT COURSES",
    programmeDurationTime: "FULLTIME",
    programmeDurationYear: "2YEARS",
    imageSrc: studyProgrammes3,
    current: false,
    captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
    height: "450px",
    objectPosition: "center 25%",

    captionTime: "2 Years | Part Time",
    captionButton: "Apply Now",
    responsiveDesc: "A two-year programme for hospitality career aspirants",
    fileUrl: "/documents/NATIONAL DIPLOMA (ND) IN HOSP (2).pdf",
    href: "/NDProgramme",
  },
  {
    programmeTitle: "Certificate Course In Hospitality Operations",
    background: "#FFF",
    linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
    programmeDurationTime: "FULLTIME",
    programmeDurationYear: "2YEARS",
    imageSrc: studyProgrammes2,
    current: true,
    captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
    height: "500px",
    objectPosition: "center 2%",
    captionTime: "1 Year | Full Time",
    captionButton: "Apply Now",
    responsiveDesc:
      "A one-year acceleretated certificate programme for young school leavers designed to develop knowledge and skills in food and beverage, housekeeping and reception operations.",
    fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    href: "/CertificateCourses",
  },
];

export type Trainings = {
  background?: string;
  trainingsTitle?: string;
  trainingsImage: string;
  trainingDurationTime?: string;
  trainingDurationYear?: string;
  trainingsText?: string;
  reapprovalCert?: string;
  downloadBrochure?: string;
  button?: string;
  fileUrl?: string;
};

export const trainings: Trainings[] = [
  {
    background: "#EBEDEF",
    trainingsTitle: "Confederation of Tourism and Hospitality",
    trainingsImage: cth,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "Wavecrest College is an approved International Centre for the delivery and assessment of the Professional Management Qualifications of the Institute of Hospitality, UK. ",
    reapprovalCert: "See Wavecrest College Reapproval Certificate 2020",
    downloadBrochure: "Download CTH Flier",
    button: "APPLY NOW",
    fileUrl: "/documents/tch flier.png",
  },
  {
    background: "#FFF",
    trainingsTitle: "Professional Certificate in Hospitality",
    trainingsImage: training1,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "PCH:  The Professional Certificate in Hospitality (PCH) is a 10 week programme designed for operators in the hospitality industry and related-sectors who seek to expand their existing knowledge and skill-base, acquire new skills, and enhance their understanding of key hospitality operations in Food and Beverage, Housekeeping and Facility Management and Front Office and A-C below and other general areas. Participants have the opportunity to apply practical learning to their operations and receive constructive feedback during the period of learning. A 2-month industry internship to acquire valuable hands-on experience is available for suitably qualified candidates. One can choose to do a single module.",
    downloadBrochure: "Download PCH Flier",
    button: "REGISTER",
    fileUrl: "/documents/P.C.H. flier.png",
  },
  {
    background: "#EBEDEF",
    trainingsTitle: "Culinary Courses",
    trainingsImage: training2,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "Are you new to the world of Professional cookery or are you on a quest to develop you existing skills? Our culinary programs are designed to provide a step by step introduction to the fundamentals of cookery in the following areas – National and International dishes, yeast products, cakes & icing, pastries, finger foods, mixed drinks and lots more. Through a combined delivery process of demonstrations and hands-on sessions, you will be exposed to a world of eclectic fusions designed to delight your family and friends. ",
    downloadBrochure: "Download Culinary Course Flier",
    button: "APPLY NOW",
    fileUrl: "/documents/Culinary flyer.png",
  },
  {
    background: "#FFF",
    trainingsTitle: "National Skill Qualification",
    trainingsImage: training3,
    trainingDurationTime: "FULLTIME",
    trainingDurationYear: "2YEARS",
    trainingsText:
      "Nigerian Skills Qualification Framework (NSQF) formerly National Vocational Qualification Framework (NVQF) is a system for the development, classification and recognition of skills, knowledge and competencies acquired by individuals, irrespective of where and how the training or skill was acquired. The system gives a clear statement of what the learner must know or be able to do whether the learning took place in a classroom, on-the-job, or less formally. The framework indicates the comparability of different qualifications and how one can progress from one level to another. The framework is the structure within which the National Skills Qualifications (NSQs) operate.",
    downloadBrochure: "Download NSQ Brochure",
    button: "REGISTER",
    fileUrl: "",
  },
];

export const forms = [
  {
    fieldType: "text",
    name: "user_name",
    placeHolder: "FullName",
    variant: "filled",
  },
  {
    fieldType: "text",
    name: "user_address",
    placeHolder: "Address",
    variant: "filled",
  },
  {
    fieldType: "email",
    name: "user_email",
    placeHolder: "Email",
    variant: "filled",
  },
  {
    fieldType: "tel",
    name: "user_number",
    placeHolder: "Phone Number",
    variant: "filled",
  },
  {
    fieldType: "text",
    name: "user_class",
    placeHolder: "Class",
    variant: "filled",
  },
];

export const navigateTo = [
  {
    name: "PROGRAMMES",
    href: "/academics/programmes",
  },
  {
    name: "TRAINING",
    href: "/academics/training",
  },
  {
    name: "INTERNSHIP",
    href: "/academics/internship",
  },
];

export const internshipCompanies = [
  "Marriot Group",
  "Hilton Group",
  "Eden Heights Apartments",
  "Kennan Lodge",
  "Legend Hotels Lagos Airport",
  "Radisson Blu Hotel",
  "The Wheatbaker Lagos",
  "Lagos Business School",
  "Southern Sun Ikoyi",
  "Eko Hotel and Suites",
  "Sugar Creations",
  "Ibis Hotel",
  "Four Points by Sheraton",
  "Ikoyi Club 1938",
  "China - Wok Restaurant & Grill",
  "In4u cakes",
  "Sun Heaven Hotels and Resort",
  "Lagos Continental Hotel",
  "Amber Residence",
  "Araba’s Homemade",
  "Cakes ‘n’ Candy",
  "Elion House Hotel",
  "Fahrenheit Loft Hotel",
  "Lounge 38",
  "Pan African Catering - Servair",
  "Simply Sweet Confectionery",
];
