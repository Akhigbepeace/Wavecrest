import React from "react";
import ShowcaseMobile from "./ShowcaseMobile";
import ShowcaseDesktop from "./ShowcaseDesktop";
import { video, showcaseGallery } from "./constants";

import { ShowcaseProps } from "./types";

const Showcase = (props: ShowcaseProps) => {
  const { videoURL = video, gallery = showcaseGallery, ...others } = props;
  return (
    <>
      <ShowcaseDesktop {...others} videoURL={videoURL} gallery={gallery} />
      <ShowcaseMobile {...others} videoURL={videoURL} gallery={gallery} />
    </>
  );
};

export default Showcase;
