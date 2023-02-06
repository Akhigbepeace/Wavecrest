import {
  Box,
  Flex,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Link,
  Grid,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import { useRouter } from "next/router";

const studyProgrammes1 = "/assets/imgs/HNDReq.jpg";
const studyProgrammes2 = "/assets/imgs/CertReq.jpg";
const studyProgrammes3 = "/assets/imgs/NdReq.jpg";
const admission = "/assets/imgs/Admission.png";
const fileDownload = "/assets/imgs/paperDownload.png";

const AdmissionRequirements = () => {
  const requirements = [
    {
      linkTo: "https://paystack.com/pay/wchform2",
      background: "#FFF",
      course: "Higher National Diploma (HND) in Hospitality Management",
      coursePic: studyProgrammes1,
      courseRequirements: [
        "National Diploma in Hospitality Management with at least a CREDIT",
        "Minimum of One Year Industrial Training",
      ],
    },
    {
      linkTo: "https://paystack.com/pay/wchform1",
      background: "#EBEDEF",
      course: "National Diploma (ND) in Hospitality Management",
      coursePic: studyProgrammes3,
      courseRequirements: [
        "5 Credits Level Passes in SSCE/NECO/GCE/WASC in not more than 2 sittings",
        "UTME",
      ],
      viewUpdate: "Click to view updated Subject combinations",
    },
    {
      linkTo: "https://paystack.com/pay/wchform1",

      background: "#FFF",
      course: "Certificate in Hospitality Operations",
      coursePic: studyProgrammes2,
      courseRequirements: [
        "SSCE/NECO/GCE/WASC",
        "4 Credits Level Passes in not more than 2 sitings",
        "Wavecrest College Screening",
      ],
    },
  ];

  const subjects = [
    "Biology or Agric Science or Health Science or Food and Nutrition or Catering Craft and Home Management",
    "Others - Any of the following",
    "English Language,  Civic Education, Economics or Commerce, Marketing, Physics, Mathematics or Statistics, Chemistry.",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const navigateTo = [
    {
      name: "TUITION AND SCHOLARSHIP",
      redirect: () => {
        router.push("/admission/tuitionAndScholarship");
      },
    },
    {
      name: "APPLY ONLINE",
      redirect: () => {
        router.push("/admission/applyOnline");
      },
    },
    {
      name: "HOSTEL",
      redirect: () => {
        router.push("/admission/hostel");
      },
    },
    {
      name: "FAQs",
      redirect: () => {
        router.push("/admission/faqs");
      },
    },
  ];
  return (
    <Fragment>
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
        <Image
          src={admission}
          alt="banner"
          h="100%"
          w="100%"
          objectFit="cover"
        />

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
            ADMISSION REQUIREMENTS
          </Text>
        </Box>
      </Box>

      <Box>
        {requirements.map((requirement, index) => {
          const textToShow = requirement.courseRequirements.map((values, i) => {
            return (
              <UnorderedList key={i}>
                <ListItem
                  mb={{
                    sm: "10px",
                    md: "15px",
                    lg: "15px",
                    xl: "20px",
                    "2xl": "20px",
                  }}
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize={{
                    sm: "18px",
                    md: "22px",
                    lg: "22px",
                    xl: "24px",
                    "2xl": "24px",
                  }}
                  lineHeight="33px"
                  listStyleType="disc"
                >
                  {values}
                </ListItem>
              </UnorderedList>
            );
          });

          return (
            <Box
              key={index}
              bg={requirement.background}
              p={{
                sm: "20px",
                md: "20px 40px",
                lg: "30px 91px",
                xl: "50px 91px",
                "2xl": "50px 91px",
              }}
            >
              <Box>
                <Box
                  w="88px"
                  h="3px"
                  bg="#021D37"
                  mb="10px"
                  mt="30px"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                ></Box>
                <Heading
                  fontFamily="Playfair Display"
                  fontWeight="700"
                  fontSize={{
                    sm: "24px",
                    md: "block",
                    lg: "block",
                    xl: "32px",
                    "2xl": "32px",
                  }}
                >
                  {requirement.course}
                </Heading>
              </Box>

              <Flex
                mt="24px"
                alignItems="center"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "flex",
                  "2xl": "flex",
                }}
              >
                <Image
                  src={requirement.coursePic}
                  alt="course-img"
                  w="580px"
                  h="323px"
                  borderRadius="3px"
                  mr="45px"
                  mb="20px"
                  objectFit="cover"
                />

                <Box>
                  <Box>{textToShow}</Box>

                  <Link
                    fontFamily="Manrope"
                    fontWeight="700"
                    fontSize="22px"
                    textDecoration="underline"
                    mt="33px"
                    lineHeight="33px"
                    onClick={onOpen}
                  >
                    {requirement.viewUpdate}
                  </Link>

                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent
                      bg="#DCE5E5"
                      p="30px"
                      maxW="none"
                      w={{
                        sm: "300px",
                        md: "600px",
                        lg: "900px",
                        xl: "1000px",
                        "2xl": "1000px",
                      }}
                    >
                      <ModalHeader
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize={{
                          sm: "24px",
                          md: "32px",
                          lg: "32px",
                          xl: "32px",
                          "2xl": "32px",
                        }}
                        color="#021D37"
                      >
                        Updated Subject Combinations
                      </ModalHeader>
                      <ModalCloseButton
                        bg="#021D37"
                        color="#FFF"
                        _hover={{
                          bg: "#020E1B",
                        }}
                      />
                      <ModalBody>
                        <Heading
                          fontFamily="Manrope"
                          fontWeight="700"
                          fontSize={{
                            md: "24px",
                            lg: "24px",
                            xl: "24px",
                            "2xl": "24px",
                          }}
                          color="#021D37"
                        >
                          Five (5) credit passes in SSCE/NECO/GCE/WASSCE in not
                          more than 2 sittings
                        </Heading>
                        <Text
                          fontFamily="Manrope"
                          fontWeight="700"
                          fontSize={{
                            md: "24px",
                            lg: "24px",
                            xl: "24px",
                            "2xl": "24px",
                          }}
                          color="#021D37"
                          my="20px"
                          lineHeight="20px"
                        >
                          Compulsory subjects for SSCE/NECO/GCE/WASSCE
                        </Text>
                        <UnorderedList>
                          <Text
                            fontFamily="Manrope"
                            fontWeight="700"
                            fontSize={{
                              md: "24px",
                              lg: "24px",
                              xl: "24px",
                              "2xl": "24px",
                            }}
                            color="#021D37"
                            my="10px"
                            lineHeight="20px"
                          >
                            Four (4) Subjects can be chosen from this list:
                          </Text>
                          {subjects.map((subject, index) => {
                            return (
                              <ListItem
                                key={index}
                                listStyleType="none"
                                fontFamily="Manrope"
                                fontWeight="400"
                                fontSize={{
                                  md: "24px",
                                  lg: "24px",
                                  xl: "24px",
                                  "2xl": "24px",
                                }}
                                color="#021D37"
                              >
                                {subject}
                              </ListItem>
                            );
                          })}
                        </UnorderedList>
                        <Text
                          fontFamily="Manrope"
                          fontWeight="700"
                          fontSize={{
                            md: "24px",
                            lg: "24px",
                            xl: "24px",
                            "2xl": "24px",
                          }}
                          color="#021D37"
                          mt="20px"
                          mb="5px"
                          lineHeight="20px"
                        >
                          Subject Combination for JAMB (UTME):
                        </Text>
                        <UnorderedList>
                          <ListItem
                            key={index}
                            listStyleType="none"
                            fontFamily="Manrope"
                            fontWeight="400"
                            fontSize={{
                              md: "24px",
                              lg: "24px",
                              xl: "24px",
                              "2xl": "24px",
                            }}
                            color="#021D37"
                          >
                            English Language (COMPULSORY and other three
                            subjects of choice (WITH EXCEPTION OF RELIGIOUS
                            STUDIES)
                          </ListItem>
                        </UnorderedList>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <Link
                    href={requirement.linkTo}
                    target="_blank"
                    display="block"
                    w="142px"
                    height="46.89px"
                    bg="#021D37"
                    border="none"
                    color="#fff"
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="22px"
                    pt="12px"
                    textAlign="center"
                    borderRadius="3px"
                    mt="8px"
                    _hover={{
                      bg: "#020E1B",
                      transition: "all ease 0.4s",
                    }}
                  >
                    APPLY NOW
                  </Link>

                  <Link
                    display={{
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                      xl: "none",
                      "2xl": "none",
                    }}
                    textAlign="center"
                    alignItems="center"
                    fontFamily="Manrope"
                    fontSize="14px"
                    fontWeight="800"
                    color="#021D37"
                    my="14px"
                  >
                    <Image
                      src={fileDownload}
                      alt="download"
                      w="20px"
                      mr="13px"
                    />
                    <Text
                      fontFamily="Manrope"
                      fontWeight="700"
                      fontSize={{
                        sm: "17px",
                        md: "18px",
                        lg: "20px",
                        xl: "24px",
                        "2xl": "24px",
                      }}
                      color="#201D37"
                    >
                      Download Programme Brochure
                    </Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
          );
        })}

        <Box
          mt="70px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
          px={{
            sm: "20px",
            md: "20px",
            lg: "91px",
            xl: "91px",
            "2xl": "91px",
          }}
        >
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
      </Box>
    </Fragment>
  );
};

export default AdmissionRequirements;
