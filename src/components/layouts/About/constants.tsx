import React, { ReactNode } from "react";
import Profile from "./Profile";
import Milestone from "./Milestone/Milestone";
import OurTeam from "./OurTeam";
const imageAvatar = "/assets/imgs/image-avatar.png";


export type MenuLink = {
  id: string;
  href: string;
  linkTitle: string;
  content: ReactNode;
};

export const menuLinks: MenuLink[] = [
  {
    id: "profile",
    href: "/about/profile",
    linkTitle: "PROFILE",
    content: <Profile />,
  },
  {
    id: "milestone",
    href: "/about/milestone",
    linkTitle: "MILESTONE",
    content: <Milestone />,
  },
  {
    id: "ourTeam",
    href: "/about/ourTeam",
    linkTitle: "OUR TEAM",
    content: <OurTeam />,
  },
];

export const ourStands = [
  {
    heading: "Mission",
    text: "To train women to be competent professionals able to meet the challenges of the fast developing world of Hospitality; and to create awareness of the impact of Hospitality service on the quality of life of the individual, the family and ultimately on the development of society.",
  },
  {
    heading: "Vision",
    text: "To provide both technical competence and ethical integrity in order to ensure in-depth Hospitality and Life Skills Training that guarantees the Girl Child 3Es - Education, Employment and Economic independence",
  },
  {
    heading: "Core Values",
    text: [
      "S - Spirit of Service",
      "P - Personal Responsibility",
      "I - Integrity",
      "R - Respect for Others",
      "I - Industriousness",
      "T - Teamwork",
    ],
  },
];

export const milestones = [
  {
    year: "1973",
    achievement:
      "The College started a 1-year programme in Housekeeping for girls with their first school-leaving cerificate in a modest house in Animashaun Street, Surulere",
  },
  {
    year: "1978",
    achievement:
      "Wavecrest Training Centre formally began in its location at 75 Adisa Bashua Street in Surulere, as a centre for professional training of young women interested in developing their skills in a career in the field of Catering. By 1980, for the first time students were presented for the City & Guilds London Examinations in Basic Cookery and Home Craft.",
  },

  {
    year: "1987",
    achievement:
      "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
  },

  {
    year: "1990",
    achievement:
      "An Extension for the Training Center was built. In the same year , recognition was received from the State Ministry of Education as a continuing education center",
  },

  {
    year: "1991",
    achievement:
      " The West African Examination Council (WAEC) accredited Wavecrest as an instruction and examination centre for WAEC 894 Technical Examination in Hotel & Catering. In 1995 The National Business and Technical Examination Board (NABTEB), which has taken over the WAEC examinations, accorded the Centre with the same recognition as an instruction and examination centre for the National Technical Certificate (NTC) Examination.",
  },
  {
    year: "1998",
    achievement:
      "In an attempt to upgrade the career of Hospitality Management, seeking to make a stronger contribution to raising the standards of the Hospitality sector in Nigeria, it was decided to apply for recognition to the National Board for Technical Education (NBTE) as a Monotechnic offering courses that would lead to the National Diploma (ND). ",
  },
  {
    year: "1999",
    achievement:
      "The Federal Ministry granted the approval to establish the Wavecrest College of Catering and Hospitality Management able to run ND programmes.",
  },
  {
    year: "2002",
    achievement:
      "NBTE granted the approval to commence the National Diploma in Hotel and Catering Management Programme.",
  },
  {
    year: "2005",
    achievement: "Accreditation of the National Diploma Programme",
  },
  {
    year: "2006",
    achievement:
      "NBTE granted the approval to commence the Higher National Diploma (HND) Programme in Hotel and Catering Management",
  },
  {
    year: "2010",
    achievement:
      "Received the 2010 Platinum award for the best hospitality educational institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2011",
    achievement:
      "Received the 2011 Platinum award for the best hospitality educational institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2012",
    achievement:
      "Platinum Winner of the West African Tourism and Hospitality Award (WATHA) for the best Hospitality Educational Institute in West Africa.",
  },
  {
    year: "2014",
    achievement: [
      "Wavecrest became the Approved International Center for the Institute of Hospitality (IHG), UK Management Qualifications",
      "Wavecrest came 2nd in the Accor students take off Finals in Paris, a global student’s competition.",
      "Official signing of the Memorandum of Agreement with Intercontinental Hotel Group. Wavecrest becomes an official IHG Academy Partner",
    ],
  },
  {
    year: "2015",
    achievement:
      "Appointed training provider for the National Vocational Qualification (NVQ) recently approved by the Federal Government",
  },
  {
    year: "2016",
    achievement:
      "Eight students awarded a Swiss Government scholarship to study in the Swiss Hotel School – Boma International Hospitality College in Nairobi Kenya",
  },
  {
    year: "2017",
    achievement:
      "Signed MOU for collaboration with UNDP and Lagos State Employment Trust Fund (LSETF) through the Lagos State Employability Support Project to train 1,500 youth in Hospitality Skills.",
  },
  {
    year: "2018",
    achievement: [
      "The Pyne Awards for Best Institution for the Development of Women in Nigeria.",

      "The African Travel Times Magazine Award for Best Hospitality College for Women (West Africa).",
    ],
  },
];

