import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type TeamHeadingProps = {
  teamSectionTitle: string;
};

const TeamSection = (props: TeamHeadingProps) => {
  const { teamSectionTitle } = props;
  return (
    <Box>
      <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>

      <Heading
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="700"
        color="#021D37"
        mb="30px"
      >
        {teamSectionTitle}
      </Heading>
    </Box>
  );
};

export default TeamSection;
