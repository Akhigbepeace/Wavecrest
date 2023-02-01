import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import RespTuition from "./RespTuition";
import MobileSideBar from "components/MobileSideBar";
import ScholarshipAccordion from "./ScholarshipAccordion";
import CourseTuitions from "./CourseTuitions";

const TuitionAndScholarship = () => {
  return (
    <Fragment>
      <MobileSideBar />
      <Box
        mt="78px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        <CourseTuitions />

        <ScholarshipAccordion />
      </Box>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <RespTuition />
      </Box>
    </Fragment>
  );
};

export default TuitionAndScholarship;
