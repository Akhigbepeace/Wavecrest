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

const AdmissionRequirements = () => {
  const requirements = [
    {
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
                mb="20px"
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="24px"
                lineHeight="33px"
                listStyleType="disc"
              >
                {values}
              </ListItem>
            </UnorderedList>
          );
        });

        return (
          <Box key={index} bg={requirement.background} p="50px 91px">
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
            >
              {requirement.course}
            </Heading>

            <Flex mt="24px" alignItems="center">
              <Image
                src={waveimg}
                w="580"
                h="323px"
                borderRadius="3px"
                mr="45px"
              />

              <Box>
                <Box>{textToShow}</Box>

                <Link
                  fontFamily="Manrope"
                  fontWeight="700"
                  fontSize="24px"
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
                  href="/admission/applyOnline"
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
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdmissionRequirements;
