import React from "react";
import ShowcaseMobile from "./ShowcaseMobile";
import ShowcaseDesktop from "./ShowcaseDesktop";
import { video } from "./constants";

import { ShowcaseProps } from "./types";

const Showcase = (props: ShowcaseProps) => {
  const { videoURL = video, ...others } = props;
  return (
    <>
      <ShowcaseDesktop {...others} videoURL={videoURL} />
      <ShowcaseMobile {...others} videoURL={videoURL} />
    </>
  );
};

export default Showcase;
