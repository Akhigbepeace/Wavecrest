export const forms = [
  {
    fieldType: "name",
    name: "user_name",
    placeHolder: "FullName",
    variant: "filled",
  },
  {
    fieldType: "number",
    name: "user_number",
    placeHolder: "Phone Number",
    variant: "filled",
  },
  {
    fieldType: "email",
    name: "user_email",
    placeHolder: "Email",
    variant: "filled",
  },
];

export type Programme = {
  course: string;
  price?: string;
  paymentLink: string;
};
export const programmes: Programme[] = [
  {
    course: "HND in Hospitality Management",
    price: "The applicationn fee for this course is: #2,500",
    paymentLink: "https://paystack.com/pay/wchform2",
  },
  {
    course: "ND in Hospitality Management",
    price: "The applicationn fee for this course is: #2,000",
    paymentLink: "https://paystack.com/pay/wchform1",
  },
  {
    course: "Certificate in Hospitality Operations",
    price: "The applicationn fee for this course is: #2,000",
    paymentLink: "https://paystack.com/pay/wchform1",
  },
  {
    course: "Confederation of Tourism and Hospitality",
    paymentLink: "https://tinyurl.com/CTH-Registration-Form1",
  },
  {
    course: "Professional Certificate in Hospitality",
    paymentLink: "https://forms.gle/7vmuHrzHSxHmkh8s8",
  },
  {
    course: "Culinary Courses",
    paymentLink: "https://forms.gle/VQtgEFMa9qhsojGn7",
  },
  {
    course: "National Skill Qualification",
    paymentLink: "https://forms.gle/VQtgEFMa9qhsojGn7",
  },
];
