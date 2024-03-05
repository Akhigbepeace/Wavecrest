import MobilePageBanner from "components/molecules/MobilePageBanner";
import PagesBanner from "components/molecules/PagesBanner";

import React from "react";

export type BannerProps = {
  imageURL: string;
  pageName: string;
};
const Banner = (props: BannerProps) => {
  const { imageURL, pageName } = props;
  return (
    <>
      <PagesBanner imageURL={imageURL} pageName={pageName} />

      <MobilePageBanner imageURL={imageURL} title={pageName} />
    </>
  );
};

export default Banner;
