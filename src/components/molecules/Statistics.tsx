import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

export type StatisticsProps = {
  graduates: string;
  industryPartners: string;
  employmentRate: string;
  entrepreneurs: string;
};

const Statistics = (props: StatisticsProps) => {
  const { graduates, industryPartners, employmentRate, entrepreneurs } = props;
  const statistics = [
    {
      count: graduates,
      name: "Graduates",
      bg: "#EBEDEF",
    },
    {
      count: industryPartners,
      name: "Industry Partners",
      bg: "#DDD",
    },
    {
      count: employmentRate,
      name: "Employment Rate",
      bg: "#EBEDEF",
    },
    {
      count: entrepreneurs,
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
        my="18px"
        color="#021D37"
      >
        {statistics.map((statistic, index) => {
          return (
            <GridItem key={index} textAlign="center" pt="40px">
              <Text fontFamily="Open sans" fontSize="20px" fontWeight="400">
                {statistic.count}
              </Text>
              <Heading fontFamily="Manrope" fontSize="20px">
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
