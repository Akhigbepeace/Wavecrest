const studyProgrammes1 = "/assets/imgs/studyprogrammes 2.png";
const studyProgrammes2 = "/assets/imgs/study-programme3.jpg";
const studyProgrammes3 = "/assets/imgs/studyprogramme.jpg";
const studyProgrammes4 = "/assets/imgs/training1.png";
const training1 = "/assets/imgs/trainingImages/training1.jpg";
const training2 = "/assets/imgs/trainingImages/training2.jpg";
const training3 = "/assets/imgs/trainingImages/training3.jpg";

export const objArr = [
  {
    linkContent: "HND IN HOSPITALITY MANAGEMENT",
    values: [
      {
        imageSrc: studyProgrammes1,
        href: "/HNDProgramme",
        current: false,
        captionHeading:
          "A Programme for ND Hospitality Graduates in preparation for NYSC",
        captionTime: "2 Years | Full Time",
        captionButton: "APPLY NOW",
      },
    ],
  },

  {
    linkContent: "ND IN HOSPITALITY MANAGEMENT",
    values: [
      {
        imageSrc: studyProgrammes3,
        href: "/NDProgramme",
        current: false,
        captionHeading: "A programme for Hospitality Career aspirants",
        captionTime: "2 Years | Full Time",
        captionButton: "APPLY NOW",
      },
    ],
  },

  {
    linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
    values: [
      {
        imageSrc: studyProgrammes2,
        href: "/CertificateCourses",
        current: true,
        captionHeading:
          "AN ACCELERATED CERTIFICATE PROGRAMME FOR YOUNG SCHOOL LEAVERS",
        captionTime: "1 Year | Full Time",
        captionButton: "APPLY NOW",
      },
    ],
  },

  {
    linkContent: "TRAININGS",
    values: [
      {
        imageSrc: training1,
        current: false,
        href: "/academics/training",
        captionHeading: "CONFEDERATION OF TOURISM AND HOSPITALITY",
        captionTime: "Duration: Flexible",
        captionButton: "APPLY NOW",
      },
      {
        imageSrc: training2,
        current: false,
        href: "/academics/training",

        captionHeading: "HOSPITALITY TRAINING PROGRAMMES",
        captionTime: "Duration: Flexible",
        captionButton: "APPLY NOW",
      },
      {
        imageSrc: studyProgrammes4,
        current: false,
        href: "/academics/training",

        captionHeading: "CULINARY COURSES",
        captionTime: "5 Weeks - 3 Months",
        captionButton: "APPLY NOW",
      },
      {
        imageSrc: training3,
        current: false,
        href: "/academics/training",
        captionHeading: "PROFESSISONAL CERTIFICATE IN HOSPITALITY",
        captionTime: "10 weeks",
        captionButton: "APPLY NOW",
      },
    ],
  },
];

export const shortCourses = [
  {
    linkContent: "TRAINING",
    values: [
      {
        imageSrc: training1,
        current: false,
        captionHeading: "Confederation of Tourism and Hospitality",
        captionTime: "1 Year | Part Time",
        captionButton: "Apply Now",
      },
      {
        imageSrc: training2,

        current: false,
        captionHeading: "Hospitality Training Programs",
        captionTime: "1 Year | Part Time",
        captionButton: "Apply Now",
      },
      {
        imageSrc: studyProgrammes4,

        current: false,
        captionHeading: "Culinary Courses",
        captionTime: "1 Year | Part Time",
        captionButton: "Apply Now",
      },
      {
        imageSrc: training3,
        current: false,
        captionHeading: "National Skill Acquisition",
        captionTime: "1 Year | Part Time",
        captionButton: "Apply Now",
      },
    ],
  },
];
