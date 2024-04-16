import { Heading, Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import MobileRedirect from "components/molecules/MobileRedirect";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import PostJobForm from "./postJobForm";

const PostJobVacancies = () => {
  return (
    <Fragment>
      <MobileSideBar />

      <MobilePageBanner
        imageURL="/assets/imgs/waveimg.png"
        title="POST JOB VACANCIES"
      />

      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box>
          <Box>
            <Box
              w="88px"
              h="3px"
              bg="#021D37"
              mb="10px"
              mt="60px"
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
                "2xl": "none",
              }}
            ></Box>
            <Heading
              mt={{
                sm: "0",
                md: "0px",
                lg: "0",
                xl: "60px",
                "2xl": "60px",
              }}
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
            >
              Post Job Vacancies
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "21px",
              lg: "21px",
              xl: "21px",
              "2xl": "21px",
            }}
            lineHeight="33px"
            color="#021D37"
            my="24px"
          >
            Looking to fill Hospitality Vacancies in your organization? Please
            fill details below
          </Text>
        </Box>

        <PostJobForm />
      </Box>

      <MobileRedirect
        pageName="VIEW JOB VACANCY"
        pageURL="../viewJob/viewJobVacancies"
      />
    </Fragment>
  );
};

export default PostJobVacancies;
