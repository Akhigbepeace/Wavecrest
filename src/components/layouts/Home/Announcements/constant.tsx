const PCHFlier = "/assets/imgs/P.C.H. flier.png";
const CulinaryFlier = "/assets/imgs/Culinary flyer.png";
const matricFlier = "/assets/imgs/matricFlier.jpg";
const CTHFlier = "/assets/imgs/cth-flier.png";

type AnnouncementItem = {
  flier: string;
  title: string;
  text: string;
  date?: string;
  linkTo: string;
  link: string;
};
export const announcements: AnnouncementItem[] = [
  {
    flier: CulinaryFlier,
    title: "Culinary Courses",
    text: "A professional programme providing the skill sets for culinary knowledge.",
    date: "February 6 - March 8",
    linkTo: "https://forms.gle/VQtgEFMa9qhsojGn7",
    link: "Apply Now",
  },
  {
    flier: PCHFlier,
    title: "Professional Certificate in Hospitality",
    text: "Training program geared towards industry managers, supervisors, and operatives.  ",
    linkTo: "https://forms.gle/7vmuHrzHSxHmkh8s8",
    link: "Apply Now",
  },

  {
    flier: CTHFlier,
    title: "Confederation of Tourism and Hospitality",
    text: "UK International Gold standard qualifications  for the Hospitality, Culinary & Tourism industries",
    linkTo: "https://tinyurl.com/CTH-Registration-Form1",
    link: "Apply Now",
  },
  {
    flier: matricFlier,
    title: "2023 Matriculation Ceremony",
    text: "The Provost of Wavecrest College of Hospitality cordially invites you to her 2023 Matriculation Ceremony",
    date: "Friday, 17th Febuary, 2023",
    linkTo: "#",
    link: "Read More",
  },
];
