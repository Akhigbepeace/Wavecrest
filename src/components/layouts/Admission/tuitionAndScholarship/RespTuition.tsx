import React, { Fragment } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Text,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Grid,
} from "@chakra-ui/react";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import { Tuition } from "../constants";
import MobileRedirect from "components/molecules/MobileRedirect";

const RespTuition = () => {
  const navigateTo = [
    {
      name: "ADMISSION REQs",
      href: "/admission/admissionRequirements",
    },
    {
      name: "APPLY ONLINE",
      href: "/admission/applyOnline",
    },
    {
      name: "HOSTEL",
      href: "/admission/hostel",
    },
    {
      name: "FAQs",
      href: "/admission/faqs",
    },
  ];
  return (
    <Fragment>
      <MobilePageBanner
        imageURL="/assets/imgs/waveimg.png"
        title="TUITION AND SCHOLARSHIP"
      />

      <Box>
        {Tuition.map((fee, index) => {
          return (
            <Box
              key={index}
              p={{
                sm: "50px 20px",
                md: "50px",
                lg: "50px",
              }}
            >
              <Box>
                <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>
                <Heading
                  fontFamily="Playfair Display"
                  fontSize="22px"
                  fontWeight="700"
                  mb="30px"
                >
                  {fee.courseTitle}
                </Heading>
              </Box>

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
                      <Td borderRight="2px solid #FFF">{fee.examinationFee}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {fee.examinationFeePrice1}
                      </Td>
                      {fee.examinationFeePrice2 && (
                        <Td textAlign="right">{fee.examinationFeePrice2}</Td>
                      )}
                    </Tr>

                    <Tr
                      bg="rgba(235, 237, 239, 0.38);"
                      borderBottom="2px solid #FFF"
                    >
                      <Td borderRight="2px solid #FFF">{fee.workshopFee}</Td>
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
                      <Td borderRight="2px solid #FFF">{fee.practicalFee}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {fee.practicalFeePrice1}
                      </Td>

                      {fee.practicalFeePrice2 && (
                        <Td textAlign="right">{fee.practicalFeePrice2}</Td>
                      )}
                    </Tr>

                    <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                      <Td borderRight="2px solid #FFF">{fee.studentID}</Td>
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
                      <Td borderRight="2px solid #FFF">{fee.hmoScheme}</Td>
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
                        <Td textAlign="right">{fee.studentPracticalsPrice2}</Td>
                      )}
                    </Tr>

                    <Tr bg="#021D37" color="#FFF">
                      <Td borderRight="2px solid #FFF">{fee.totalFees}</Td>
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
            </Box>
          );
        })}

        <Box
          bg="#EBEDEF"
          p={{
            sm: "20px",
            md: "20px 40px",
            lg: "30px 91px",
          }}
        >
          <Box>
            <Box>
              <Box w="88px" h="3px" bg="#021D37"></Box>
              <Heading
                fontFamily="Playfair Display"
                fontWeight="700"
                fontSize="24px"
                lineHeight="43px"
              >
                Account Details
              </Heading>
            </Box>

            <Text
              fontFamily="Manrope"
              fontWeight="400"
              fontSize="18px"
              mt="7px"
            >
              All payments must be made into the bank account of the College
              during registration.
              <br />
              <br /> Pay to: <b>“Wavecrest College” </b>
              <br /> Bank Name: <b>Access Bank</b>
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
            >
              PAY NOW
            </Button>
          </Box>
        </Box>

        <Box
          p={{
            sm: "40px 20px",
            md: "40px",
            lg: "30px 91px",
          }}
        >
          <Box>
            <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>

            <Heading
              fontFamily="Playfair Display"
              fontSize="24px"
              fontWeight="700"
            >
              Scholarships
            </Heading>
          </Box>

          <Text fontFamily="Manrope" fontWeight="400" fontSize="18px" mt="15px">
            For over 40 years, we have constantly trained girls and produced
            graduates who are in very High demand in the Hospitality Industry.
            In order to assist those who would like to pursue a career in
            Hospitality but are unable to afford the complete tuition fees,
            Wavecrest College seeks the collaboration of well-meaning
            Individuals or Corporate bodies in order to train these young ladies
            through the Scholarship fund.
          </Text>
        </Box>
      </Box>

      <Grid
        justifyContent="center"
        gridTemplateColumns={{
          sm: "repeat(2, auto)",
          md: "repeat(3, auto)",
          lg: "repeat(3, auto)",
        }}
        mt="100px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
        }}
      >
        {navigateTo.map((redirect, index) => {
          return (
            <MobileRedirect
              key={index}
              pageName={redirect.name}
              pageURL={redirect.href}
            />
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default RespTuition;
