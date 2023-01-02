import React from "react";
import Programmes from "./Programmes";
import Training from "./Training";
import Intership from "./Internship";
import NYSC from "./NYSC";

export const menuLinks = [
  {
    id: "programmes",
    linkTitle: "PROGRAMMES",
    content: <Programmes />,
  },
  {
    id: "training",
    linkTitle: "TRAINING",
    content: <Training />,
  },
  {
    id: "internship",
    linkTitle: "INTERNSHIP",
    content: <Intership />,
  },
  {
    id: "nysc",
    linkTitle: "NYSC",
    content: <NYSC />,
  },
];
