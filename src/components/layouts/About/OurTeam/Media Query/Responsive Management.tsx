import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";
import { managements } from "../../constants";
import TeamSection from "./TeamSection";

const ResponsiveManagement = () => {
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <TeamSection teamSectionTitle="Managements" />

      <Flex overflowY="scroll">
        {managements.map((management, index) => (
          <Box key={index}>
            <Box w="300px">
              <PeaceImage
                src={management.image}
                pr="10px"
                w="100%"
                h="200px"
                alt="companyLogo"
                objectFit="cover"
                objectPosition="center 30%"
                borderRadius="0px 0px 5px 5px"
              />
            </Box>

            <Flex
              alignItems="center"
              bg="rgba(255, 255, 255, 67%)"
              p="10px 25px"
              position="relative"
              top="-74px"
              borderRadius="0px 0px 5px 5px"
              w="100%"
            >
              <Box
                bg="#021D37"
                w="7px"
                h="80%"
                position="absolute"
                zIndex="1"
              ></Box>

              <Box ml="20px">
                <Heading
                  fontFamily="Playfair Display"
                  fontSize="20px"
                  fontWeight="700"
                  color="#021D37"
                  lineHeight="27px"
                >
                  {management.name}
                </Heading>
                <Text
                  fontFamily="Manrope"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(2, 29, 55, 0.63);"
                  lineHeight="27px"
                >
                  {management.post}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ResponsiveManagement;
