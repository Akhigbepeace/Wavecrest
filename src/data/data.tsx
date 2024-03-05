export const formsField = [
  {
    fieldType: "text",
    name: "user_name",
    placeHolder: "FullName",
    variant: "filled",
  },
  {
    fieldType: "email",
    placeHolder: "Email",
    name: "user_email",
    variant: "filled",
  },
  {
    fieldType: "number",
    name: "user_number",
    placeHolder: "Phone Number",
    variant: "filled",
  },
];

export type hostelTypesProps = {
  hostel: string;
  price: string;
};

export const hostelTypes: hostelTypesProps[] = [
  {
    hostel: "Hostel Types",
    price: "",
  },
  {
    hostel: "2 Man Room",
    price: " The fee for this hostel is: #500,000",
  },
  {
    hostel: "4 Man Room",
    price: " The fee for this hostel is: #400,000",
  },
  {
    hostel: "6 Man Room",
    price: " The fee for this hostel is: #300,000",
  },
];
