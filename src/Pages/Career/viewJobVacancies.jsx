import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import waveimg from "assets/Images/waveimg.png";

const ViewJobVacancies = () => {
  const jobVacancies = [
    {
      bg: "#FFF",
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      bg: "#EBEDEF",
      company: "Wavecrest College of Hospitality",
      desc: "Culinary Instructor",
      deadLine: "31st December 2022",
    },
    {
      bg: "#FFF",
      company: "Odogwu Bitters",
      desc: "Inspector",
      deadLine: "31st December 2022",
    },
    {
      bg: "#EBEDEF",
      company: "Maggi Star",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      bg: "#FFF",
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      bg: "#EBEDEF",
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
  ];

  const navigate = useNavigate();

  const ViewVacancies = (vacancy) => {
    const navigateTo = `/viewVacancies?companyName=${vacancy.company}&deadline=${vacancy.deadLine}&desc=${vacancy.desc}`;

    navigate(navigateTo, { replace: true });
  };

  return (
    <Fragment>
      <Box
        h="441px"
        w="100%"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={waveimg} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="30px"
            textAlign="center"
            mt="250px"
          >
            VIEW JOB <br /> VACANCIES
          </Text>
        </Box>
      </Box>

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
          {jobVacancies.map((vacancy, index) => {
            return (
              <Box
                key={index}
                p="35px"
                bg={{
                  sm: vacancy.bg,
                  md: vacancy.bg,
                  lg: "#EBEDEF",
                  xl: "#EBEDEF",
                  "2xl": "#EBEDEF",
                }}
              >
                <Heading
                  fontFamily="Playfair Display"
                  fontWeight="700"
                  fontSize={{
                    sm: "24px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px",
                    "2xl": "32px",
                  }}
                  color="#021D37"
                >
                  {vacancy.company}
                </Heading>
                <Box my="20px">
                  <Text fontWeight="400">Description: {vacancy.desc} </Text>
                  <Text fontWeight="400">Deadline: {vacancy.deadLine} </Text>
                </Box>

                <Button
                  w="142px"
                  height="46.89px"
                  bg={{
                    sm: "transparent",
                    md: "transparent",
                    lg: "transparent",
                    xl: "#021D37",
                    "2xl": "#021D37",
                  }}
                  border="3px solid #021D37"
                  color={{
                    sm: "#021D37",
                    md: "#021D37",
                    lg: "#021D37",
                    xl: "#FFF",
                    "2xl": "#FFF",
                  }}
                  fontWeight="700"
                  fontSize="18px"
                  lineHeight="22px"
                  textAlign="center"
                  borderRadius="5px"
                  mt="20px"
                  onClick={() => ViewVacancies(vacancy)}
                  _hover={{
                    bg: "#020E1B",
                    transition: "all ease 0.4s",
                  }}
                >
                  VIEW
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default ViewJobVacancies;
