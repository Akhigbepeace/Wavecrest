import { Flex, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { trainings } from "../constants";
import MobileSideBar from "components/MobileSideBar";
import MobileRedirect from "components/molecules/MobileRedirect";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import Courses from "./Courses";

const Training = () => {
  const mobileLinks = [
    {
      name: "PROGRAMMES",
      href: "/academics/programmes",
    },
    {
      name: "INTERNSHIP",
      href: "/academics/internship",
    },
    {
      name: "NYSC",
      href: "/academics/nysc",
    },
  ];
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/training3.png"
        title="TRAINING"
      />

      <Flex flexDirection="column" mb="70px">
        {trainings.map((training, index) => {
          return <Courses key={index} {...training} />;
        })}
      </Flex>

      <Grid
        justifyContent="center"
        gridTemplateColumns={{
          sm: "repeat(2, auto)",
          md: "repeat(3, auto)",
          lg: "repeat(3, auto)",
        }}
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
        }}
      >
        {mobileLinks.map((mobileLink, index) => (
          <MobileRedirect
            key={index}
            pageURL={mobileLink.href}
            pageName={mobileLink.name}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Training;
