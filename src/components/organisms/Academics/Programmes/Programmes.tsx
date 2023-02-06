import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import { programmes } from "../constants";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import MobileRedirect from "components/molecules/MobileRedirect";
import Program from "./Program";

const Programmes = () => {
  const mobileLinks = [
    {
      name: "TRAINING",
      href: "/academics/training",
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
    <Box>
      <MobileSideBar />
      <MobilePageBanner
        imageURL="/assets/imgs/studyprogramme.jpg"
        title={"PROGRAMMES"}
      />

      <Box>
        {programmes.map((programme, index) => {
          return <Program key={index} {...programme} />;
        })}
      </Box>

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
    </Box>
  );
};

export default Programmes;
