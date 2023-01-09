const linked = "/assets/imgs/linkedin.svg";
const twitter = "/assets/imgs/Twitter.svg";
const facebook = "/assets/imgs/facebook.svg";
const whatsapp = "/assets/imgs/whatsapp.png";
const Instagram = "/assets/imgs/ig.svg";

export const socials = [
  {
    icon: linked,
    to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: facebook,
    to: "https://web.facebook.com/WavecrestCollegeLagos/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: twitter,
    to: "https://twitter.com/WaveColl",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: whatsapp,
    to: "https://wa.me/+2349096856606",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    icon: Instagram,
    to: "http://instagram.com/wavecrestcollege",
    target: "_blank",
    rel: "noreferrer",
  },
];

export const pages = [
  {
    name: "ABOUT US",
    to: "/about/profile",
  },
  {
    name: "ADMISSION",
    to: "/admission/admissionRequirements",
  },
  {
    name: "OPUS DEI",
    to: "https://opusdei.org/en-ng/",
    target: "_blank",
  },
  {
    name: "CONTACT",
    to: "/contact",
  },
  {
    name: "ACADEMICS",
    to: "/academics/programmes",
  },
  {
    name: "WOMEN'S BOARD",
    to: "https://womensboard.org.ng/",
    target: "_blank",
  },
  {
    name: "FAQs",
    to: "/admission/faqs",
  },
  {
    name: "ALUMNI",
    to: "/alumni",
  },
  {
    name: "CAREER",
    to: "/career/postJobVacancies",
  },
  {
    name: "BLOG",
    to: "/blog",
  },
  {
    name: "DOWNLOADS",
    to: "/downloads",
  },

  {
    name: "SUPPORT US",
    to: "/support",
  },
];

export const subscribeForm = [
  {
    fieldType: "text",
    name: "user_name",
    placeHolder: "Name",
  },
  {
    fieldType: "email",
    name: "user_email",
    placeHolder: "Email",
  },
];
