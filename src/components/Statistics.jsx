import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Statistics = () => {
  const statistics = [
    {
      count: "2500+",
      name: "Student Graduated",
      bg: "#EBEDEF",
    },
    {
      count: "50+",
      name: "Industry Partners",
      bg: "#DDD",
    },
    {
      count: "100%",
      name: "Employment Rate",
      bg: "#EBEDEF",
    },
    {
      count: "40%",
      name: "Enterpreneurs",
      bg: "#DDD",
    },
  ];
  return (
    <Box mt="-45px">
      <Grid
        gridTemplateColumns={{
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr",
          xl: "repeat(4, auto)",
          "2xl": "repeat(4, 1fr)",
        }}
        mt="18px"
        color="#021D37"
      >
        {statistics.map((statistic, index) => {
          return (
            <GridItem key={index} textAlign="center" py="40px">
              <Text fontFamily="Open sans" fontSize="20px">
                {statistic.count}
              </Text>
              <Heading fontFamily="Manrope" fontSize="20px" fontWeight="400">
                {statistic.name}
              </Heading>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Statistics;
