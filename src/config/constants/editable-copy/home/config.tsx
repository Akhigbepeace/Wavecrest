import { StatisticsProps } from "components/molecules/Statistics";
import { DiscoverHospitalityProps } from "components/organisms/Home/DiscoverHospitality";
import { ShowcaseProps } from "components/organisms/Home/Showcase/types";
import { EditableUIConfig } from "../types";

const showCase: EditableUIConfig<ShowcaseProps> = {
  name: "showCase",
  title: "Edit Marketing",
  fields: [
    {
      name: "topText",
      label: "Curvy Text",
      placeholder: "Enter the text on top",
    },
    {
      name: "bottomText",
      label: "Main Text",
      placeholder: "Enter the text at the bottom",
    },
    {
      name: "gallery0",
      label: "Top left Image",
      type: "image",
    },
    {
      name: "gallery1",
      label: "Top Right Image",
      type: "image",
    },
    {
      name: "gallery2",
      label: "Bottom Left Image",
      type: "image",
    },
    {
      name: "gallery3",
      label: "Bottom Right Image",
      type: "image",
    },
  ],
};

const statistics: EditableUIConfig<StatisticsProps> = {
  name: "statistics",
  title: "Edit School Statistics",
  fields: [
    {
      name: "graduates",
      label: "Total Graduates",
      placeholder: "Enter graduate count for marketing",
    },
    {
      name: "industryPartners",
      label: "Number of industry Partners",
      placeholder: "Enter the number of industry partners",
    },
    {
      name: "employmentRate",
      label: "Employment Rate",
      placeholder: "Enter employment rates",
    },
    {
      name: "entrepreneurs",
      label: "Number of Entrepreneurs",
      placeholder: "Enter the number of entrepreneurs",
    },
  ],
};

const discoverHospitality: EditableUIConfig<DiscoverHospitalityProps> = {
  name: "discoverHospitality",
  title: "Edit Discover Hospitality Section",
  fields: [
    {
      name: "btnLabel",
      label: "Button Label",
      placeholder: "Update the button label",
    },
    {
      name: "bannerTitle",
      label: "Banner title",
      placeholder: "Update banner title",
    },
    {
      name: "subText",
      label: "Sub Text",
      placeholder: "Enter graduate count for marketing",
      type: "textarea",
    },
  ],
};

export const homeConfig = {
  showCase,
  statistics,
  discoverHospitality,
};
