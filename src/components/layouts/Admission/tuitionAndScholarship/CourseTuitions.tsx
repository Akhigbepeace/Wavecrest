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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { Tuition } from "../constants";
import NextLink from "next/link";

const CourseTuitions = () => {
  return (
    <>
      {Tuition.map((fee, index) => {
        return (
          <Accordion key={index} allowToggle borderTopColor="#FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
                              {fee.tuitionFeePrice1}
                            </Td>
                            {fee.tuitionFeePrice2 && (
                              <Td textAlign="right" w="245px">
                                {fee.tuitionFeePrice2}
                              </Td>
                            )}
                          </Tr>

                          <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                            <Td borderRight="2px solid #FFF">{fee.discount}</Td>
                            <Td textAlign="right" borderRight="2px solid #FFF">
                              {fee.discountPrice1}
                            </Td>
                            {fee.discountPrice2 && (
                              <Td textAlign="right">{fee.discountPrice2}</Td>
                            )}
                          </Tr>

                          <Tr bg="#021D37" color="#FFF">
                            <Td borderRight="2px solid #FFF">{fee.fees}</Td>
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
                              {fee.workshopFeePrice1}
                            </Td>
                            {fee.workshopFeePrice2 && (
                              <Td textAlign="right">{fee.workshopFeePrice2}</Td>
                            )}
                          </Tr>

                          <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                            <Td borderRight="2px solid #FFF">{fee.devFee}</Td>
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                            <Td textAlign="right" borderRight="2px solid #FFF">
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
                        Society a non-governmental not-for-profit organization.
                        In consideration of the college’s mission to reach out
                        to and give education opportunity to the financially
                        challenged, it has therefore subsidized its fees.
                        <br />
                        <br />
                        However, those who can pay the full fees are encouraged
                        to do so in order to assist in training more students.
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
                          All payments must be made into the bank account of the
                          College during registration.
                          <br /> Pay to: <b>“Wavecrest College” </b>
                          <br /> Bank Name: <b>Diamond Bank</b>
                          <br /> Account no.<b> 001-054-6867</b>
                        </Text>

                        <NextLink href="/support" legacyBehavior passHref>
                          <Button
                            bg="#021D37"
                            fontFamily="Manrope"
                            fontSize="16px"
                            fontWeight="700"
                            color="#FFF"
                            mt="16px"
                            w="183px"
                            borderRadius="3px"
                          >
                            PAY NOW
                          </Button>
                        </NextLink>
                      </Box>
                    </Box>
                  </AccordionPanel>
                </Box>
              )}
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default CourseTuitions;
