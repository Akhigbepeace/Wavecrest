import { StatisticsProps } from "components/molecules/Statistics";
import { FooterProps } from "components/organisms/Footer/Footer";
import { ShowcaseProps } from "components/organisms/Home/Showcase/types";
import {
  footerConstants,
  showCaseConstant,
  statisticsConstant,
} from "./shored-constants";
import { EditableType } from "./types";

const header = {
  title: "Edit Header Links",
  fields: [{ name: "logo", label: "Logo", placeholder: "Enter logo URL" }],
};

const showCase: EditableType<ShowcaseProps> = {
  title: "Edit Marketing Text",
  defaults: showCaseConstant,
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
  ],
};

const statistics: EditableType<StatisticsProps> = {
  title: "Edit School Statistics",
  defaults: statisticsConstant,
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

const footer: EditableType<FooterProps> = {
  title: "Edit Footer",
  defaults: footerConstants,
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
    {
      name: "copyright",
      label: "Copy Right",
      placeholder: "Copy rights",
    },
  ],
};

export const editables = {
  header,
  showCase,
  statistics,
  footer,
};