export const managements = [
  {
    image: "/assets/imgs/membersofthemanagement/rosana.png",
    name: "Rosana Forsuelo",
    post: "Provost",
  },
  {
    image: "/assets/imgs/membersofthemanagement/ifeoma.png",
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: "/assets/imgs/membersofthemanagement/veronica.png",
    name: "Veronica Esode",
    post: "Registrar",
  },
  {
    image: "/assets/imgs/membersofthemanagement/edith.png",
    name: "Edith Chukwu",
    post: "Bursar",
  },
];

export const boards = [
  {
    image: imageAvatar,
    name: "Edna Dafe",
    post: "Women's Board",
  },
  {
    image: "/assets/imgs/boardmembers/ward.jpg",
    name: "Trevor Ward",
    post: "W Hospitality Group",
  },
  {
    image: "/assets/imgs/boardmembers/moyo.jpg",
    name: "Moyo Ogunseinde",
    post: "Uraga / Radisson Blu",
  },
  {
    image: imageAvatar,
    name: "Peter Idoko",
    post: "Legend Hotels / Hilton",
  },
  {
    image: imageAvatar,
    name: "Chris Adedipe",
    post: "Independence Consultant",
  },
  {
    image: "/assets/imgs/boardmembers/gloria.png",
    name: "Gloria Osezua",
    post: "Executive Vice Chairman / Owel Farms",
  },
  {
    image: "/assets/imgs/boardmembers/dolapo.png",
    name: "Dolapo Afolami",
    post: "Member",
  },
];

