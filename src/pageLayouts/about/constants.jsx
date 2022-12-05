import React from "react";
import Profile from "./Profile";
import Milestone from "./Milestone/Milestone";
import OurTeam from "./Our Team";

export const menuLinks = [
  {
    id: "profile",
    linkTitle: "PROFILE",
    content: <Profile />,
  },
  {
    id: "milestone",
    linkTitle: "MILESTONE",
    content: <Milestone />,
  },
  {
    id: "ourTeam",
    linkTitle: "OUR TEAM",
    content: <OurTeam />,
  },
];
