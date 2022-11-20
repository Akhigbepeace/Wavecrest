import React, { Fragment } from "react";
import {
  Box,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  UnorderedList,
  ListItem,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import RespTuition from "./RespTuition";
import MobileSideBar from "components/MobileSideBar";
import { useRouter } from "next/router";

const TuitionAndScholarship = () => {
  const Tuition = [
    {
      courseTitle: "Higher National Diploma (HND) in Hospitality Management",
      item: "ITEM",
      year1: "YEAR 1",
      year2: "YEAR 2",
      tuitionFee: "TUITION FEE",
      tuitionFeePrice1: "#502,800",
      tuitionFeePrice2: "#526,800",
      examinationFee: "ADMIN FEE",
      examinationFeePrice1: "#2,000",
      examinationFeePrice2: "--",
      workshopFee: "PRACTICAL UNIFORMS",
      workshopFeePrice1: "#35,000",
      workshopFeePrice2: "--",
      devFee: "DEVELOPMENT FEE",
      devFeePrice1: "#40,000",
      devFeePrice2: "#40,000",
      practicalFee: "MANUALS/WORKBOOKS",
      practicalFeePrice1: "#7,500",
      practicalFeePrice2: "#7,500",
      studentID: "MEDICALS",
      studentIDPrice1: "#19,000",
      studentIDPrice2: "--",
      studentPracticals: "STUDENT PRACTICALS*",
      studentPracticalsPrice1: "#60,500",
      studentPracticalsPrice2: "#60,500",
      hmoScheme: "HMO SCHEME",
      hmoSchemePrice1: "#10,000",
      hmoSchemePrice2: "#10,000",
      fees: "FEES TO BE PAID",
      feesPrice1: "#144,000",
      feesPrice2: "#144,000",
      discount: "AMOUNT SUBSIDIZED BY COLLEGE",
      discountPrice1: "#358,800",
      discountPrice2: "#382,800",
      totalFees: "TOTAL FEES TO BE PAID",
      totalFeesPrice1: "#299,000",
      totalFeesPrice2: "#262,000",
    },

    {
      courseTitle: "National Diploma (ND) in Hospitality Management",
      item: "ITEM",
      year1: "YEAR 1",
      year2: "YEAR 2",
      tuitionFee: "TUITION FEE",
      tuitionFeePrice1: "#496,800",
      tuitionFeePrice2: "#490,800",
      acceptanceFee: "ACCEPTANCE FEE",
      acceptanceFeePrice1: "#5,000",
      acceptanceFeePrice2: "--",
      examinationFee: "ADMIN FEE",
      examinationFeePrice1: "#9,500",
      examinationFeePrice2: "--",
      workshopFee: "PRACTICAL UNIFORMS",
      workshopFeePrice1: "#35,000",
      workshopFeePrice2: "--",
      devFee: "DEVELOPMENT FEE",
      devFeePrice1: "#40,000",
      devFeePrice2: "#40,000",
      practicalFee: "MANUALS/WORKBOOKS",
      practicalFeePrice1: "#12,500",
      practicalFeePrice2: "#12,500",
      studentID: "MEDICALS",
      studentIDPrice1: "#28,500",
      studentIDPrice2: "--",
      studentPracticals: "STUDENT PRACTICALS*",
      studentPracticalsPrice1: "#60,500",
      studentPracticalsPrice2: "#60,500",
      hmoScheme: "HMO SCHEME",
      hmoSchemePrice1: "#10,000",
      hmoSchemePrice2: "#10,000",
      fees: "FEES TO BE PAID",
      feesPrice1: "#128,000",
      feesPrice2: "#139,000",
      discount: "AMOUNT SUBSIDIZED BY COLLEGE",
      discountPrice1: "#368,800",
      discountPrice2: "#351,800",
      totalFees: "TOTAL FEES TO BE PAID",
      totalFeesPrice1: "#295,000",
      totalFeesPrice2: "#262,000",
    },

    {
      courseTitle: "Certificate in Hospitality Operations",
      item: "ITEM",
      year1: "YEAR 1",
      tuitionFee: "TUITION FEE",
      tuitionFeePrice1: "#472,800",
      discount: "AMOUNT SUBSIDIZED BY COLLEGE",
      discountPrice1: "#356,800",
      fees: "FEES TO BE PAID",
      feesPrice1: "#116,000",
      acceptanceFee: "ACCEPTANCE FEE",
      acceptanceFeePrice1: "#5,000",
      examinationFee: "ADMIN FEE",
      examinationFeePrice1: "#16,000",
      workshopFee: "PRACTICAL UNIFORMS",
      workshopFeePrice1: "#35,000",
      devFee: "DEVELOPMENT FEE",
      devFeePrice1: "#20,000",
      practicalFee: "MANUALS/WORKBOOKS",
      practicalFeePrice1: "#10,000",
      studentID: "MEDICALS",
      studentIDPrice1: "#28,500",
      studentPracticals: "STUDENT PRACTICALS*",
      studentPracticalsPrice1: "#70,500",
      hmoScheme: "HMO SCHEME",
      hmoSchemePrice1: "#10,000",

      totalFees: "TOTAL FEES TO BE PAID",
      totalFeesPrice1: "#277,500",
    },
  ];
  const router = useRouter();
  const redirect = () => {
    router.push("/support");
  };

  return (
    <Fragment>
      <MobileSideBar />
      <Box
        mt="78px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        {Tuition.map((fee) => {
          return (
            <Accordion allowToggle borderTopColor="#FFF">
              <AccordionItem borderBottom="none">
                {({ isExpanded }) => (
                  <Box mx="91px" border="none">
                    <h2>
                      <AccordionButton
                        bg="#EBEDEF"
                        mb="20px"
                        borderTop="none"
                        _expanded={{ bg: "#021D37", color: "white" }}
                      >
                        <Heading
                          flex="1"
                          textAlign="left"
                          fontFamily="Playfair Display"
                          fontSize="28px"
                          fontWeight="700"
                          my="17px"
                          pr="100px"
                        >
                          {fee.courseTitle}
                        </Heading>

                        {isExpanded ? (
                          <FaChevronCircleDown size="30px" />
                        ) : (
                          <FaChevronCircleUp size="30px" />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      p="10px 57px"
                      fontFamily="Manrope"
                      fontSize="24px"
                      fontWeight="400"
                      lineHeight="33px"
                    >
                      <TableContainer mt="26px" w="915px">
                        <Table>
                          <Thead borderBottom="2px solid #FFF" w="363px">
                            <Tr>
                              <Th
                                py="20px"
                                fontFamily="Manrope"
                                fontWeight="700"
                                fontSize="24px"
                                color="#FFF"
                                ml="12px"
                                textAlign="center"
                                borderRight="2px solid #FFF"
                                bg="#021D37"
                              >
                                {fee.item}
                              </Th>

                              <Th
                                py="20px"
                                fontFamily="Manrope"
                                fontWeight="700"
                                fontSize="24px"
                                ml="12px"
                                borderRight="2px solid #FFF"
                                color="#FFF"
                                textAlign="center"
                                bg="#021D37"
                              >
                                {fee.year1}
                              </Th>
                              {fee.year2 && (
                                <Th
                                  isNumeric
                                  py="20px"
                                  fontFamily="Manrope"
                                  fontWeight="700"
                                  fontSize="24px"
                                  color="#FFF"
                                  bg="#021D37"
                                >
                                  {fee.year2}
                                </Th>
                              )}
                            </Tr>
                          </Thead>

                          <Tbody>
                            <Tr
                              bg="rgba(235, 237, 239, 0.38);"
                              borderBottom="2px solid #FFF"
                            >
                              <Td w="363px" borderRight="2px solid #FFF">
                                {fee.tuitionFee}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.tuitionFeePrice1}
                              </Td>
                              {fee.tuitionFeePrice2 && (
                                <Td textAlign="right" w="245px">
                                  {fee.tuitionFeePrice2}
                                </Td>
                              )}
                            </Tr>

                            <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                              <Td borderRight="2px solid #FFF">
                                {fee.discount}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.discountPrice1}
                              </Td>
                              {fee.discountPrice2 && (
                                <Td textAlign="right">{fee.discountPrice2}</Td>
                              )}
                            </Tr>

                            <Tr bg="#021D37" color="#FFF">
                              <Td borderRight="2px solid #FFF">{fee.fees}</Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.feesPrice1}
                              </Td>
                              {fee.feesPrice2 && (
                                <Td textAlign="right">{fee.feesPrice2}</Td>
                              )}
                            </Tr>

                            <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                              <Td borderRight="2px solid #FFF">
                                {fee.examinationFee}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.examinationFeePrice1}
                              </Td>
                              {fee.examinationFeePrice2 && (
                                <Td textAlign="right">
                                  {fee.examinationFeePrice2}
                                </Td>
                              )}
                            </Tr>

                            <Tr
                              bg="rgba(235, 237, 239, 0.38);"
                              borderBottom="2px solid #FFF"
                            >
                              <Td borderRight="2px solid #FFF">
                                {fee.workshopFee}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.workshopFeePrice1}
                              </Td>
                              {fee.workshopFeePrice2 && (
                                <Td textAlign="right">
                                  {fee.workshopFeePrice2}
                                </Td>
                              )}
                            </Tr>

                            <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                              <Td borderRight="2px solid #FFF">{fee.devFee}</Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.devFeePrice1}
                              </Td>
                              {fee.devFeePrice2 && (
                                <Td textAlign="right">{fee.devFeePrice2}</Td>
                              )}
                            </Tr>

                            <Tr
                              bg="rgba(235, 237, 239, 0.38);"
                              borderBottom="2px solid #FFF"
                            >
                              <Td borderRight="2px solid #FFF">
                                {fee.practicalFee}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.practicalFeePrice1}
                              </Td>

                              {fee.practicalFeePrice2 && (
                                <Td textAlign="right">
                                  {fee.practicalFeePrice2}
                                </Td>
                              )}
                            </Tr>

                            <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                              <Td borderRight="2px solid #FFF">
                                {fee.studentID}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.studentIDPrice1}
                              </Td>
                              {fee.studentIDPrice2 && (
                                <Td textAlign="right">{fee.studentIDPrice2}</Td>
                              )}
                            </Tr>

                            <Tr
                              bg="rgba(235, 237, 239, 0.38);"
                              borderBottom="2px solid #FFF"
                            >
                              <Td borderRight="2px solid #FFF">
                                {fee.hmoScheme}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.hmoSchemePrice1}
                              </Td>
                              {fee.hmoSchemePrice2 && (
                                <Td textAlign="right">{fee.hmoSchemePrice2}</Td>
                              )}
                            </Tr>
                            <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                              <Td borderRight="2px solid #FFF">
                                {fee.studentPracticals}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.studentPracticalsPrice1}
                              </Td>
                              {fee.studentPracticalsPrice2 && (
                                <Td textAlign="right">
                                  {fee.studentPracticalsPrice2}
                                </Td>
                              )}
                            </Tr>

                            <Tr bg="#021D37" color="#FFF">
                              <Td borderRight="2px solid #FFF">
                                {fee.totalFees}
                              </Td>
                              <Td
                                textAlign="right"
                                borderRight="2px solid #FFF"
                              >
                                {fee.totalFeesPrice1}
                              </Td>
                              {fee.totalFeesPrice2 && (
                                <Td textAlign="right">{fee.totalFeesPrice2}</Td>
                              )}
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>

                      <Box p="70px 91px">
                        <Text
                          fontFamily="Manrope"
                          fontWeight="400"
                          fontSize="24px"
                          lineHeight="33px"
                          mt="40px"
                        >
                          <b>NOTE:</b> Wavecrest College of Hospitality is a
                          project of Women’s Board, Educational Cooperation
                          Society a non-governmental not-for-profit
                          organization. In consideration of the college’s
                          mission to reach out to and give education opportunity
                          to the financially challenged, it has therefore
                          subsidized its fees.
                          <br />
                          <br />
                          However, those who can pay the full fees are
                          encouraged to do so in order to assist in training
                          more students.
                        </Text>

                        <Box>
                          <Heading
                            fontFamily="Playfair Display"
                            fontWeight="700"
                            fontSize="32px"
                            lineHeight="43px"
                            mt="80px"
                          >
                            Account Details
                          </Heading>
                          <Text
                            fontFamily="Manrope"
                            fontWeight="400"
                            fontSize="24px"
                            lineHeight="33px"
                            mt="7px"
                          >
                            All payments must be made into the bank account of
                            the College during registration.
                            <br /> Pay to: <b>“Wavecrest College” </b>
                            <br /> Bank Name: <b>Diamond Bank</b>
                            <br /> Account no.<b> 001-054-6867</b>
                          </Text>

                          <Button
                            bg="#021D37"
                            fontFamily="Manrope"
                            fontSize="16px"
                            fontWeight="700"
                            color="#FFF"
                            mt="16px"
                            w="183px"
                            borderRadius="3px"
                            onClick={() => redirect}
                          >
                            PAY NOW
                          </Button>
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}

        <Accordion allowToggle borderTopColor="#FFF">
          <AccordionItem borderBottom="none">
            {({ isExpanded }) => (
              <Box mx="91px" border="none">
                <h2>
                  <AccordionButton
                    bg="#EBEDEF"
                    mb="20px"
                    borderTop="none"
                    _expanded={{ bg: "#021D37", color: "white" }}
                  >
                    <Heading
                      flex="1"
                      textAlign="left"
                      fontFamily="Playfair Display"
                      fontSize="28px"
                      fontWeight="700"
                      my="17px"
                      pr="100px"
                    >
                      Scholarships
                    </Heading>

                    {isExpanded ? (
                      <FaChevronCircleDown size="30px" />
                    ) : (
                      <FaChevronCircleUp size="30px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  p="10px 57px"
                  fontFamily="Manrope"
                  fontSize="24px"
                  fontWeight="400"
                  lineHeight="33px"
                >
                  <Text
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="24px"
                    lineHeight="33px"
                  >
                    For over 40 years, we have constantly trained girls and
                    produced graduates who are in very High demand in the
                    Hospitality Industry. In order to assist those who would
                    like to pursue a career in Hospitality but are unable to
                    afford the complete tuition fees, Wavecrest College seeks
                    the collaboration of well-meaning Individuals or Corporate
                    bodies in order to train these young ladies through the
                    Scholarship fund.
                  </Text>

                  <Box>
                    <Heading
                      fontFamily="Manrope"
                      fontWeight="700"
                      fontSize="24px"
                      lineHeight="43px"
                      mt="37px"
                    >
                      ELIGIBILITY
                    </Heading>

                    <Box
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="24px"
                      lineHeight="33px"
                    >
                      <Text>
                        Students must meet the following criteria in order to
                        qualify for Scholarship:
                      </Text>

                      <UnorderedList>
                        <ListItem>
                          Proof of inability to pay complete fees
                        </ListItem>

                        <ListItem>High performance in admission tests</ListItem>

                        <ListItem>
                          GP in semester performance not less than 2.5
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>

                  <Box
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="24px"
                    lineHeight="33px"
                    mt="37px"
                  >
                    <Heading
                      fontFamily="Manrope"
                      fontWeight="700"
                      fontSize="24px"
                      lineHeight="43px"
                      mb="7px"
                    >
                      WAVECREST COLLEGE OF HOSPITALITY SCHOLARSHIP FUND
                      CATEGORIES
                    </Heading>

                    <UnorderedList>
                      <ListItem>
                        CORPORATE SCHOLARSHIP <br /> Who gives? Any registered
                        organisation
                      </ListItem>
                      <ListItem>
                        INDIVIDUAL OR FAMILY SCHOLARSHIP <br /> Who gives? Any
                        Individual or Family
                      </ListItem>
                      <ListItem>
                        COMMON FUND SCHOLARSHIP <br /> Who gives? Any Individual
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box p="51px 91px">
                    <Heading
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="32px"
                      lineHeight="43px"
                      mb="20px"
                    >
                      You can Support the Scholarship Scheme by following the
                      link below:
                    </Heading>
                    <Text
                      onClick={() => redirect()}
                      bg="#021D37"
                      p="10px"
                      w="142px"
                      color="#FFF"
                      borderRadius="5px"
                      fontFamily="Open Sans"
                      fontWeight="700"
                      fontSize="17px"
                      textAlign="center"
                      cursor="pointer"
                      _hover={{
                        textDecoration: "none",
                        bg: "#020E1B",
                      }}
                    >
                      SUPPORT US
                    </Text>
                  </Box>
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        </Accordion>
      </Box>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <RespTuition />
      </Box>
    </Fragment>
  );
};

export default TuitionAndScholarship;