export const staffs = [
  {
    title: "Academic Staff",
    others: [
      {
        image: "/assets/imgs/academicstaff/Juliet.jpeg",
        name: "Osuagwu Juliet",
        post: "Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/eboigbe.jpg",
        name: "Eboigbe Helen",
        post: "Ethics Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/chizurumoke.jpg",
        name: "Obasi Chizurumoke",
        post: "Lecturer / Workshop Co-ordinator",
      },
      {
        image: "/assets/imgs/academicstaff/eboagwu.jpeg",
        name: "Eboagwu Helen",
        post: "Facility Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/dorcas.jpg",
        name: "Adeyemo Dorcas",
        post: "SIWES Co-ordinator",
      },
      {
        image: "/assets/imgs/academicstaff/lilian.jpg",
        name: "Andy-Nwankwo Lilian",
        post: "Librarian",
      },
      {
        image: "/assets/imgs/academicstaff/Ojo.jpg",
        name: "Ojo Sayo",
        post: "Account Lecturer / CTH Trainer",
      },
      {
        image: "/assets/imgs/staffs/aduba.png",
        name: "Aduba Chineze",
        post: "French Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/samuel.jpg",
        name: "Samuel Asuquo",
        post: "Chef",
      },
      {
        image: "/assets/imgs/academicstaff/Inyangudo Gloria.jpg",
        name: "Iyangudo Gloria",
        post: "F&B Lecturer",
      },
      {
        image: "/assets/imgs/staffs/vivian.png",
        name: "Isichei Vivian",
        post: "Lecturer and Academic Co-ordinator",
      },
      {
        image: "/assets/imgs/academicstaff/Odinaka.jpg",
        name: "Ekwugha Odinaka",
        post: "Hospitality Management Lecturer",
      },
      {
        image: "/assets/imgs/staffs/arinze.png",
        name: "Uju Arinze",
        post: "Research Lecturer",
      },
      {
        image: "/assets/imgs/academicstaff/ezika.jpg",
        name: "Ezika Cecilia",
        post: "Faculty Secretary",
      },
      {
        image: "/assets/imgs/academicstaff/onaolapo.jpg",
        name: "Onaolapo Lizzy",
        post: "Food Service and Production Lecturer",
      },
    ],
  },

  {
    title: "Non-Academic Staff",
    others: [
      {
        image: "/assets/imgs/nonAcademicStaff/felicitas.png",
        name: "Felicitas Odome",
        post: "Social Media and Digital Marketing Personnel",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/Nnena.png",
        name: "Okorie Nnenna",
        post: "Assistant Account Officer",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/precious.png",
        name: "Precious Ebung",
        post: "Front Desk Personnel",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/Baptista.jpg",
        name: "Baptista Uwandu",
        post: "Public Relations Officer",
      },
      {
        image: "/assets/imgs/staffs/goodness.png",
        name: "Oparachukwu Goodness",
        post: "Practical Assistant",
      },
      {
        image: "/assets/imgs/staffs/pius.png",
        name: "Nmereole Pius",
        post: "Security Officer",
      },

      {
        image: "/assets/imgs/nonAcademicStaff/reuben.jpg",
        name: "Reuben Francisca Ngozi",
        post: "Secretarial Assistant - Librarian",
      },
    ],
  },

  {
    title: "ODC",
    others: [
      {
        image: "/assets/imgs/staffs/thodora.png",
        name: "Ejiogu Theodora",
        post: "Pastry Chef",
      },
      {
        image: "/assets/imgs/staffs/james.png",
        name: "Idiong James",
        post: "Kitchen Assistant",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/agbo.jpg",
        name: "Agbor Mkpegara",
        post: "Kitchen Assistant",
      },
      {
        image: "/assets/imgs/nonAcademicStaff/anna.jpg",
        name: "Owo Anna",
        post: "Catering Staff",
      },
      {
        image: "/assets/imgs/staffs/happiness.png",
        name: "Ukwachi Happiness",
        post: "Store Supervisor",
      },
    ],
  },
];

export const awards = [
  {
    awardImg: "/assets/imgs/award1.png",
    awardDesc:
      "3-Time Platinum Winner for Best Educational Institute West Africa Tourism & Hospitality Awards (WATHA 2010-2012)",
  },
  {
    awardImg: "/assets/imgs/award2.png",
    awardDesc:
      "The Pyne Awards Winner BEST INSTITUTION FOR THE DEVELOPMENT OF WOMEN IN NIGERIA 2018",
  },
  {
    awardImg: "/assets/imgs/award3.png",
    awardDesc:
      "The African Travel Times Magazine Award for Best Hospitality College for Women (West Africa) 2018",
  },
];

export const recognitions = [
  {
    recogImg: "/assets/imgs/recog1.png",
    recogDesc:
      "Vocational Training Centre in Hospitality for Lagos State Employment Trust Fund (LSETF) through the Lagos State Employability Support Project 2018",
  },
  {
    recogImg: "/assets/imgs/recog1.png",
    recogDesc:
      "The icing on the cake”…Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
  {
    recogImg: "/assets/imgs/recog1.png",
    recogDesc:
      "Appointed Training Provider for the National Vocational Qualification (NVQ) Recently Approved by the Federal Government 2015",
  },
];
