import React from "react";
import ShowcaseMobile from "./ShowcaseMobile";
import ShowcaseDesktop from "./ShowcaseDesktop";
import { videoURL, showcaseGallery } from "./constants";

const Showcase = () => {
  return (
    <>
      <ShowcaseDesktop videoURL={videoURL} gallery={showcaseGallery} />
      <ShowcaseMobile videoURL={videoURL} gallery={showcaseGallery} />
    </>
  );
};

export default Showcase;
