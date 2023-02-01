import { Box, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/MobileSideBar";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import { redirects, requirements } from "../constants";
import MobileRedirect from "components/molecules/MobileRedirect";
import CourseReqs from "./CourseReqs";

const AdmissionRequirements = () => {
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/Admission.png"
        title="ADMISSION REQUIREMENTS"
      />

      <Box>
        {requirements.map((requirement, index) => {
          return <CourseReqs key={index} {...requirement} />;
        })}

        <Grid
          justifyContent="center"
          gridTemplateColumns={{
            sm: "repeat(2, auto)",
            md: "repeat(3, auto)",
            lg: "repeat(3, auto)",
          }}
          mt="100px"
          px={{
            sm: "20px",
            md: "20px",
            lg: "91px",
          }}
        >
          {redirects.map((redirect, index) => {
            return (
              <MobileRedirect
                key={index}
                pageName={redirect.name}
                pageURL={redirect.href}
              />
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default AdmissionRequirements;
