import React, { Fragment } from "react";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import about from "assets/Images/milestone.jpg";
import Seventies from "./Responsive Milestone/Seventies";
import Eighties from "./Responsive Milestone/Eighties";
import Nineties from "./Responsive Milestone/Nineties";
import Twenties from "./Responsive Milestone/Twenties";
import TwentyTens from "./Responsive Milestone/TwentyTens";
import { useNavigate } from "react-router-dom";
import MobileSideBar from "components/MobileSideBar";

const milestones = [
  {
    year: "1973",
    achievement:
      "The College started a 1-year programme in Housekeeping for girls with their first school-leaving cerificate in a modest house in Animashaun Street, Surulere",
  },
  {
    year: "1978",
    achievement:
      "Wavecrest Training Centre formally began in its location at 75 Adisa Bashua Street in Surulere, as a centre for professional training of young women interested in developing their skills in a career in the field of Catering. By 1980, for the first time students were presented for the City & Guilds London Examinations in Basic Cookery and Home Craft.",
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
      " The West African Examination Council (WAEC) accredited Wavecrest as an instruction and examination centre for WAEC 894 Technical Examination in Hotel & Catering. In 1995 The National Business and Technical Examination Board (NABTEB), which has taken over the WAEC examinations, accorded the Centre with the same recognition as an instruction and examination centre for the National Technical Certificate (NTC) Examination.",
  },
  {
    year: "1998",
    achievement:
      "In an attempt to upgrade the career of Hospitality Management, seeking to make a stronger contribution to raising the standards of the Hospitality sector in Nigeria, it was decided to apply for recognition to the National Board for Technical Education (NBTE) as a Monotechnic offering courses that would lead to the National Diploma (ND). ",
  },
  {
    year: "1999",
    achievement:
      "The Federal Ministry granted the approval to establish the Wavecrest College of Catering and Hospitality Management able to run ND programmes.",
  },
  {
    year: "2002",
    achievement:
      "NBTE granted the approval to commence the National Diploma in Hotel and Catering Management Programme.",
  },
  {
    year: "2005",
    achievement: "Accreditation of the National Diploma Programme",
  },
  {
    year: "2006",
    achievement:
      "NBTE granted the approval to commence the Higher National Diploma (HND) Programme in Hotel and Catering Management",
  },
  {
    year: "2010",
    achievement:
      "Received the 2010 Platinum award for the best hospitality educational institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2011",
    achievement:
      "Received the 2011 Platinum award for the best hospitality educational institute in West Africa Tourism and Hospitality Awards (WATHA)",
  },
  {
    year: "2012",
    achievement:
      "Platinum Winner of the West African Tourism and Hospitality Award (WATHA) for the best Hospitality Educational Institute in West Africa.",
  },
  {
    year: "2014",
    achievement: [
      "Wavecrest became the Approved International Center for the Institute of Hospitality (IHG), UK Management Qualifications",
      "Wavecrest came 2nd in the Accor students take off Finals in Paris, a global student’s competition.",
      "Official signing of the Memorandum of Agreement with Intercontinental Hotel Group. Wavecrest becomes an official IHG Academy Partner",
    ],
  },
  {
    year: "2015",
    achievement:
      "Appointed training provider for the National Vocational Qualification (NVQ) recently approved by the Federal Government",
  },
  {
    year: "2016",
    achievement:
      "Eight students awarded a Swiss Government scholarship to study in the Swiss Hotel School – Boma International Hospitality College in Nairobi Kenya",
  },
  {
    year: "2017",
    achievement:
      "Signed MOU for collaboration with UNDP and Lagos State Employment Trust Fund (LSETF) through the Lagos State Employability Support Project to train 1,500 youth in Hospitality Skills.",
  },
  {
    year: "2018",
    achievement: [
      "The Pyne Awards for Best Institution for the Development of Women in Nigeria.",

      "The African Travel Times Magazine Award for Best Hospitality College for Women (West Africa).",
    ],
  },
];

const Milestone = () => {
  const navigate = useNavigate();

  const profile = (e) => {
    e.preventDefault();
    navigate("/about/profile", { replace: true });
  };
  const ourTeam = (e) => {
    e.preventDefault();
    navigate("/about/ourTeam", { replace: true });
  };
  return (
    <Box>
      <MobileSideBar />
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={about} h="100%" w="100%" objectFit="cover" />

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
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            MILESTONE
          </Text>
        </Box>
      </Box>

      <Flex
        p={{
          sm: "50px 20px",
          md: "50px 40px",
          lg: "50px",
          xl: "50px 91px",
          "2xl": "50px 91px",
        }}
        flexDirection="column"
      >
        <Box
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          {milestones.map((milestone, index) => {
            const textToShow = Array.isArray(milestone.achievement)
              ? milestone.achievement.map((values, i) => (
                  <Box key={i}>{values}</Box>
                ))
              : milestone.achievement;

            return (
              <Fragment>
                <Flex key={index} flexDirection="column" alignItems="baseline">
                  <Flex alignItems="baseline" mb="-8px">
                    <Box
                      bg="#021D37"
                      w="20px"
                      h="20px"
                      ml="-9px"
                      borderRadius="100%"
                    ></Box>

                    <Heading
                      fontFamily="Playfair Display"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="43px"
                      color="#021D37"
                      pt="15px"
                      ml="34px"
                    >
                      {milestone.year}
                    </Heading>
                  </Flex>

                  <Box borderLeft="2px solid #EBEDEF" mb="-30px">
                    <Text
                      fontFamily="Manrope"
                      fontSize="24px"
                      fontWeight="400"
                      lineHeight="33px"
                      mb="10px"
                      ml="45px"
                      pt="15px"
                      pb="25px"
                    >
                      {textToShow}
                    </Text>
                  </Box>
                </Flex>
              </Fragment>
            );
          })}
        </Box>

        <Box
          position={"relative"}
          overflow={"hidden"}
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        >
          <Box>
            <Seventies />
            <Eighties />
            <Nineties />
            <Twenties />
            <TwentyTens />
          </Box>

          <Box mt="100px">
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
              textAlign="center"
              mb="22px"
            >
              Navigate To:
            </Heading>
            <Flex justifyContent="space-evenly">
              <Button
                fontFamily="Manrope"
                fontSize="18px"
                py="25px"
                mb="52px"
                textAlign="center"
                fontWeight="700"
                bg="#EEE"
                onClick={(e) => profile(e)}
              >
                PROFILE
              </Button>
              <Button
                fontFamily="Manrope"
                fontSize="18px"
                py="25px"
                mb="52px"
                textAlign="center"
                fontWeight="700"
                bg="#EEE"
                onClick={(e) => ourTeam(e)}
              >
                OUR TEAM
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Milestone;
