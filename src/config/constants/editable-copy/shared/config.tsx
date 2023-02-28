import { FooterProps } from "components/organisms/Footer/Footer";
import { EditableUIConfig } from "../types";

const header = {
  title: "Edit Header Links",
  fields: [{ name: "logo", label: "Logo", placeholder: "Enter logo URL" }],
};

const footer: EditableUIConfig<FooterProps> = {
  name: "footer",
  title: "Edit Footer",
  fields: [
    {
      name: "phone1",
      label: "Phone 1",
      placeholder: "Update contact phone 1",
    },
    {
      name: "phone2",
      label: "Phone 2",
      placeholder: "Update contact phone 2",
    },
    {
      name: "email",
      label: "Contact Email",
      placeholder: "Update email",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Current School Address",
    },
  ],
};

export const sharedConfig = {
  header,
  footer,
};
