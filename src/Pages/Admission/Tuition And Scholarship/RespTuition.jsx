import React, { Fragment } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
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
import waveimg from "assets/Images/waveimg.png";
import { useNavigate } from "react-router-dom";

const Tuitions = [
  {
    courseTitle: "Higher National Diploma (HND) in Hospitality Management",
    item: "ITEM",
    year1: "YEAR 1",
    tuitionFee: "TUITION FEE",
    tuitionFeePrice1: "#359,000",
    examinationFee: "EXAMINATION FEE",
    examinationFeePrice1: "#40,000",
    workshopFee: "PRACTICAL WORKSHOP FEE",
    workshopFeePrice1: "#10,000",
    devFee: "DEVELOPMENT FEE",
    devFeePrice1: "#40,000",
    practicalFee: "PRACTICAL FEE",
    practicalFeePrice1: "#10,000",
    studentID: "STUDENT'S ID CARD",
    studentIDPrice1: "#2,000",
    hmoScheme: "HMO SCHEME",
    hmoSchemePrice1: "#2,000",
    fees: "TOTAL FEES",
    feesPrice1: "#464,000",
    discount: "AMOUNT SUBSIDIZED BY COLLEGE",
    discountPrice1: "#275,000",
    totalFees: "TOTAL FEES TO BE PAID",
    totalFeesPrice1: "#189,000",
  },

  {
    courseTitle: "National Diploma (ND) in Hospitality Management",
    bg: "#EBEDEF",
    item: "ITEM",
    year1: "YEAR 1",
    tuitionFee: "TUITION FEE",
    tuitionFeePrice1: "#359,000",
    examinationFee: "EXAMINATION FEE",
    examinationFeePrice1: "#40,000",
    workshopFee: "PRACTICAL WORKSHOP FEE",
    workshopFeePrice1: "#15,000",
    devFee: "DEVELOPMENT FEE",
    devFeePrice1: "#40,000",
    practicalFee: "INDUSTRIAL TRAINING FEE",
    practicalFeePrice1: "--",
    studentID: "STUDENT'S ID CARD",
    studentIDPrice1: "#1,000",
    hmoScheme: "HMO SCHEME",
    hmoSchemePrice1: "#3,000",
    fees: "TOTAL FEES",
    feesPrice1: "#458,000",
    discount: "AMOUNT SUBSIDIZED BY COLLEGE",
    discountPrice1: "#266,000",
    totalFees: "TOTAL FEES TO BE PAID",
    totalFeesPrice1: "#192,000",
  },

  {
    courseTitle: "Certificate in Hospitality Operations",
    item: "ITEM",
    year1: "YEAR 1",
    tuitionFee: "TUITION FEE",
    tuitionFeePrice1: "#359,000",
    examinationFee: "EXAMINATION FEE",
    examinationFeePrice1: "#20,000",
    workshopFee: "PRACTICAL WORKSHOP FEE",
    workshopFeePrice1: "#15,000",
    devFee: "DEVELOPMENT FEE",
    devFeePrice1: "#20,000",
    practicalFee: "INDUSTRIAL TRAINING FEE",
    practicalFeePrice1: "#8,000",
    studentID: "STUDENT'S ID CARD",
    studentIDPrice1: "#1,000",
    hmoScheme: "HMO SCHEME",
    hmoSchemePrice1: "#3,000",
    fees: "TOTAL FEES",
    feesPrice1: "#426,000",
    discount: "AMOUNT SUBSIDIZED BY COLLEGE",
    discountPrice1: "#278,000",
    totalFees: "TOTAL FEES TO BE PAID",
    totalFeesPrice1: "#148,000",
  },
];

