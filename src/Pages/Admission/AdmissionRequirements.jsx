import {
  Box,
  Flex,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Link,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import waveimg from "assets/Images/waveimg.png";
import fileDownload from "assets/Images/paperDownload.png";

const AdmissionRequirements = () => {
  const requirements = [
    {
      linkTo: "https://paystack.com/pay/wchform2",
      background: "#FFF",
      course: "Higher National Diploma (HND) in Hospitality Management",
      coursePic: waveimg,
      courseRequirements: [
        "SSCE/NECO/GCE/WASC",
        "4 Credits Level Passes in not more than 2 sitings",
        "Wavecrest College Entrance Exam",
        "Minimum of One Year Industrial Training",
      ],
    },
    {
      linkTo: "https://paystack.com/pay/wchform1",
      background: "#EBEDEF",
      course: "National Diploma (ND) in Hospitality Management",
      coursePic: waveimg,
      courseRequirements: [
        "4 Credits Level Passes in SSCE/NECO/GCE/WASC",
        "UTME",
      ],
      viewUpdate: "Click to view updated Subject combinations",
    },
    {
      linkTo: "https://paystack.com/pay/wchform1",

      background: "#FFF",
      course: "Certificate in Hospitality Operations",
      coursePic: waveimg,
      courseRequirements: [
        "SSCE/NECO/GCE/WASC",
        "4 Credits Level Passes in not more than 2 sitings",
        "Wavecrest College Entrance Exam",
      ],
    },
  ];

  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics/Statistics",
    "Geography",
    "Food and Nutrition",
    "Technical Drawing",
    "English Language/Literature in English",
    "Home Management/Catering Craft",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
                src={waveimg}
                w="580px"
                h="323px"
                borderRadius="3px"
                mr="45px"
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
                  <ModalContent bg="#DCE5E5" p="30px" maxW="none" w="1110px">
                    <ModalHeader
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="32px"
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
                        fontSize="24px"
                        color="#021D37"
                      >
                        Five (5) credit passes in SSCE/NECO/GCE
                      </Heading>
                      <UnorderedList>
                        <Text
                          fontFamily="Manrope"
                          fontWeight="700"
                          fontSize="24px"
                          color="#021D37"
                        >
                          Four (4) Subjects can be chosen from this list:
                        </Text>
                        {subjects.map((subject) => {
                          return (
                            <ListItem
                              listStyleType="none"
                              fontFamily="Manrope"
                              fontWeight="400"
                              fontSize="24px"
                              color="#021D37"
                            >
                              {subject}
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </ModalBody>
                  </ModalContent>
                </Modal>

                <Link
                  href={requirement.linkTo}
                  target="_blank"
                  display="block"
                  textAlign="center"
                  bg="#021D37"
                  fontFamily="Manrope"
                  fontWeight="700"
                  fontSize="20px"
                  color="#FFF"
                  borderRadius="3px"
                  mt="30px"
                  pt="10px"
                  w="208px"
                  h="52px"
                  _hover={{
                    bg: "#020E1B",
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
                  <Image src={fileDownload} w="20px" mr="13px" />
                  <Text>Download Programme Brochure</Text>
                </Link>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdmissionRequirements;
