import { EditableUIConfig } from "../types";
import { BannerProps } from "components/layouts/Contact/Banner";

const banner: EditableUIConfig<BannerProps> = {
  name: "banner",
  title: "Edit Banner",
  fields: [
    {
      name: "imageURL",
      label: "Banner Image",
      type: "image",
    },
    {
      name: "pageName",
      label: "Title",
      placeholder: "Enter page tile",
    },
  ],
};

export const contactConfig = {
  banner: banner,
};
