import { EditableUIConfig } from "../types";
import { OurStoryProps } from "components/layouts/About/Profile/OurStory";
import { OurPhilosophyProps } from "components/layouts/About/Profile/OurPhilosophy";

const ourStory: EditableUIConfig<OurStoryProps> = {
  name: "ourStory",
  title: "Edit Our Story",
  fields: [
    {
      name: "heading",
      label: "Story Heading",
      type: "text",
    },
    {
      name: "subHeading",
      label: "Sub Heading",
      type: "text",
    },
    {
      name: "body",
      label: "Edit Body",
      type: "textarea",
    },
  ],
};

const philosophy: EditableUIConfig<OurPhilosophyProps> = {
  name: "philosophy",
  title: "Edit Philoshophy",
  fields: [
    {
      name: "title",
      label: "Section title",
      type: "text",
    },
    {
      name: "subTitle",
      label: "Section Subtitle",
      type: "text",
    },
    {
      name: "heading1",
      label: "Heading 1",
      type: "text",
    },
    {
      name: "heading2",
      label: "Heading 2",
      type: "text",
    },
    {
      name: "heading3",
      label: "Heading 3",
      type: "text",
    },
    {
      name: "text1",
      label: "Text 1",
      type: "textarea",
    },
    {
      name: "text2",
      label: "Text 2",
      type: "textarea",
    },
    {
      name: "text3",
      label: "Text 3",
      type: "textarea",
    },
  ],
};

export const aboutConfig = {
  profile: { ourStory, philosophy },
};
