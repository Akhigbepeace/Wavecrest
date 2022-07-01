import { Box, Text, Flex, Heading, Image, Grid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import provost from "assets/Images/provost.png";
import deputyProvost from "assets/Images/deputyprovost.png";
import bursar from "assets/Images/bursar.png";

const managements = [
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: provost,
    name: "Veronica Esode",
    post: "Registrar",
  },
  {
    image: bursar,
    name: "Edith Chukwu",
    post: "Bursar",
  },
];

const staffs = [
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
  {
    image: deputyProvost,
    name: "Ifeoma Nwabachili",
    post: "Deputy Provost",
  },
];

const OurTeam = () => {
  return (
    <Fragment>
      <Box>
        <Box p="0 91px"  bg="#EBEDEF" >
          <Heading
            fontFamily="Playfair Display"
            fontWeight="900"
            fontSize="50px"
            opacity="0.5"
            mt="58px"
          >
            Management
          </Heading>

          <Flex alignItems="center" mt="40px">
            <Image
              src={provost}
              borderRadius="100%"
              mr="30px"
              w="381px"
              h="381px"
            />

            <Box>
              <Heading
                fontFamily="Playfair Display"
                fontWeight="700"
                fontSize="32px"
                lineHeight="43px"
              >
                Rosana Forsuelo
              </Heading>

              <Text
                color="rgba(2, 29, 55, 0.63)"
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="24px"
                lineHeight="43px"
              >
                PROVOST, Wavecrest College
              </Text>

              <Text
                mt="16px"
                fontFamily="Manrope"
                fontSize="18px"
                fontWeight="400"
              >
                Rosana Forsuelo has been in the Hospitality industry for over 20
                years. She is passionate about educating and training a
                competent work force for the industry and has trained over 1500
                young people in professional skills acquisition making them
                employable. Over 90% of these are well placed in the industry or
                are entrepreneurs who now employ others. Over the years her
                students have won scholarships to Hospitality Schools outside
                the country. In 2018, 6 students received full all expense paid
                scholarship to study in Boma International Hotel School Kenya.
                In 2020, another 8 of them received the same opportunity. <br />
                In her tenure as Provost, Wavecrest College has won several
                national and international awards. Rosana Forsuelo was
                personally recognized by the Minister of Education for her
                in-depth and conscientious contribution to the development of
                the National Occupation Standards as well as the implementation
                of the NSQ (National Skills Qualification) in the Hospitality
                Sector. She is indeed an Icon of Hospitality and a shinning
                light for the Girl Child.
              </Text>
            </Box>
          </Flex>

          <Box>
            {managements.map((management) => {
              return (
                <Grid
                  gridTemplateColumns="repeat(3, 1fr)"
                  // flexDirection="column"
                  // justifyContent="center"
                  // textAlign="center"
                  // alignItems="center"
                  mt="115px"
                >
                  <Flex
                    flexDirection="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image
                      src={management.image}
                      borderRadius="100%"
                      w="269px"
                      h="269px"
                    />
                    <Heading
                      mt="16px"
                      color="#021D37"
                      fontFamily="Playfair Display"
                      fontSize="32px"
                      fontWeight="700"
                    >
                      {management.name}
                    </Heading>

                    <Text
                      color="rgba(2, 29, 55, 0.63)"
                      fontFamily="Manrope"
                      fontSize="24px"
                      fontWeight="400"
                    >
                      {management.post}
                    </Text>
                  </Flex>
                </Grid>
              );
            })}
          </Box>
        </Box>

        <Box bg="#FFF" p="0 91px" w="100%">
          <Heading
            fontFamily="Playfair Display"
            fontWeight="900"
            fontSize="50px"
            opacity="0.5"
            mt="50px"
          >
            #Staff
          </Heading>

          <Box>
            {staffs.map((staff) => {
              return (
                <Flex
                  flexDirection="column"
                  // gridTemplateColumns="repeat(4, 1fr)"
                  // gridGap="50px"
                  m="30px 60px"
                >
                  <Flex
                    // m="30px 0"
                    flexDirection="column"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image
                      src={staff.image}
                      borderRadius="100%"
                      w="247px"
                      h="247px"
                    />

                    <Heading
                      mt="16px"
                      color="#021D37"
                      fontFamily="Playfair Display"
                      fontSize="32px"
                      fontWeight="700"
                    >
                      {staff.name}
                    </Heading>

                    <Text
                      color="rgba(2, 29, 55, 0.63)"
                      fontFamily="Manrope"
                      fontSize="24px"
                      fontWeight="400"
                    >
                      {staff.post}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default OurTeam;
