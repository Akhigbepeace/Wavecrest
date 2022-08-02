import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewJobVacancies = () => {
  const jobVacancies = [
    {
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      company: "Wavecrest College of Hospitality",
      desc: "Culinary Instructor",
      deadLine: "31st December 2022",
    },
    {
      company: "Odogwu Bitters",
      desc: "Inspector",
      deadLine: "31st December 2022",
    },
    {
      company: "Maggi Star",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
    {
      company: "Radisson Blu Hotels & suits",
      desc: "Front Desk official",
      deadLine: "31st December 2022",
    },
  ];

  const navigate = useNavigate();

  const ViewVacancies = (e) => {
    e.preventDefault();

    navigate("/viewVacancies", { replace: true });
  };
  
  return (
    <Box my="90px" px="95px">
      <Heading
        my="60px"
        fontFamily="Playfair Display"
        fontWeight="700"
        fontSize="32px"
      >
        View Job Vacancies
      </Heading>

      <Grid gridTemplateColumns="1fr 1fr" mt="30px" gridGap="30px">
        {jobVacancies.map((vacancy) => {
          return (
            <Box p="35px" bg="#EBEDEF">
              <Heading
                fontFamily="Playfair Display"
                fontWeight="700"
                fontSize="32px"
                color="#021D37"
              >
                {vacancy.company}
              </Heading>

              <Box my="20px">
                <Text>Description: {vacancy.desc} </Text>
                <Text>Deadline: {vacancy.deadLine} </Text>
              </Box>

              <Button
                fontFamily="Manrope"
                fontSize="24px"
                fontWeight="700"
                borderRadius="3px"
                bg="#021D37"
                py="10px"
                textAlign="center"
                color="#FFF"
                onClick={ViewVacancies}
                _hover={{
                  bg: "#020E1B",
                }}
              >
                APPLY
              </Button>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ViewJobVacancies;
