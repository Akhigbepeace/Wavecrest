import { StatisticsProps } from "components/molecules/Statistics";
import { DiscoverHospitalityProps } from "components/layouts/Home/DiscoverHospitality";
import { ShowcaseProps } from "components/layouts/Home/Showcase/types";
import { EditableUIConfig } from "../types";
import {
  AnnouncementItem,
  AnnouncementsProps,
} from "components/layouts/Home/Announcements/Announcements";
import {
  OurStoriesProps,
  StoryProps,
} from "components/layouts/Home/OurStories";
import {
  PartnersImgCard,
  PartnersProps,
} from "components/layouts/Home/Partners";

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

const announcements: EditableUIConfig<AnnouncementsProps, AnnouncementItem> = {
  name: "announcements",
  title: "Edit Announcements",
  emptyFormInitial: {
    notice: "",
    flier: "/assets/imgs/empty-img.jpeg",
    title: "",
    date: "",
    linkTo: "",
    link: "",
    text: "",
  },
  groupItems: [
    {
      name: "flier",
      label: "Flier image",
      type: "image",
    },
    {
      name: "title",
      label: "Announcement Title",
      placeholder: "Enter title",
    },
    {
      name: "date",
      label: "Date",
      placeholder: "Enter announcement data",
      type: "text",
    },
    {
      name: "linkTo",
      label: "Button link(optional)",
      placeholder: "Enter link action",
      type: "text",
    },
    {
      name: "link",
      label: "Button text(optional)",
      placeholder: "Enter link action",
      type: "text",
    },
  ],
  groupKey: "title",
};

const ourStories: EditableUIConfig<OurStoriesProps, StoryProps> = {
  name: "ourStory",
  title: "Edit Our Stories",
  groupKey: "name",
  emptyFormInitial: {
    coverImage: "/assets/imgs/empty-img.jpeg",
    name: "",
    postHeading: "",
    postId: "",
    postsImg: "",
    postsText: "",
    text: "",
  },
  groupItems: [
    {
      name: "coverImage",
      label: "Image",
      type: "image",
    },
    {
      name: "name",
      label: "Full Name",
      placeholder: "Enter Full Name",
    },
    {
      name: "text",
      label: "Story",
      type: "text",
      placeholder: "Enter Story",
    },
    {
      name: "postsText",
      label: "Blog Post",
      type: "textarea",
      placeholder: "Enter blog posts",
    },
  ],
};

const partnersConfig: EditableUIConfig<PartnersProps, PartnersImgCard> = {
  name: "partners",
  title: "Edit Partners and Sponsors",
  groupKey: "companyName",
  emptyFormInitial: {
    companyName: "",
    image: "/assets/imgs/empty-img.jpeg",
    fit: "cover",
  },
  groupItems: [
    {
      label: "Logo",
      name: "image",
      type: "image",
    },
    {
      label: "Company Name",
      name: "companyName",
      type: "text",
      placeholder: "Enter Company Name",
    },
  ],
};

export const homeConfig = {
  showCase,
  statistics,
  discoverHospitality,
  announcements,
  ourStories,
  partnersConfig,
};
