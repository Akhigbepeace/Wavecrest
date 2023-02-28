import React from "react";
import Head from "next/head";
import { ENVIRONMENT, SITE_BASE_URL } from "config/settings";

export type SeoProps = Partial<{
  page: string;
  imgRelativePath: string;
  description: string;
}>;

const keywords = [
  "Women Empowerment",
  "Girl Child",
  "Hospitality Training",
  "Women Education",
  "Tourism",
  "Hospitality",
  "Hotel Management",
  "Food and Beverage",
  "Laundry Services",
  "Housekeeping",
  "Hospitality Talent",
].join(",");

export const Seo = (props: SeoProps) => {
  let pageTitle = "WAVECREST COLLEGE OF HOSPITALITY";

  if (props.page) {
    pageTitle += " | " + props.page.toUpperCase();
  }
  const description =
    props.description ||
    "In the last 40 years we have consistently trained individuals and produced graduates who are in very high demand in the Industry. 100% of our graduates are decently employed within 3 months.";

  const imgRelativePath =
    props.imgRelativePath || `/assets/imgs/No-Text-LOGO.png`;

  const fullImagePath = `${SITE_BASE_URL}${imgRelativePath}`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${SITE_BASE_URL}${imgRelativePath}`}
      />
      <meta property="og:site_name" content="Wavecrest" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImagePath} />
      <meta name="twitter:card" content="summary_large_image" />

      {ENVIRONMENT !== "production" && <meta name="robots" content="noindex" />}
    </Head>
  );
};

export default Seo;
