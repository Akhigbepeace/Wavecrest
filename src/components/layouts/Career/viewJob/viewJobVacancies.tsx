import { Box, Grid, Heading } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobileRedirect from "components/molecules/MobileRedirect";
import MobilePageBanner from "components/molecules/MobilePageBanner";

const ViewJobVacancies = () => {
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/waveimg.png"
        title="VIEW JOB VACANCIES"
      />

      <Box my="90px">
        <Box
          px={{
            sm: "20px",
            md: "20px",
            lg: "50px",
            xl: "91px",
            "2xl": "91px",
          }}
        >
          <Heading
            my={{
              sm: "0",
              md: "0",
              lg: "0 ",
              xl: "60px",
              "2xl": "60px",
            }}
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
          >
            View Job Vacancies
          </Heading>
        </Box>

        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr",
            "2xl": "1fr 1fr",
          }}
          mx={{
            sm: "0px",
            md: "0px",
            lg: "20px",
            xl: "20px",
            "2xl": "91px",
          }}
          alignItems="center"
          justifyContent="center"
          gridGap={{
            sm: "0px",
            md: "0px",
            lg: "30px",
            xl: "30px",
            "2xl": "30px",
          }}
        >
          <Heading
            fontFamily="Manrope"
            fontWeight="700"
            fontStyle="italic"
            fontSize="20px"
            color="#021D37"
            textAlign="center"
          >
            No Current Vacancy
          </Heading>
        </Grid>
      </Box>

      <MobileRedirect
        pageName="POST JOB VACANCY"
        pageURL="../postJob/postJobVacancies"
      />
    </Fragment>
  );
};

export default ViewJobVacancies;
