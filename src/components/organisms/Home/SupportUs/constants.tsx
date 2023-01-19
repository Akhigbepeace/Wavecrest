const visa = "/assets/imgs/visa.png";
const paypal = "/assets/imgs/paypal.png";
const mastercard = "/assets/imgs/mastercard.png";

export const forms = [
  {
    fieldType: "name",
    placeHolder: "FullName",
    variant: "filled",
  },
  {
    fieldType: "number",
    placeHolder: "Phone Number",
    variant: "filled",
  },
  {
    fieldType: "email",
    placeHolder: "Email",
    variant: "filled",
  },
];

export const payNow = [
  {
    image: paypal,
    width: "152px",
    height: "38px",
    alt: "Paypal",
  },
  {
    image: mastercard,
    alt: "Mastercard",
    width: "92px",
    height: "55px",
  },
  {
    image: visa,
    alt: "Visa",
    width: "112px",
    height: "35px",
  },
];
