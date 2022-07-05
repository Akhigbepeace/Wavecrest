import React, { Fragment } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const milestones = [
  {
    year: "1973",
    achievement:
      "The College started a 1-year programme in Housekeeping for girls with their first school-leaving cerificate in a modest house in Animashaun Street, Surulere",
  },
  {
    year: "1978",
    achievement:
      "Wavecrest Training Center formally began in its location at 75 Adisa Bashua Street in Surulere, as a center for professional training of young women interested in developing their skills in a career in the filed of catering. ",
  },

  {
    year: "1987",
    achievement:
      "Student's were presented as external candidates for the WAEC Technical Examinations in Hotel and Catering",
  },

  {
    year: "1990",
    achievement:
      "An Extension for the Training Center was built. In the same year , recognition was received from the State Ministry of Education as a continuing education center",
  },

  {
    year: "1991",
    achievement:
      "The West Africa Examination Council (WAEC) accredited Wavecrest as an instruction and examination center for WAEC 894 Technical Examination in Hotel & Catering. In 1995, The National Business and Technical Examination Board (NABTED), which has taken over the WAEC Examinations, accorded the Center with the same recognition as an instruction and examination center for the National Technical Certificate (NTC) Examination",
  },
  {
    year: "1998",
    achievement:
      "In an attempt to upgrade the career of Hospitality Management, seeking to make a stronger contribution to raising the standards of the Hospitality sector in Nigeria, it was decided to apply for recognition to the Ntional Board for the Technical Education (NBTE) as a Monotechnic offering courses that would lead to the National Diploma (ND). By 1999, the Federal Ministry granted approval to establish the Wavecrest College of Catering and Hospitality Management able to run ND programmes",
  },
  {
    year: "2002",
    achievement:
      "NBTE granted the approval of commence the National Diploma in Hotel and Catering Management Programme",
  },
  {
    year: "2005",
    achievement: "Accreditation of the National Diploma Programme",
  },
  {
    year: "2006",
    achievement:
      "NBTE granted the approval to commence the Higher National Diploma (HND) Programme in Hotel and Catering Management ",
  },
  {
    year: "2010",
    achievement:
      "Received the 2010 Platinum award for the best hospitality educational institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2011",
    achievement:
      "Received the 2011 Platinum award for the best hospitality educational Institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2012",
    achievement:
      "Received the 2012 Platinum award for the best hospitality educational Institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2014",
    achievement: [
      "Wavecrest became the Approved International Center for the Institute of Hospitality (IHG), UK Management Qualifications",
      "Wavecrest  came 2nd in the Accor students take off Finals in Paris, a global student's competition.",
      "Official signing of the Memorandum of Agreement with Intercontinental Hotel Group, Wavecrest becomes an official IHG Academy Partner",
    ],
  },
  {
    year: "2015",
    achievement:
      "Appointed training provider for the National Vocation Qualificatio (NVQ) recently approved by the Federal Government",
  },
  {
    year: "2016",
    achievement:
      "Eight students were awarded a Swiss Government scholarship to study in the Swiss Hotel School - Boma International Hospitality College in Nairobi, Kenya ",
  },
  {
    year: "2017",
    achievement:
      "Signed MOU for collaboration with UNDP and Lagos State Employment Trust (LSETF) through the Lagos State Employability Support Project to teain 1,500 youth in Hospitality skills",
  },
  {
    year: "2018",
    achievement: [
      "The Pyne Awards for Best Institution for the Development of Women in Nigeria",

      "The Africa Travels Times Magazine Awards for Best Hospitality College for Women (West Africa)",
    ],
  },
];

const Milestone = () => {
  return (
    <Flex p="91px">
      <Box>
        {milestones.map((milestone) => {
          const textToShow = Array.isArray(milestone.achievement)
            ? milestone.achievement.map((values, i) => (
                <Box key={i}>{values}</Box>
              ))
            : milestone.achievement;
          return (
            <Fragment>
              <Box bg="#EBEDEF" w="3px" h="100px" mr="34px"></Box>

              <Flex flexDirection="column" alignItems="baseline">
                <Flex alignItems="baseline">
                  <Box
                    bg="#EBEDEF"
                    w="20px"
                    h="20px"
                    borderRadius="100%"
                  ></Box>

                  <Heading
                    fontFamily="Playfair Display"
                    fontSize="32px"
                    fontWeight="700"
                    lineHeight="43px"
                    color="#021D37"
                    mb="10px"
                    mr="34px"

                  >
                    {milestone.year}
                  </Heading>
                </Flex>

                <Box>
                  <Text
                    fontFamily="Manrope"
                    fontSize="24px"
                    fontWeight="400"
                    lineHeight="33px"
                    mb="10px"
                  >
                    {textToShow}
                  </Text>
                </Box>
              </Flex>
            </Fragment>
          );
        })}
      </Box>
    </Flex>
  );
};

export default Milestone;
