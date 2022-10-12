import React, { Fragment } from "react";
import { FaFileDownload } from "react-icons/fa";
import JsFileDownloader from "js-file-downloader";
import cth from "assets/Images/cth.png";
import training1 from "assets/Images/training1.png";
import training2 from "assets/Images/training2.png";
import training3 from "assets/Images/training3.png";
import trainingCert from "assets/Images/trainingCert.png";
import fileDownload from "assets/Images/paperDownload.png";
import {
  Box,
  Button,
  Link,
  Flex,
  Heading,
  Image,
  Text,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";

const Training = () => {
  const trainings = [
    {
      background: "#EBEDEF",
      trainingsTitle: "Confederation of Tourism and Hospitality",
      trainingsImage: cth,
      trainingDurationTime: "FULLTIME",
      trainingDurationYear: "2YEARS",
      trainingsText:
        "Wavecrest College is an approved International Centre for the delivery and assessment of the Professional Management Qualifications of the Institute of Hospitality, UK. ",
      reapprovalCert: "See Wavecrest College Reapproval Certificate 2020",
      downloadBrochure: "Download CTH Brochure",
      button: "APPLY NOW",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      background: "#FFF",
      trainingsTitle: "Professional Certificate in Hospitality",
      trainingsImage: training1,
      trainingDurationTime: "FULLTIME",
      trainingDurationYear: "2YEARS",
      trainingsText:
        "PCH:  The Professional Certificate in Hospitality (PCH) is a 10 week programme designed for operators in the hospitality industry and related-sectors who seek to expand their existing knowledge and skill-base, acquire new skills, and enhance their understanding of key hospitality operations in Food and Beverage, Housekeeping and Facility Management and Front Office and A-C below and other general areas. Participants have the opportunity to apply practical learning to their operations and receive constructive feedback during the period of learning. A 2-month industry internship to acquire valuable hands-on experience is available for suitably qualified candidates. One can choose to do a single module.",
      downloadBrochure: "Download HTP Brochure",
      button: "REGISTER",
      fileUrl: "/documents/Wavecrest HTP 2021 Brochure.pdf",
    },
    {
      background: "#EBEDEF",
      trainingsTitle: "Culinary Courses",
      trainingsImage: training2,
      trainingDurationTime: "FULLTIME",
      trainingDurationYear: "2YEARS",
      trainingsText:
        "Are you new to the world of Professional cookery or are you on a quest to develop you existing skills? Our culinary programs are designed to provide a step by step introduction to the fundamentals of cookery in the following areas – National and International dishes, yeast products, cakes & icing, pastries, finger foods, mixed drinks and lots more. Through a combined delivery process of demonstrations and hands-on sessions, you will be exposed to a world of eclectic fusions designed to delight your family and friends. ",
      downloadBrochure: "Download Culinary Course Brochure",
      button: "APPLY NOW",
      fileUrl: "/documents/Ojumo House.pdf",
    },
    {
      background: "#FFF",
      trainingsTitle: "National Skill Qualification",
      trainingsImage: training3,
      trainingDurationTime: "FULLTIME",
      trainingDurationYear: "2YEARS",
      trainingsText:
        "Nigerian Skills Qualification Framework (NSQF) formerly National Vocational Qualification Framework (NVQF) is a system for the development, classification and recognition of skills, knowledge and competencies acquired by individuals, irrespective of where and how the training or skill was acquired. The system gives a clear statement of what the learner must know or be able to do whether the learning took place in a classroom, on-the-job, or less formally. The framework indicates the comparability of different qualifications and how one can progress from one level to another. The framework is the structure within which the National Skills Qualifications (NSQs) operate.",
      downloadBrochure: "Download NSQ Brochure",
      button: "REGISTER",
      fileUrl: "/documents/Ojumo House.pdf",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const redirect = (e) => {
    e.preventDefault();

    navigate("/admission/applyOnline", { replace: true });
  };
  const navigateTo = [
    {
      name: "PROGRAMMES",
      redirect: () => {
        navigate("/academics/programmes", { replace: true });
      },
    },
    {
      name: "INTERNSHIP",
      redirect: () => {
        navigate("/academics/internship", { replace: true });
      },
    },
    {
      name: "NYSC",
      redirect: () => {
        navigate("/academics/nysc", { replace: true });
      },
    },
  ];
  return (
    <Fragment>
      <Navbar />
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
        <Image src={training3} h="100%" w="100%" objectFit="cover" />

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
            TRAINING
          </Text>
        </Box>
      </Box>

      <Flex flexDirection="column" mb="70px">
        {trainings.map((training, index) => {
          return (
            <Box
              key={index}
              bg={training.background}
              p={{
                sm: "75px 20px",
                md: "20px 40px",
                lg: "30px 91px",
                xl: "20px 91px",
                "2xl": "20px 91px",
              }}
            >
              <Box>
                <Box
                  w="88px"
                  h="3px"
                  bg="#021D37"
                  mb="10px"
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
                    sm: "22px",
                    md: "25px",
                    lg: "30px",
                    xl: "32px",
                    "2xl": "32px",
                  }}
                  color="#021D37"
                  m="0 auto"
                  mb="36px"
                  w={{
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "1200px",
                    "2xl": "1200px",
                  }}
                >
                  {training.trainingsTitle}
                </Heading>
              </Box>

              <Flex
                mt="24px"
                alignItems="center"
                m="0 auto"
                w={{
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "1200px",
                  "2xl": "1200px",
                }}
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "flex",
                  "2xl": "flex",
                }}
              >
                <Box
                  bg="#FFF"
                  borderRadius="3px"
                  mr={{
                    sm: "0",
                    md: "0",
                    lg: "0",
                    xl: "50px",
                    "2xl": "50px",
                  }}
                >
                  <Image
                    src={training.trainingsImage}
                    maxWidth="none"
                    w={{
                      sm: "100%",
                      md: "100%",
                      lg: "100%",
                      xl: "auto",
                      "2xl": "auto",
                    }}
                  />
                </Box>

                <Flex alignItems="center">
                  <Heading
                    fontFamily="Manrope"
                    fontWeight="700"
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    }}
                    my="20px"
                    display={{
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "none",
                      "2xl": "none",
                    }}
                  >
                    {training.trainingDurationTime}
                  </Heading>

                  <Box
                    bg="#021D37"
                    w="2px"
                    h="20px"
                    m="auto 8px"
                    display={{
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "none",
                      "2xl": "none",
                    }}
                  ></Box>

                  <Heading
                    fontFamily="Manrope"
                    fontWeight="700"
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    }}
                    my="20px"
                    display={{
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "none",
                      "2xl": "none",
                    }}
                  >
                    {training.trainingDurationYear}
                  </Heading>
                </Flex>

                <Box>
                  <Text
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize={{
                      sm: "18px",
                      md: "24px",
                      lg: "24px",
                      xl: "24px",
                      "2xl": "24px",
                    }}
                    lineHeight="33px"
                  >
                    {training.trainingsText}
                  </Text>

                  <Link
                    onClick={onOpen}
                    fontFamily="Manrope"
                    fontWeight="700"
                    fontSize={{
                      sm: "20px",
                      md: "24px",
                      lg: "24px",
                      xl: "24px",
                      "2xl": "24px",
                    }}
                    textDecoration="underline"
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {training.reapprovalCert}
                  </Link>

                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg="#DCE5E5" p="30px" maxW="none" w="1110px">
                      <ModalCloseButton
                        bg="#021D37"
                        color="#FFF"
                        _hover={{
                          bg: "#020E1B",
                        }}
                      />

                      <ModalBody m="0 auto">
                        <Image src={trainingCert} />
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <Flex
                    alignItems="center"
                    mt="19px"
                    onClick={() =>
                      new JsFileDownloader({ url: training.fileUrl })
                    }
                    display={{
                      sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "flex",
                      "2xl": "flex",
                    }}
                  >
                    <FaFileDownload size="30px" color="#021D37" />
                    <Link
                      lineHeight="33px"
                      fontFamily="Manrope"
                      fontWeight="800"
                      fontSize="24px"
                      ml="10px"
                      color="#201D37"
                    >
                      {training.downloadBrochure}
                    </Link>
                  </Flex>

                  <Button
                    display="block"
                    w="142px"
                    height="46.89px"
                    bg="#021D37"
                    border="none"
                    color="#fff"
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="22px"
                    textAlign="center"
                    borderRadius="3px"
                    mt="40px"
                    onClick={(e) => redirect(e)}
                    _hover={{
                      bg: "#020E1B",
                      transition: "all ease 0.4s",
                    }}
                  >
                    {training.button}
                  </Button>

                  <Flex
                    alignItems="center"
                    mt="19px"
                    onClick={() =>
                      new JsFileDownloader({ url: training.fileUrl })
                    }
                    display={{
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                      xl: "none",
                      "2xl": "none",
                    }}
                  >
                    <Image src={fileDownload} w="20px" mr="13px" />

                    <Link
                      lineHeight="33px"
                      fontFamily="Manrope"
                      fontWeight="700"
                      fontSize={{
                        sm: "18px",
                        md: "18px",
                        lg: "20px",
                        xl: "24px",
                        "2xl": "24px",
                      }}
                      color="#201D37"
                    >
                      {training.downloadBrochure}
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>

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

export default Training;
