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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

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
      trainingsTitle: "Hospitality Training Programs",
      trainingsImage: training1,
      trainingDurationTime: "FULLTIME",
      trainingDurationYear: "2YEARS",
      trainingsText:
        "Hospitality Training Programmes (HTP) is the training and consulting division geared towards industry managers, supervisors and operatives. This was formed to provide specialist human resource training, knowledge and advice to assist industry partners. The training is geared towards members of staff involved with providing service. In the training emphasis is placed on details that matter, customer care and improving standards to exceed expectations.",
      downloadBrochure: "Download HTP Brochure",
      button: "REGISTER",
      fileUrl: "/documents/Ojumo House.pdf",
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
      trainingsTitle: "National Skill Acquisition",
      trainingsImage: training3,
      trainingDurationTime: "FULLTIME",
      trainingDurationYear: "2YEARS",
      trainingsText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      downloadBrochure: "Download NSQ Brochure",
      button: "REGISTER",
      fileUrl: "/documents/Ojumo House.pdf",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
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

                  <Box bg="#021D37" w="2px" h="20px" m="auto 8px"></Box>

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
                      // ml="10px"
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
    </Fragment>
  );
};

export default Training;