const RespTuition = () => {
  const navigate = useNavigate();
  const navigateTo = [
    {
      name: "ADMISSION REQUIREMENTS",
      redirect: () => {
        navigate("/admission/admissionRequirements", { replace: true });
      },
    },
    {
      name: "APPLY ONLINE",
      redirect: () => {
        navigate("/admission/applyOnline", { replace: true });
      },
    },
    {
      name: "HOSTEL",
      redirect: () => {
        navigate("/admission/hostel", { replace: true });
      },
    },
    {
      name: "FAQs",
      redirect: () => {
        navigate("/admission/faqs", { replace: true });
      },
    },
  ];
  return (
    <Fragment>
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
        <Image src={waveimg} h="100%" w="100%" objectFit="cover" />

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
            fontSize="30px"
            textAlign="center"
            mt="250px"
          >
            TUITION AND SCHOLARSHIP
          </Text>
        </Box>
      </Box>

      <Box>
        {Tuitions.map((tuition, index) => {
          return (
            <Box
              key={index}
              bg={tuition.bg}
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
                  {tuition.courseTitle}
                </Heading>
              </Box>

              <TableContainer mt="26px" mb="40px">
                <Table>
                  <Thead borderBottom="2px solid #FFF">
                    <Tr>
                      <Th
                        py="20px"
                        fontFamily="Manrope"
                        fontWeight="700"
                        fontSize="24px"
                        textAlign="center"
                        borderRight="2px solid #FFF"
                        bg="#021D37"
                        color="#FFF"
                      >
                        {tuition.item}
                      </Th>

                      <Th
                        py="20px"
                        fontFamily="Manrope"
                        fontWeight="700"
                        fontSize="24px"
                        ml="12px"
                        borderRight="2px solid #FFF"
                        textAlign="center"
                        bg="#021D37"
                        color="#FFF"
                      >
                        {tuition.year1}
                      </Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    <Tr
                      bg="rgba(235, 237, 239, 0.38);"
                      borderBottom="2px solid #FFF"
                    >
                      <Td borderRight="2px solid #FFF">{tuition.tuitionFee}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.tuitionFeePrice1}
                      </Td>
                    </Tr>

                    <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                      <Td borderRight="2px solid #FFF">
                        {tuition.examinationFee}
                      </Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.examinationFeePrice1}
                      </Td>
                    </Tr>

                    <Tr
                      bg="rgba(235, 237, 239, 0.38);"
                      borderBottom="2px solid #FFF"
                    >
                      <Td borderRight="2px solid #FFF">
                        {tuition.workshopFee}
                      </Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.workshopFeePrice1}
                      </Td>
                    </Tr>

                    <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                      <Td borderRight="2px solid #FFF">{tuition.devFee}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.devFeePrice1}
                      </Td>
                    </Tr>

                    <Tr
                      bg="rgba(235, 237, 239, 0.38);"
                      borderBottom="2px solid #FFF"
                    >
                      <Td borderRight="2px solid #FFF">
                        {tuition.practicalFee}
                      </Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.practicalFeePrice1}
                      </Td>
                    </Tr>

                    <Tr bg="#EBEDEF" borderBottom="2px solid #FFF">
                      <Td borderRight="2px solid #FFF">{tuition.studentID}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.studentIDPrice1}
                      </Td>
                    </Tr>

                    <Tr
                      bg="rgba(235, 237, 239, 0.38);"
                      borderBottom="2px solid #FFF"
                    >
                      <Td borderRight="2px solid #FFF">{tuition.hmoScheme}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.hmoSchemePrice1}
                      </Td>
                    </Tr>

                    <Tr bg="#021D37" color="#FFF">
                      <Td borderRight="2px solid #FFF">{tuition.fees}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.feesPrice1}
                      </Td>
                    </Tr>

                    <Tr
                      bg="rgba(235, 237, 239, 0.38);"
                      borderBottom="2px solid #FFF"
                    >
                      <Td borderRight="2px solid #FFF">{tuition.discount}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.discountPrice1}
                      </Td>
                    </Tr>

                    <Tr bg="#021D37" color="#FFF">
                      <Td borderRight="2px solid #FFF">{tuition.totalFees}</Td>
                      <Td textAlign="right" borderRight="2px solid #FFF">
                        {tuition.totalFeesPrice1}
                      </Td>
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
              <Box w="88px" h="3px" bg="#021D37" mb="5px"></Box>

              <Heading
                fontFamily="Playfair Display"
                fontWeight="700"
                fontSize="24px"
                mb="7px"
              >
                Other Requirements may Include:
              </Heading>
            </Box>

            <Text fontFamily="Manrope" fontWeight="400" fontSize="18px">
              Medical Examination: ₦25,000 <br /> Practical Workshop Uniforms:
              ₦35,000 <br />
              Manuals: ₦15,000 <br /> Acceptance fee: N5,000 <br /> Students are
              expected to pay for their breakages
            </Text>
          </Box>

          <Text fontFamily="Manrope" fontWeight="400" fontSize="18px" mt="40px">
            <b>NOTE:</b> Wavecrest College of Hospitality is a project of
            Women’s Board, Educational Cooperation Society a non-governmental
            not-for-profit organization. In consideration of the college’s
            mission to reach out to and give education opportunity to the
            financially challenged, it has therefore subsidized its fees.
            <br />
            <br />
            However, those who can pay the full fees are encouraged to do so in
            order to assist in training more students.
          </Text>

          <Box>
            <Box mt="80px">
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

      <Box
        mt="70px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
          }}
          mb="50px"
        >
          {navigateTo.map((items, index) => {
            return (
              <Button
                key={index}
                fontFamily="Manrope"
                fontSize="18px"
                py="25px"
                mb="15px"
                mr="15px"
                textAlign="center"
                fontWeight="700"
                bg="#EEE"
                onClick={items.redirect}
              >
                {items.name}
              </Button>
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default RespTuition;
