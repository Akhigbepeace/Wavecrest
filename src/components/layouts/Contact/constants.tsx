const aboutgallery1 = "/assets/imgs/news.png";
const aboutgallery2 = "/assets/imgs/testimonial.png";
const aboutgallery4 = "/assets/imgs/programmes.png";
const contactpic = "/assets/imgs/aboutDesktopBanner.jpg";

export const initialValues = {
  user_name: "",
  user_email: "",
  user_number: "",
  user_subject: "",
  user_message: "",
};

export const contactFields = [
  {
    fieldType: "text",
    name: "user_name",
    variant: "filled",
    placeHolder: "Name",
  },
  {
    fieldType: "email",
    name: "user_email",
    variant: "filled",
    placeHolder: "Email",
  },
  {
    fieldType: "number",
    name: "user_number",
    variant: "filled",
    placeHolder: "Phone Number",
  },
  {
    fieldType: "text",
    name: "user_subject",
    variant: "filled",
    placeHolder: "Subject",
  },
];

export const enquires = [
  {
    name: "Admission:",
    phoneNumber: "+234 909 685 6606",
    email: " wavecrestadmissions@gmail.com",
  },
  {
    name: "Training:",
    phoneNumber: "+234 909 685 6606",
    email: "info@wavecrest.edu.ng",
  },
  {
    name: "General:",
    phoneNumber: ["+234 909 685 6606", "+234 808 396 4840"],
    email: "info@wavecrest.edu.ng",
  },
  {
    name: "Partnership:",
    phoneNumber: "+234 802 819 1726",
    email: "info@wavecrest.edu.ng",
  },
  {
    name: "Front Desk:",
    phoneNumber: "+234 808 396 4840",
    email: "info@wavecrest.edu.ng",
  },
  {
    name: "Job Placement:",
    phoneNumber: "+234 818 309 0761",
    email: "wavecrestjobplacement@gmail.com",
  },
];

export const quickLinks = [
  {
    image: aboutgallery1,
    text: "News and Events",
    href: "/home",
  },
  {
    image: aboutgallery2,
    text: "Testimonials",
    href: "/blog",
  },
  {
    image: contactpic,
    text: "About",
    href: "/about/profile",
  },
  {
    image: aboutgallery4,
    text: "Programmes",
    href: "/academics/programmes",
  },
];
